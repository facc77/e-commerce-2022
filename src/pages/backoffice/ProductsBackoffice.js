import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Divider, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { setEditPro } from '../../redux/reducers/productsReducer';

const ProductsBackoffice = () => {
  const {loading, productsByCat} = useSelector(state => state.products);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleCreate = () => {
      dispatch(setEditPro(null));
      navigate("/backoffice/products/create");
  }
  const handleEdit = (id) => {
     dispatch(setEditPro(id));
     navigate("/backoffice/products/edit");
  }
 
 return (
  <Container maxWidth="sx">
 
      <Typography variant="h4" align="center" mt={5} mb={5}>
        Products
      </Typography>  
      <Button
        variant="contained"
        startIcon={<AddBoxIcon />}
        onClick={handleCreate}
      >
        Crear nuevo Producto
      </Button>


      {!loading 
        ? ( productsByCat.map((row) => (
          <div style={{marginTop:"35px", marginBottom:"25px"}} key={row.name}>
            <Typography
             sx={{ flex: '1 1 100%' }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
               {row.name}
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Image</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    row.data.map((prod) => (
                      <TableRow
                        key={prod._id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {prod.name}
                        </TableCell>
                        <TableCell align="right">
                        <Box
                          component="img"
                          sx={{
                            height: 50,
                            width: 50,
                            maxHeight: { xs: 60, md: 40 },
                            maxWidth: { xs: 60, md: 40 },
                          }}
                          alt={prod.name}
                          src={prod.img}
                        />
                        </TableCell>
                        <TableCell align="right">
                           {prod.price}
                        </TableCell>
                        <TableCell align="right">
                          <ButtonGroup size="small" aria-label="small button group">
                            <Button color="warning" onClick={()=>handleEdit(prod._id)}>Edit</Button>
                            <Button color="error">Delete</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <Divider light/>
            </div>
        )))
        : ( <div>generando lista..</div>)
      }

    
    </Container>
 );
}

export default ProductsBackoffice;
