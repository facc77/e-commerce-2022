import React from "react";
import SectionBar from "../../components/SectionBar";
import { useSelector } from "react-redux";

const ProductDetailScreen = () => {
  const producto = useSelector((state) => state.products.active) || "";

  return <SectionBar page={`Detalle de ${producto}`} />;
};

export default ProductDetailScreen;
