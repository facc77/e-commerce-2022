import React from "react";
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
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const validationSchema = yup.object({
  name: yup.string("Escribe el nombre").required("Nombre requerido"),
  email: yup
    .string("Escribe el email")
    .email("Email incorrecto")
    .required("Email requerido"),
  role: yup.string("seleccione un role").required("Role requerido"),
  password: yup
    .string("Escribe la contraseña")
    .min(5, "contrasela nminima 6 caracteres")
    .required("Contraseña requerida"),
});

const UserForm = () => {
  const { usuariosList, active } = useSelector((state) => state.users);

  let user = {};

  if(active){
    const users = usuariosList.filter(us => us.uid === active);
    console.log(users[0]);
    user = users[0];
  }
  
  const initialValues = active 
     ? {
      name: user.name,
      email:user.email,
      role: user.role,
      password: "",

       } 
     :{
      name: "",
      email: "",
      role: "",
      password: "",
      }

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
       {active ? `Editar usuario ${user.name}` : "Crear usuario"}
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
        <Box mt={1} />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />
        <Box mt={2} />
        <FormControl fullWidth>
          <InputLabel id="role-Label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            name="role"
            variant="outlined"
            value={formik.values.role}
            onChange={formik.handleChange}
            autoWidth
            label="Role"
            error={formik.touched.role && Boolean(formik.errors.role)}
          >
            <MenuItem value={"USER_ROLE"}>user</MenuItem>
            <MenuItem value={"ADMIN_ROLE"}>admin</MenuItem>
          </Select>
          <FormHelperText error>
            {formik.touched.role && formik.errors.role}
          </FormHelperText>
        </FormControl>
        <Box mt={1} />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
          {active ? "Guardar" : "Crear" }
        </Button>
      </form>
    </Container>
  );
};

export default UserForm;
