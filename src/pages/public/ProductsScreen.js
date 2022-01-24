import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import SectionBar from "../../components/SectionBar";
import HorizontalCard from "../../components/HorizontalCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProductsScreen = () => {
  let { category } = useParams();
  category = category.toUpperCase();

  useEffect(() => {
    window.scrollTo(0, 0);
    MoreToLess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    MoreToLess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const [view, setView] = useState("grid");
  const [productOrder, setProductOrder] = useState("menor precio");

  const products = useSelector((state) => state.products.productsList);
  const categoryProducts = products
    .filter((product) => product.category.name === category)
    .sort((a, b) => a.price - b.price);

  const [productList, setProductList] = useState(categoryProducts);

  const lessToMore = () => {
    setProductOrder("mayor precio");
    setProductList(categoryProducts.sort((a, b) => b.price - a.price));
  };

  const MoreToLess = () => {
    setProductOrder("menor precio");
    setProductList(categoryProducts.sort((a, b) => a.price - b.price));
  };

  return (
    <>
      <SectionBar page={category} />
      <Grid container mt={4} columns={{ xs: 2, md: 12 }}>
        <Grid item xs={6}>
          <Typography
            sx={{
              color: "#151875",
              display: "inline",
              fontFamily: "Lato",
              fontSize: "2rem",
              marginLeft: "30%",
            }}
          >
            Resultados: {categoryProducts.length}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#151875",
                display: "inline",
                fontFamily: "Lato",
                fontSize: "16px",
              }}
            >
              Ordena por:
            </Typography>
            <Box sx={{ minWidth: 120, margin: "0.5rem" }}>
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{ color: "#151875" }}
                  id="demo-simple-select-label"
                >
                  Elige
                </InputLabel>
                <Select
                  sx={{ color: "#151875" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Precio"
                  value={productOrder}
                >
                  <MenuItem
                    onClick={() => MoreToLess()}
                    sx={{ color: "#151875" }}
                    value={"menor precio"}
                  >
                    Menor precio
                  </MenuItem>
                  <MenuItem
                    onClick={() => lessToMore()}
                    sx={{ color: "#151875" }}
                    value={"mayor precio"}
                  >
                    Mayor precio
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Typography
              sx={{
                color: "#151875",
                display: "inline",
                fontFamily: "Lato",
                fontSize: "16px",
              }}
            >
              View:
            </Typography>
            <FormatListBulletedOutlinedIcon
              onClick={() => setView("list")}
              sx={{
                color: "#151875",
                marginLeft: "0.5rem",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
            <WindowOutlinedIcon
              onClick={() => setView("grid")}
              sx={{
                color: "#151875",
                marginLeft: "0.5rem",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        mt={5}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {view === "grid"
          ? productList.map((product) => (
              <Card key={product._id} product={product} />
            ))
          : productList.map((product) => (
              <HorizontalCard key={product._id} product={product} />
            ))}
        {}
      </Box>
    </>
  );
};

export default ProductsScreen;
