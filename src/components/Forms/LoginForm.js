import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../styles/LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  startLogin,
  resetErrorMessage,
} from "../../redux/reducers/authReducer";
import { toast } from "react-toastify";

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
  email: yup
    .string("Ingresa tu email")
    .email("Email invalido")
    .required("Se requiere email"),
  password: yup
    .string("Ingresa tu contrasena")
    .required("Se requiere contrasena"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error("Email o contraseña incorrecta!", {
        position: "bottom-left",
      });
    }
    return () => {
      if (error) {
        dispatch(resetErrorMessage());
      }
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(startLogin(values));
    },
  });

  return (
    <div>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          boxShadow: 1,
          borderRadius: 2,
          marginY: "5rem",
          width: { xs: "90%" },
        }}
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
            Login
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{
              mt: 1,
              width: { xs: "95%", md: "400" },
              height: 310,
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
            <ThemeProvider theme={theme}>
              <Button
                fontFamily="Lato"
                font-weight="bold"
                fontSize="17px"
                color="neutral"
                variant="contained"
                fullWidth
                type="submit"
                margin="1"
                sx={{ textTransform: "capitalize", fontSize: "17px" }}
              >
                Ingresar
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "0.5rem",
                }}
              >
                <MenuItem component={Link} to="/auth/register">
                  <Button
                    sx={{
                      color: "#9096B2",
                      fontSize: "15px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "registerButton",
                      },
                    }}
                    type="button"
                  >
                    No tienes cuenta? Registrate!
                  </Button>
                </MenuItem>
              </Box>
            </ThemeProvider>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default LoginForm;
