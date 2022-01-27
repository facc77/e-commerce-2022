import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@material-ui/core";
import FormHelperText from "@mui/material/FormHelperText";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";
import {
  postProductos,
  putProductos,
} from "../../redux/reducers/productsReducer";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string("Escribe el nombre").required("Nombre requerido"),
  category: yup
    .string("Selecciona la categoria")
    .required("Categoria requerida"),
  shortDescription: yup
    .string("Escribe la descripcion corta")
    .required("shortDescription requerida"),
  description: yup
    .string("Escribe la descripción")
    .required("Descripción requerida"),
  price: yup.number("Escribe el precio").required("Precio requerido"),
});

const ProductForm = () => {
  const dispatch = useDispatch();
  const { productsList, activeBackoffice, error } = useSelector(
    (state) => state.products
  );
  const loadingP = useSelector((state) => state.products.loading);
  const { categoriasList, loading } = useSelector((state) => state.categories);
  const [imagePreview, setImagePreview] = useState("");
  const [ok, setOk] = useState(false);
  let navigate = useNavigate();

  let product = {};

  if (activeBackoffice) {
    const productos = productsList.filter((ca) => ca._id === activeBackoffice);
    product = productos[0];
  }

  useEffect(() => {
    if (loadingP === false && error === null && ok) {
      toast.success(
        activeBackoffice ? "Producto actualizado!" : " Producto creado!",
        { position: "bottom-left", theme: "colored" }
      );
      navigate("/backoffice/products");
    }
    if (loadingP === false && error) {
      toast.error(`${error}`, {
        position: "bottom-left",
        theme: "colored",
      });
    }
  }, [activeBackoffice, error, loadingP, navigate, ok]);

  const initialValues = activeBackoffice
    ? {
        name: product.name,
        category: product.category._id,
        img: product.img,
        shortDescription: product.shortDescription,
        description: product.description,
        price: product.price,
      }
    : {
        name: "",
        category: "",
        img: "",
        shortDescription: "",
        description: "",
        price: "",
      };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (activeBackoffice) {
        dispatch(putProductos({ ...values, activeBackoffice }));
        setOk(true);
      } else {
        dispatch(postProductos(values));
        setOk(true);
      }
    },
  });

  const Input = styled("input")({
    display: "none",
  });

  const handleImages = () => {
    document.querySelector("#img").click();
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h5" align="center" mt={5} mb={5}>
        {activeBackoffice
          ? `Editar producto ${product.name}`
          : "Crear producto"}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          type={"text"}
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />
        <Box mt={2} />
        <FormControl fullWidth>
          <InputLabel id="category-Label">categoria</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="category"
            variant="outlined"
            value={formik.values.category}
            onChange={formik.handleChange}
            autoWidth
            label="Categoria"
            error={formik.touched.category && Boolean(formik.errors.category)}
          >
            {!loading ? (
              categoriasList.map((cat) => (
                <MenuItem key={cat.uid} value={cat.uid}>
                  {cat.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem>cargando lista ...</MenuItem>
            )}
          </Select>
          <FormHelperText error>
            {formik.touched.category && formik.errors.category}
          </FormHelperText>
        </FormControl>
        <Box mt={2.5} />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="img"
            multiple
            type="file"
            value={undefined}
            onChange={(e) => {
              formik.setFieldValue("img", e.target.files[0]);
              setImagePreview(e.target.files[0]);
            }}
          />

          <Button
            fullWidth
            variant="contained"
            component="span"
            onClick={handleImages}
          >
            Upload image
          </Button>
        </label>
        <Box mt={1} />
        <Box sx={{ width: "100%" }}>
          {imagePreview && (
            <img
              width={"100%"}
              src={URL.createObjectURL(imagePreview)}
              alt={"imgPreview"}
            />
          )}
          {activeBackoffice && product.img && (
            <img width={"100%"} src={product.img} alt={product.name} />
          )}
        </Box>
        <Box mt={1} />
        <TextField
          fullWidth
          id="shortDescription"
          name="shortDescription"
          label="shortDescription"
          multiline
          rows={3}
          variant="outlined"
          value={formik.values.shortDescription}
          onChange={formik.handleChange}
          error={
            formik.touched.shortDescription &&
            Boolean(formik.errors.shortDescription)
          }
          helperText={
            formik.touched.shortDescription && formik.errors.shortDescription
          }
          margin="normal"
        />
        <Box mt={1} />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="description"
          multiline
          rows={4}
          variant="outlined"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          margin="normal"
        />
        <Box mt={1} />
        <TextField
          fullWidth
          id="price"
          name="price"
          label="price"
          type="number"
          variant="outlined"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          margin="normal"
        />
        <Box mt={2} />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          m={"15"}
        >
          {activeBackoffice ? "Guardar" : "Crear"}
        </Button>
      </form>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingP}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default ProductForm;
