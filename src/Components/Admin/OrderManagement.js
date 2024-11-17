import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Typography,
} from "@mui/material";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, student: "John", status: "Received" },
    { id: 2, student: "Doe", status: "Received" },
  ]);

  // Function to update the order status
  const updateStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ margin: "20px auto", maxWidth: "800px" }}
    >
      <Typography variant="h4" sx={{ padding: "16px", textAlign: "center" }}>
        Order Management
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.student}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                {order.status !== "Picked" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => updateStatus(order.id, "Picked")}
                    sx={{ marginRight: "8px" }}
                  >
                    Picked
                  </Button>
                )}
                {order.status !== "Prepared" && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => updateStatus(order.id, "Prepared")}
                  >
                    Prepared
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderManagement;
