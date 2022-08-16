import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import MapSection from './MapSection/MapSection';

const Footer = () => {
  const categories1 = useSelector((state) => state.categories.categoriasList);
  let categoryNames = categories1.map((a) => a.name.toLowerCase());

  return (
    <>
      <Box sx={{ backgroundColor: '#EEEFFB' }}>
        <Grid container>
          <Grid
            item
            container
            xs={6}
            sx={{
              flexBasis: { xs: '100%', md: '50%' },
              maxWidth: { xs: '100%', md: '50%' },
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                padding: { xs: '2rem', md: '5rem' },
                flexBasis: { xs: '100%', md: '50%' },
                maxWidth: { xs: '100%', md: '50%' },
              }}
            >
              <Typography sx={{ fontSize: '32px', fontFamily: 'Josefin Sans' }}>
                Hekto
              </Typography>
              <Typography
                mt={3}
                sx={{ color: '#8A8FB9', textTransform: 'capitalize' }}
              >
                Contact Info 17 Princess Road, London, Greater London NW1 8JR,
                UK
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                padding: { xs: '2rem', md: '3.5rem' },
                flexBasis: { xs: '100%', md: '50%' },
                maxWidth: { xs: '100%', md: '50%' },
              }}
            >
              <List>
                <ListItem
                  disablePadding
                  sx={{ listStyle: 'none', justifyContent: 'center' }}
                >
                  <Typography
                    sx={{ fontSize: '25px', fontFamily: 'Josefin Sans' }}
                  >
                    Categorias
                  </Typography>
                </ListItem>

                {categoryNames.map((categorie) => (
                  <ListItem
                    key={categorie}
                    disablePadding
                    sx={{ justifyContent: 'center' }}
                  >
                    <MenuItem
                      component={Link}
                      to={`/productos/${categorie}`}
                      sx={{ padding: 0 }}
                    >
                      <Button
                        sx={{ color: '#8A8FB9', textTransform: 'capitalize' }}
                      >
                        {categorie}
                      </Button>
                    </MenuItem>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid
            item
            /* container */
            xs={6}
            sx={{
              display: 'flex',
              flexBasis: { xs: '100%', md: '50%' },
              maxWidth: { xs: '100%', md: '50%' },
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '25px',
                fontFamily: 'Josefin Sans',
                marginY: '1rem',
              }}
            >
              Ubicación!
            </Typography>
            <MapSection />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: '60px',
          backgroundColor: '#E7E4F8',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Typography color='#9DA0AE' fontSize='16px'>
          © Todos los derechos reservados
        </Typography>
        <Box>
          <InstagramIcon
            sx={{
              backgroundColor: '#151875',
              borderRadius: '15px',
              color: '#fff',
              fontSize: '15px',
              padding: '5px',
              margin: '0.25rem',
            }}
          />
          <FacebookIcon
            sx={{
              backgroundColor: '#151875',
              borderRadius: '15px',
              color: '#fff',
              fontSize: '15px',
              padding: '5px',
              margin: '0.25rem',
            }}
          />
          <LinkedInIcon
            sx={{
              backgroundColor: '#151875',
              borderRadius: '15px',
              color: '#fff',
              fontSize: '15px',
              padding: '5px',
              margin: '0.25rem',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
