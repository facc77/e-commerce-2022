import React from "react";
import CarouselHome from "../../components/Carousel/CarouselHome";
import CardContainer from "../../components/CardContainer";
import ServicesContainer from "../../components/ServicesContainer";
import CatContainer from "../../components/Categories/CatContainer";

const HomeScreen = () => {
  return (
    <>
      <CarouselHome />
      <CardContainer />
      <ServicesContainer />
      <CatContainer />
    </>
  );
};

export default HomeScreen;
