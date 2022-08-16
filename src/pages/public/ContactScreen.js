import React from 'react';
import SectionBar from '../../components/SectionBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Image from 'material-ui-image';
import ContactImg from '../../img/contactImg.png';
import TextField from '@mui/material/TextField';

const Contact = () => {
  const contactData = [
    {
      color: '#5726DF',
      string: 'Tel: 11 388 2332 <br /> Email:hekto@gmail.com',
    },
    {
      color: '#FB2E86',
      string: 'Foro de soporte <br /> las 24 horas!',
    },
    {
      color: '#FFB265',
      string: '20 Margaret st, London <br /> Great britain, 3NM98-LK',
    },
    {
      color: '#1BE982',
      string: 'Envío estandar gratis <br /> en cualquier producto!',
    },
  ];

  return (
    <>
      <SectionBar page='Contacto' />
      <Grid
        container
        spacing={12}
        justifyContent='space-around'
        my={1}
        sx={{ flexWrap: 'wrap' }}
      >
        <Grid item sx={{ width: '40%', minWidth: '300px' }}>
          <Typography
            sx={{
              fontFamily: 'Josefin Sans',
              fontSize: '20px',
              color: '#101750',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Información sobre nosotros
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontSize: '16px',
              color: '#8D92A7',
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </Typography>
        </Grid>
        <Grid item sx={{ width: '40%', minWidth: '300px' }}>
          <Typography
            sx={{
              fontFamily: 'Josefin Sans',
              fontSize: '20px',
              color: '#101750',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Formas de contacto
          </Typography>
          <Grid container spacing={3}>
            {contactData.map((data) => (
              <Grid item sx={{ display: 'inherit' }}>
                <Box
                  sx={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: data.color,
                    borderRadius: '22.5px',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Lato',
                    fontSize: '14px',
                    color: '#8A8FB9',
                    textAlign: 'left',
                    paddingLeft: '1rem',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: data.string,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={12}
        justifyContent='space-around'
        my={1}
        sx={{ flexWrap: 'wrap' }}
      >
        <Grid item sx={{ width: '40%', minWidth: '350px' }}>
          <Typography
            sx={{
              fontFamily: 'Josefin Sans',
              fontSize: '20px',
              color: '#101750',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Ponte en contacto!
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontSize: '16px',
              color: '#8D92A7',
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </Typography>
          <form>
            <Box m={3}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Tu nombre'
                variant='outlined'
              />
            </Box>
            <Box m={3}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Tu email'
                variant='outlined'
              />
            </Box>
            <Box m={3}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Tema'
                variant='outlined'
              />
            </Box>
            <Box m={3}>
              <TextField
                fullWidth
                id='outlined-multiline-static'
                label='Mensaje'
                multiline
                rows={4}
              />
            </Box>
            <Box
              sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Link to={'/'}>
                <Button
                  sx={{
                    backgroundColor: '#FF1788',
                    fontSize: '16px',
                    color: '#ffffff',
                    fontFamily: 'Lato',
                    marginY: '1rem',
                    textTransform: 'capitalize',
                    '&:hover': {
                      textDecoration: 'none',
                      backgroundColor: '#FF1788',
                    },
                  }}
                >
                  Enviar correo
                </Button>
              </Link>
            </Box>
          </form>
        </Grid>
        <Grid
          item
          sx={{
            width: { xs: '100%', md: '40%' },
            minWidth: { xs: '150px', md: '300px' },
            display: { xs: 'flex', md: 'initial' },
            justifyContent: { xs: 'center', md: 'initial' },
          }}
        >
          <Box
            sx={{
              width: { xs: '14rem', md: '25rem' },
              height: { xs: '14rem', md: '25rem' },
              paddingY: { xs: '2rem' },
            }}
          >
            <Image
              imageStyle={{
                height: '100%',
                width: '100%',
              }}
              src={ContactImg}
              alt='image'
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
