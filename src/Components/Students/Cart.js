import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const Cart = ({ cart, onPlaceOrder }) => {
  const [localCart, setLocalCart] = useState(cart);

  // Update local cart if the cart prop changes
  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  // Remove item from cart
  const removeItem = (item) => {
    const updatedCart = localCart.filter((cartItem) => cartItem !== item);
    setLocalCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {localCart.length > 0 ? (
          localCart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeItem(item)}
              >
                Remove
              </Button>
            </ListItem>
          ))
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}
      </List>
      {localCart.length > 0 && (
        <Button variant="contained" color="primary" onClick={onPlaceOrder}>
          Place Order
        </Button>
      )}
    </Box>
  );
};

export default Cart;
