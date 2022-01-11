import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "./Card";

const CatContainer = () => {
  const categories = [
    {
      name: "Laptops y Computadoras",
      img: "https://larepublica.pe/resizer/lKrOK6jeK-JEGf0VnylNtbGSSYk=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/MECOT2VHNBAKDELB2IVI3JZE3Y.jpg",
    },
    {
      name: "Camaras & Fotografía",
      img: "https://cdn.mos.cms.futurecdn.net/JN4id4eQ79r4c4JzHVNtH5.jpg",
    },
    {
      name: "Smartphones & Tablets",
      img: "https://www.sony.es/image/5d5c8d0485d37c1b150022bd9819bb1d?fmt=pjpeg&wid=660&bgcolor=F1F5F9&bgc=F1F5F9",
    },
    {
      name: "Videojuegos y Consolas",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_vlyqWIiNybGiRge0Udw4ksfkeyo-dyfQg&usqp=CAU",
    },
    {
      name: "Audio & Sonido",
      img: "https://www.softzone.es/app/uploads-softzone.es/2020/09/Audio-Denoise-1-800x419.jpg",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: "3rem",
          justifyContent: "center",
          my: "3rem",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontFamily: "Josefin Sans" }}>
          Categorias
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {categories.map((categorie, id) => (
          <Card
            key={id}
            name={categorie.name}
            image={categorie.img || null}
            price={null}
          />
        ))}
      </Box>
    </>
  );
};

export default CatContainer;
