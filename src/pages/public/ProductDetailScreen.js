import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import SectionBar from "../../components/SectionBar";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

const ProductDetailScreen = () => {
  let { productName, category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productName]);

  const products = useSelector((state) =>
    state.products.productsList.filter(
      (product) => product.category.name === category
    )
  );
  let productData = products.find(SelectedProduct);
  function SelectedProduct(value, index, array) {
    return value.name === productName;
  }
  //related Products trae el array sin el producto activo para mostrar aquellos relacionados
  let relatedProducts = products.filter(
    (product) => product.name !== productName
  );

  return (
    <>
      <SectionBar page={`Detalle de ${productName}`} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "6rem",
        }}
      >
        <ProductDetail product={productData} />
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: "3rem",
          justifyContent: "center",
          my: "3rem",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontFamily: "Josefin Sans" }}>
          Productos Relacionados
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {relatedProducts.map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default ProductDetailScreen;
