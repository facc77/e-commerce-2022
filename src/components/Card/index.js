import * as React from 'react';
import './shakeAnimation.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'material-ui-image';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import { toast } from 'react-toastify';
import {
  setAddProduct,
  setActiveProduct,
} from '../../redux/reducers/productsReducer';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function MediaCard({ product }) {
  const { name, price, img, _id } = product;
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.auth);

  const verifyProduct = (productSelected) => {
    let product = JSON.parse(JSON.stringify(productSelected));
    product.count = 1;
    dispatch(setAddProduct(product));
  };

  const callDispatch = (product) => {
    logged
      ? verifyProduct(product)
      : toast.error('Debes loguearte para comprar!', {
          position: 'bottom-left',
        });
  };

  const addProductDispatch = (name) => {
    dispatch(setActiveProduct(name));
  };

  return (
    <Card
      sx={{
        width: 300,
        m: '3rem',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
          transition: 'all .2s ease-in-out',
        },
      }}
    >
      <Image
        imageStyle={{
          height: '80%',
          width: '80%',
          marginLeft: '2rem',
          marginTop: '2rem',
        }}
        src={img}
        alt='image'
      />
      <CardContent
        sx={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px',
        }}
      >
        <MenuItem
          key={_id}
          component={Link}
          to={`/detalleProducto/${product.category.name}/${product.name}`}
          onClick={() => addProductDispatch(product.name)}
          sx={{
            padding: '0',
            '&:hover': {
              textDecoration: 'underline',
              backgroundColor: '#fff',
            },
          }}
        >
          <Tooltip title={name}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              color='#151875'
              sx={{
                display: 'inline',
                fontSize: '15px',
                fontFamily: 'Josefin Sans',
                textTransform: 'capitalize',
                '&:hover': {
                  textDecoration: 'underline',
                  backgroundColor: '#fff',
                },
              }}
            >
              {name.length > 19 ? name.substring(0, 20) + '...' : name}
            </Typography>
          </Tooltip>
        </MenuItem>
        <Typography
          variant='body2'
          color='#FB2448'
          sx={{
            display: 'inline',
            fontSize: '16px',
            fontFamily: 'Josefin Sans',
            marginLeft: '0.5rem',
            marginBottom: '0.25rem',
            float: 'right',
          }}
        >
          {price ? `$${price}` : ''}
        </Typography>
      </CardContent>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '-120px',
            left: '10px',
          }}
        >
          <ShoppingCartOutlinedIcon
            className='cartIcon'
            sx={{
              color: '#151875',
              fontSize: '22px',
              padding: '5px',
              margin: '0.25rem',
              transition: '1s',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#EBECF0',
                borderRadius: '12px',
              },
              '&:active': {
                backgroundColor: '#949494',
                borderRadius: '12px',
              },
            }}
            onClick={() => callDispatch(product)}
          />
          {/* <button className='cartIcon'>
            <i
              className='fa-solid fa-cart-arrow-down '
              onClick={() => callDispatch(product)}
            ></i>
          </button> */}
          <FavoriteBorderOutlinedIcon
            sx={{
              color: '#151875',
              fontSize: '22px',
              padding: '5px',
              margin: '0.25rem',

              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#EBECF0',
                borderRadius: '12px',
              },
            }}
          />
        </Box>
      </Box>
    </Card>
  );
}
