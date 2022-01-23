import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const validationSchema = yup.object({
  name: yup.string("Escribe el nombre").required("Nombre requerido"),
});

const CategoryForm = () => {

  const {categoriasList, active} = useSelector(state => state.categories);

  let category = {};

  if(active){
    const categories = categoriasList.filter(ca => ca.uid === active);
    console.log(categories[0]);
    category = categories[0];
  }

  const initialValues = active 
       ? {name:category.name}
       : {name:""}

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
    </Container>
  );
};

export default CategoryForm;
