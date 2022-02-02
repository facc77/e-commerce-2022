import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { startRegister } from "../../redux/reducers/authReducer";
import "../../styles/LoginForm.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "Josefin Sans"].join(","),
  },
  palette: {
    neutral: {
      main: "#FB2E86",
      contrastText: "#fff",
    },
    registerButton: {
      main: "#fff",
    },
  },
});

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Se requiere nombre")
    .min(4, "Se requieren 4 caracteres como mínimo."),

  email: yup
    .string()
    .email("Email invalido.")
    .required("El email es requerido."),
  password: yup
    .string("Ingresa tu contrasena")
    .required("Se requiere contrasena")
    .min(6, "Se requieren 6 caracteres como mínimo.")
    .matches(/(?=.*[A-z])/, "Se requiere al menos una (1) letra.")
    .matches(/(?=.*[0-9])/, "Se requiere al menos un (1) numero.")
    .matches(
      /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "Se requiere al menos un caracter especial."
    ),
  passwordConfirm: yup
    .string()
    .required("La contraseña es requerida.")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden."),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { passwordConfirm, ...rest } = values;
      dispatch(startRegister(rest));
    },
  });

  return (
    <div>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ boxShadow: 1, borderRadius: 2, marginY: "5rem", width: "90%" }}
      >
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="Josefin Sans"
            component="h1"
            variant="h4"
            mt={2}
          >
            Registro
          </Typography>
          <Typography
            fontFamily="Lato"
            component="h1"
            font-size="17px"
            color="#9096B2"
          >
            Ingresa tus datos
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{
              mt: 1,
              width: { xs: "95%" },
              height: 460,
              padding: 0,
            }}
          >
            <Box margin={4}>
              <TextField
                sx={{ color: "#9096B2" }}
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box margin={4}>
              <TextField
                sx={{ color: "#9096B2" }}
                fullWidth
                id="name"
                name="name"
                label="Nombre"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>
            <Box margin={4}>
              <TextField
                sx={{ color: "#9096B2" }}
                fullWidth
                id="password"
                name="password"
                label="Contrasena"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Box margin={4}>
              <TextField
                sx={{ color: "#9096B2" }}
                fullWidth
                id="passwordConfirm"
                name="passwordConfirm"
                label="Repetir Contrasena"
                type="password"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                error={
                  formik.touched.passwordConfirm &&
                  Boolean(formik.errors.passwordConfirm)
                }
                helperText={
                  formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm
                }
              />
            </Box>
            <ThemeProvider theme={theme}>
              <Button
                fontFamily="Lato"
                font-weight="bold"
                font-size="27px"
                color="neutral"
                variant="contained"
                fullWidth
                type="submit"
                margin="2"
                sx={{ textTransform: "capitalize", fontSize: "17px" }}
              >
                Enviar
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterForm;
