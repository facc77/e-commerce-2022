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
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import image1 from "../img/support1.png";
import image2 from "../img/support2.png";
import image3 from "../img/support3.png";
import Image from "material-ui-image";

const rows = [
  {
    id: 1,
    image: image1,
    name: "producto1",
    precio: "12312",
    cantidad: "3",
    total: "888",
  },
  {
    id: 2,
    image: image2,
    name: "producto2",
    precio: "122",
    cantidad: "3",
    total: "1234331",
  },
  {
    id: 3,
    image: image3,
    name: "producto3",
    precio: "567",
    cantidad: "3",
    total: "334",
  },
];

export default function BasicTable() {
  const handleClick = (product) => {
    alert(product);
  };

  return (
    <TableContainer sx={{ border: 0, boxShadow: "none" }} component={Paper}>
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
                  <DeleteIcon
                    onClick={() => handleClick(row)}
                    sx={{
                      position: "relative",
                      bottom: " 5rem",
                      left: "4.5rem",
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
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: "Josefin Sans", fontSize: "14px" }}
              >
                ${row.precio}
              </TableCell>
              <TableCell align="right">
                <Button sx={{ padding: "0rem" }}>+</Button>
                {row.cantidad}
                <Button padding="0rem" sx={{ padding: "0.5rem" }}>
                  -
                </Button>
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: "Josefin Sans", fontSize: "14px" }}
              >
                ${row.precio * row.cantidad}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
