import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "./Card";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setEditCate } from "../redux/reducers/categorieReducer";

const CatContainer = () => {
  const dispatch = useDispatch();
  const callDispatch = (name) => {
    console.log(name);
    dispatch(setEditCate(name));
  };

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
      name: "Consolas y Videojuegos",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_vlyqWIiNybGiRge0Udw4ksfkeyo-dyfQg&usqp=CAU",
    },
    {
      name: "Televisores",
      img: "https://static.eldiario.es/clip/b0558d74-f9e6-4f17-8c99-0a794176213f_16-9-discover-aspect-ratio_default_0.jpg",
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
          <MenuItem
            key={id}
            component={Link}
            to="/productos"
            onClick={() => callDispatch(categorie.name.toUpperCase())}
          >
            <Card
              key={id}
              name={categorie.name}
              image={categorie.img || null}
              price={null}
              showIcons={false}
            />
          </MenuItem>
        ))}
      </Box>
    </>
  );
};

export default CatContainer;
