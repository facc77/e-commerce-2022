import React from "react";
import CarouselHome from "../../components/Carousel/CarouselHome";
import CardContainer from "../../components/CardContainer";
import ServicesContainer from "../../components/ServicesContainer";

const HomeScreen = () => {
  return (
    <>
      <CarouselHome />
      <CardContainer />
      <ServicesContainer />
    </>
  );
};

export default HomeScreen;
