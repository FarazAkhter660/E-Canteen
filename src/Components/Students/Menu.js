import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const Menu = ({ menu = ["Pizza", "Burger", "Fries"], onAddToCart }) => {
  const handleAddToCart = (item) => {
    onAddToCart(item); // Pass the item to the parent component's function
  };

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {menu.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(item)} // Add item to cart when clicked
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
