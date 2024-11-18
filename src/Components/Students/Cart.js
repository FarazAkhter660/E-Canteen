import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, Button, TextField } from "@mui/material";

const Cart = ({ cart, onPlaceOrder }) => {
  const [localCart, setLocalCart] = useState(cart);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handlePlaceOrderClick = () => {
    if (studentName.trim()) {
      onPlaceOrder({ items: localCart, student: studentName });
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <TextField
        label="Your Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <List>
        {localCart.length > 0 ? (
          localCart.map((item, index) => (
            <ListItem key={index}>
              <Typography>{item.name}</Typography>
            </ListItem>
          ))
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}
      </List>
      {localCart.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrderClick}
        >
          Place Order
        </Button>
      )}
    </Box>
  );
};

export default Cart;
