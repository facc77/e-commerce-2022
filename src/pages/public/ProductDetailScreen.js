import React, { useEffect } from "react";
import SectionBar from "../../components/SectionBar";
import { useSelector } from "react-redux";

const ProductDetailScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const producto = useSelector((state) => state.products.active) || "";

  return <SectionBar page={`Detalle de ${producto}`} />;
};

export default ProductDetailScreen;
