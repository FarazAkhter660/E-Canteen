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
    { id: 2, student: "Doe", status: "Picked" },
  ]);

  const updateStatus = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ margin: "20px auto", maxWidth: "800px" }}
    >
      <Typography variant="h4" sx={{ padding: "16px" }}>
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
                <Button onClick={() => updateStatus(order.id, "Picked")}>
                  Picked
                </Button>
                <Button onClick={() => updateStatus(order.id, "Prepared")}>
                  Prepared
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderManagement;
