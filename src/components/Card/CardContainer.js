import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import ProductCard from '.';

const CardContainer = () => {
  const { productsList } = useSelector((state) => state.products);
  let lastElements = productsList.slice(-3);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          mt: '3rem',
          justifyContent: 'center',
          my: '3rem',
        }}
      >
        <Typography sx={{ fontSize: '32px', fontFamily: 'Josefin Sans' }}>
          Ultimos Productos
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {lastElements.map((product, id) => (
          <ProductCard key={id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default CardContainer;
