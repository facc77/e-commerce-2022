import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'material-ui-image';

export default function MediaCard({ name, image }) {
  return (
    <Card
      sx={{
        width: 300,
        m: '3rem',
      }}
    >
      <Image src={image} alt='image' />
      <CardContent sx={{ textAlign: 'center' }}>
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
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
