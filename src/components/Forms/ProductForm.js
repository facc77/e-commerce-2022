import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@material-ui/core";
import FormHelperText from "@mui/material/FormHelperText";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

const validationSchema = yup.object({
  name: yup.string("Escribe el nombre").required("Nombre requerido"),
  category: yup
    .string("Selecciona la categoria")
    .required("Categoria requerida"),
  img: yup.string("seleccione imagen").required("Imagen requerida"),
  description: yup
    .string("Escribe la descripción")
    .required("Descripción requerida"),
  price: yup.number("Escribe el precio").required("Precio requerido"),
});

const ProductForm = () => {
  const { loading, categoriasList } = useSelector((state) => state.categories);
  const [imagePreview, setImagePreview] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      img: "",
      description: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
        <Box sx={{width:"100%"}}>
          {imagePreview && (
            <img width={"100%"} src={URL.createObjectURL(imagePreview)} alt={"imgPreview"} />
          )}
        </Box>
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
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
