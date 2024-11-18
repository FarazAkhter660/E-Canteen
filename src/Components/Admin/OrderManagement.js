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

const OrderManagement = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);

  const updateStatus = (id, status) => {
    setOrderList(
      orderList.map((order) =>
        order.id === id ? { ...order, status } : order
      )
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
            <TableCell>Items</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.student || "Unknown"}</TableCell>
              <TableCell>
                {order.items.map((item, index) => (
                  <Typography key={index}>{item.name}</Typography>
                ))}
              </TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => updateStatus(order.id, "Picked")}
                >
                  Picked
                </Button>
                <Button
                  onClick={() => updateStatus(order.id, "Prepared")}
                >
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
