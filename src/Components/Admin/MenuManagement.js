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
  Input,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MenuManagement = ({ updateMenuSession }) => {
  const [menu, setMenu] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState(null);

  const handleAddItem = () => {
    if (itemName && itemImage && itemPrice) {
      const newItem = {
        name: itemName,
        image: URL.createObjectURL(itemImage),
        price: itemPrice,
      }; //Creates a new object with the name and image (converted to a displayable URL).
      setMenu([...menu, newItem]);
      updateMenuSession([...menu, newItem]); // Update the menu session with the new item
      setItemName("");
      setItemImage(null);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedMenu = menu.filter((_, i) => i !== index); //filter creates a new array, excluding the deleted item.
    setMenu(updatedMenu);
    updateMenuSession(updatedMenu); // Update the menu session after deletion
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Menu Management
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TextField
            label="Food Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            fullWidth
          />
        </Box>
        <Input
          type="file"
          inputProps={{ accept: "image/*" }}
          onChange={(e) => setItemImage(e.target.files[0])}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem}
          disabled={!itemName || !itemImage}
        >
          Add Item
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
                onClick={() => handleDeleteItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <img
              src={menuItem.image}
              alt={menuItem.name}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <ListItemText primary={menuItem.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuManagement;
