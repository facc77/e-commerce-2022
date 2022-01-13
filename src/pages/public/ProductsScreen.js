import React, { useState } from "react";
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
  const activeCategory = useSelector((state) => state.categories.active);
  const products = useSelector((state) => state.products.productsList);
  const categoryProducts = products.filter(
    (product) => product.category.name === activeCategory
  );
  console.log(categoryProducts);

  const [view, setView] = useState("list");
  const [productList, setProductList] = useState(categoryProducts);

  const lessToMore = () => {
    setProductList(categoryProducts.sort((a, b) => b.price - a.price));
  };

  const MoreToLess = () => {
    setProductList(categoryProducts.sort((a, b) => a.price - b.price));
  };

  return (
    <>
      <SectionBar page={activeCategory} />
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
              <Card
                image={product.img}
                name={product.name}
                price={product.price}
                description={product.description}
                showIcons={true}
              />
            ))
          : productList.map((product) => (
              <HorizontalCard
                image={product.img}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
        {}
      </Box>
    </>
  );
};

export default ProductsScreen;
