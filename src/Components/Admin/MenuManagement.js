import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MenuManagement = () => {
  const [menu, setMenu] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setMenu([...menu, item]);
    setItem("");
  };

  const deleteItem = (index) => {
    setMenu(menu.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Menu Management
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Menu Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addItem}
          disabled={!item}
        >
          Add
        </Button>
      </Box>
      <List>
        {menu.map((menuItem, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={menuItem} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuManagement;
