import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import {
  postCategorias,
  putCategorias,
} from "../../redux/reducers/categorieReducer";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const validationSchema = yup.object({
  name: yup.string("Escribe el nombre").required("Nombre requerido"),
});

const CategoryForm = () => {
  const dispatch = useDispatch();
  const { categoriasList, active, loading, error } = useSelector(
    (state) => state.categories
  );
  const [imagePreview, setImagePreview] = useState("");
  const [ok, setOk] = useState(false);
  let navigate = useNavigate();

  let category = {};

  if (active) {
    const categories = categoriasList.filter((ca) => ca.uid === active);
    category = categories[0];
  }

  const Input = styled("input")({
    display: "none",
  });

  const handleImages = () => {
    document.querySelector("#imgCa").click();
  };

  useEffect(() => {
    if (loading === false && error === null && ok) {
      toast.success(active ? `Categoria actualizada!` : `Categoria creada!`, {
        position: "bottom-left",
        theme: "colored",
      });
      navigate("/backoffice/categories");
    }
    if (loading === false && error) {
      toast.error(error, {
        position: "bottom-left",
        theme: "colored",
      });
    }
  }, [active, error, loading, navigate, ok]);

  const initialValues = active
    ? {
        name: category.name,
        img: category.img,
      }
    : {
        name: "",
        img: "",
      };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (active) {
        dispatch(putCategorias({ ...values, active }));
        setOk(true);
      } else {
        dispatch(postCategorias(values));
        setOk(true);
        resetForm();
        setImagePreview("");
      }
    },
  });

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h5" align="center" mt={5} mb={5}>
        {active ? `Editar categoria ${category.name}` : "Crear categoria"}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />
        <Box mt={2} />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="imgCa"
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
          {active && category.img && (
            <img width={"100%"} src={category.img} alt={category.name} />
          )}
        </Box>
        <Box mt={2} />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          m={"15"}
        >
          {active ? "Guardar" : "Crear"}
        </Button>
      </form>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default CategoryForm;
