import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

const Menu = ({ menu, onAddToCart }) => {
  const handleAddToCart = (item, event) => {
    onAddToCart(item);
    const button = event.target;
    button.style.opacity = "0.6";
    setTimeout(() => {
      button.style.opacity = "1";
    }, 300);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "20px", fontWeight: "bold", textTransform: "uppercase", fontFamily: "moncerrat" }}
      >
        Here are the Menus
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {menu.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "300px",
              width: "100%",
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              sx={{
                height: "200px",
                objectFit: "cover", // Ensures all images are uniform
              }}
            />
            <CardContent>
              <Typography variant="h6" align="center" sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                {item.name}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: "block",
                margin: "10px auto",
                transition: "opacity 0.3s ease",
              }}
              onClick={(event) => handleAddToCart(item, event)}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
