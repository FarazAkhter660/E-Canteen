import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";

const Orders = ({ orders }) => {
  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>

      {orders.length > 0 ? (
        orders.map((order, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography variant="h6">
              Order {order.id} - {order.status}
            </Typography>
            <List>
              {order.items.map((item, idx) => (
                <ListItem key={idx} sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <Avatar src={item.image} alt={item.name} />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ marginY: 2 }} />
          </Box>
        ))
      ) : (
        <Typography variant="h6">No orders placed yet.</Typography>
      )}
    </Box>
  );
};

export default Orders;
