import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { postUsuarios, putUsuarios } from "../../redux/reducers/userReducer";


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

// alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UserForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { usuariosList, active, loading, error } = useSelector((state) => state.users);
  const [alertConfig, setAlertConfig] = useState({open:false, msg:"", severity:""});
  const [ok, setOk] = useState(false);

  let user = {};

  if(active){
    const users = usuariosList.filter(us => us.uid === active);
    user = users[0];
  }

  //alert close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertConfig({open:false, msg:"", severity:""});
  };


  useEffect(() => {
    if((loading === false) && (error === null) && (ok)){
      setAlertConfig({open:true, msg:"usuario creado", severity:"success"});
      navigate("/backoffice/users");
    }
    if((loading === false) && error){
      setAlertConfig({open:true, msg:error.msg, severity:"error"})
    }
  }, [error, loading, navigate, ok]);
  
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
    onSubmit: (values, {resetForm}) => {
      
      if(active){
        dispatch(putUsuarios({...values,active}));
        setOk(true);

      }else{
        dispatch(postUsuarios(values));
        setOk(true)
      }
       resetForm();
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={alertConfig.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertConfig.severity} sx={{ width: '100%' }}>
          {alertConfig.msg}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UserForm;
