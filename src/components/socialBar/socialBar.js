import React from 'react';
import './socialBar.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SocialBar = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          my: '3rem',
        }}
      >
        <Typography sx={{ fontSize: '32px', fontFamily: 'Josefin Sans' }}>
          Redes Sociales
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          my: '5rem',
        }}
      >
        <ul className='socialListUl'>
          <li className='socialListIl'>
            <a href='/'>
              <i class='fa-brands fa-facebook-f'></i>
              <i class='fa-brands fa-facebook-f'></i>
              <i class='fa-brands fa-facebook-f'></i>
              <i class='fa-brands fa-facebook-f'></i>
              <i class='fa-brands fa-facebook-f'></i>
            </a>
          </li>
          <li className='socialListIl'>
            <a href='/'>
              <i class='fa-brands fa-linkedin-in'></i>
              <i class='fa-brands fa-linkedin-in'></i>
              <i class='fa-brands fa-linkedin-in'></i>
              <i class='fa-brands fa-linkedin-in'></i>
              <i class='fa-brands fa-linkedin-in'></i>
            </a>
          </li>
          <li className='socialListIl'>
            <a href='/'>
              <i class='fa-brands fa-twitter'></i>
              <i class='fa-brands fa-twitter'></i>
              <i class='fa-brands fa-twitter'></i>
              <i class='fa-brands fa-twitter'></i>
              <i class='fa-brands fa-twitter'></i>
            </a>
          </li>
          <li className='socialListIl'>
            <a href='/'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-instagram'></i>
            </a>
          </li>
          <li className='socialListIl'>
            <a href='/'>
              <i class='fa-brands fa-github'></i>
              <i class='fa-brands fa-github'></i>
              <i class='fa-brands fa-github'></i>
              <i class='fa-brands fa-github'></i>
              <i class='fa-brands fa-github'></i>
            </a>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default SocialBar;
