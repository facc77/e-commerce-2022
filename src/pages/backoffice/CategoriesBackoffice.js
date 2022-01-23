import React from 'react';
import { useSelector } from 'react-redux';
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEditCate } from '../../redux/reducers/categorieReducer';

const CategoriesBackoffice = () => {
  const {categoriasList, loading} = useSelector(state => state.categories);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(setEditCate(id));
    navigate("/backoffice/categories/edit");
  };
  const handleCreate = () => {
    dispatch(setEditCate(null));
    navigate("/backoffice/categories/create");
  };


 return (
  <Container maxWidth="sx">
 
      <Typography variant="h4" align="center" mt={5} mb={5}>
        Categorias
      </Typography> 
      <Button
        variant="contained"
        startIcon={<AddBoxIcon />}
        onClick={handleCreate}
      >
        Crear nueva Categoria
      </Button>
      <Box mb={2} /> 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (
              categoriasList.map((row) => (
                <TableRow
                  key={row.uid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <ButtonGroup size="small" aria-label="small button group">
                      <Button color="warning" onClick={()=>handleEdit(row.uid)}>Edit</Button>
                      <Button color="error">Delete</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div>generando lista..</div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
 );
}

export default CategoriesBackoffice;
