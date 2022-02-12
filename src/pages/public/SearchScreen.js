import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SectionBar from "../../components/SectionBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "../../components/Card";
import TextField from "@mui/material/TextField";

const SearchScreen = () => {
  let { busqueda } = useParams();
  const { productsList } = useSelector((state) => state.products);
  const [search, setSearch] = useState(busqueda);
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    setSearchProducts(
      productsList.filter((product) => {
        if (busqueda === "") {
          return product;
        } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
          return product;
        } else {
          return null;
        }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <SectionBar page={`Resultados de busqueda`} />
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <TextField
          /*           id="outlined-basic"
           */ /* id="input-with-icon-adornment" */
          id="input-with-icon-textfield"
          label="Busqueda"
          variant="outlined"
          focused
          sx={{ color: "#FB2E86" }}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "4rem",
        }}
      >
        {searchProducts.length > 0 ? (
          searchProducts.map((product) => {
            return <Card key={product._id} product={product} />;
          })
        ) : (
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: "24px",
              marginTop: "4rem",
            }}
          >
            No se encontraron resultados!!
          </Typography>
        )}
      </Box>
    </>
  );
};

export default SearchScreen;
