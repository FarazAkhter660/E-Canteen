import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText, Button, TextField } from "@mui/material";

const Cart = ({ cart, onPlaceOrder }) => {
  const [localCart, setLocalCart] = useState(cart);
  const [studentName, setStudentName] = useState(""); // State for student's name

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

  // Handle order placement
  const handlePlaceOrder = () => {
    if (studentName.trim() !== "") {
      onPlaceOrder(studentName, localCart); // Pass the student's name and cart to the parent
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {/* Input for student's name */}
      <TextField
        label="Student Name"
        variant="outlined"
        fullWidth
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        sx={{ marginBottom: "20px" }}
      />

      <List>
        {localCart.length > 0 ? (
          localCart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} /> {/* Assuming items have a 'name' */}
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
        <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      )}
    </Box>
  );
};

export default Cart;
