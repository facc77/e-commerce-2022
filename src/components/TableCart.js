import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import image1 from "../img/support1.png";
import image2 from "../img/support2.png";
import image3 from "../img/support3.png";
import Image from "material-ui-image";

const rows = [
  { image: image1, precio: "ID", cantidad: "3", total: "1231" },
  { image: image2, precio: "ID", cantidad: "3", total: "1231" },
  { image: image3, precio: "ID", cantidad: "3", total: "1231" },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          {rows.map((row) => (
            <TableRow
              key={row.producto}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ height: "80px", width: "80px" }}>
                  <Image src={row.image} />
                </Box>
              </TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
