import React from 'react';
import CarouselHome from '../../components/Carousel/CarouselHome';
import CardContainer from '../../components/Card/CardContainer';
import ServicesContainer from '../../components/ServicesContainer';
import CatContainer from '../../components/Categories/CatContainer';
import SocialBar from '../../components/socialBar/socialBar';

const HomeScreen = () => {
  return (
    <>
      <CarouselHome />
      <CardContainer />
      <ServicesContainer />
      <CatContainer />
      <SocialBar />
    </>
  );
};

export default HomeScreen;
