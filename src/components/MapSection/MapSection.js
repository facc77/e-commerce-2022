import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import React from 'react';

const MapSection = () => {
  return (
    <Box
      sx={{
        width: { xs: '75%', md: '80%' },
        height: { xs: '150px', md: '70%' },
        mb: { xs: '2rem', md: 0 },
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100% ' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapSection;
