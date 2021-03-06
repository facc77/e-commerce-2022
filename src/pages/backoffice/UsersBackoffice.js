import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteUsuarios, setEdit } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { questionAlert, successAlert } from "../../helpers/alert";

const UsersBackoffice = () => {
  const { usuariosList, loading } = useSelector((state) => state.users);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(setEdit(id));
    navigate("/backoffice/users/edit");
  };
  const handleCreate = () => {
    dispatch(setEdit(null));
    navigate("/backoffice/users/create");
  };
  const handleDelete = (id) => {
    questionAlert("estás seguro de eliminar este usuario?").then((resp) => {
      if (resp) {
        dispatch(deleteUsuarios(id));
      } else {
        successAlert("", "Cancelado");
      }
    });
  };

  return (
    <Container maxWidth="sx">
      <Typography variant="h4" align="center" mt={5} mb={5}>
        Usuarios
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddBoxIcon />}
        onClick={handleCreate}
      >
        Crear nuevo usuario
      </Button>
      <Box mb={2} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (
              usuariosList.map((row) => (
                <TableRow
                  key={row.uid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup size="small" aria-label="small button group">
                      <Button
                        color="warning"
                        onClick={() => handleEdit(row.uid)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleDelete(row.uid)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>Generando lista...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default UsersBackoffice;
