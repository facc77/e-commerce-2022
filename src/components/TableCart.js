import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import {
  setAddProduct,
  reduceCartProduct,
  deleteCartProduct,
} from "../redux/reducers/productsReducer";
import Image from "material-ui-image";

export default function BasicTable() {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.products.cart);
  console.log(cartProducts.length);

  return cartProducts.length > 0 ? (
    <TableContainer sx={{ border: 0, boxShadow: "none" }} component={Paper}>
      <Table /* sx={{ minWidth: 150 }} */ aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontFamily: "Josefin Sans" }}>Producto</TableCell>
            <TableCell align="right" sx={{ fontFamily: "Josefin Sans" }}>
              Precio
            </TableCell>
            <TableCell align="right" sx={{ fontFamily: "Josefin Sans" }}>
              Cantidad
            </TableCell>
            <TableCell align="right" sx={{ fontFamily: "Josefin Sans" }}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProducts.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box
                  sx={{
                    height: { xs: "60px", md: "80px" },
                    width: { xs: "60px", md: "80px" },
                  }}
                >
                  <Image src={product.img} />
                  <CancelIcon
                    onClick={() => dispatch(deleteCartProduct(product))}
                    sx={{
                      position: "relative",
                      bottom: { xs: "4rem", md: "5rem" },
                      left: "5rem",
                      color: "#FF0000",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontSize: "14px",
                    color: "#000000",
                    display: "inline",
                  }}
                >
                  {product.name}
                </Typography>
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: "Josefin Sans", fontSize: "14px" }}
              >
                ${product.price}
              </TableCell>
              <TableCell align="right">
                <Button
                  padding="0rem"
                  sx={{ padding: "0.5rem" }}
                  onClick={() => dispatch(setAddProduct(product))}
                >
                  +
                </Button>

                <Box sx={{ position: { xs: "relative", md: "static" } }}>
                  <Typography
                    /* component={Typography} */
                    sx={{
                      position: { xs: "absolute", md: "static" },
                      bottom: { xs: "-1rem", md: 0 },
                      left: { xs: "2.5rem", md: 0 },
                    }}
                  >
                    {product.count}
                  </Typography>
                </Box>

                <Button
                  padding="0rem"
                  sx={{ padding: "0.5rem" }}
                  onClick={() => dispatch(reduceCartProduct(product))}
                >
                  -
                </Button>
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: "Josefin Sans", fontSize: "14px" }}
              >
                ${product.price * product.count}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Typography sx={{ fontFamily: "Josefin Sans", fontSize: "24px" }}>
      No tienes productos en el carrito!
    </Typography>
  );
}
