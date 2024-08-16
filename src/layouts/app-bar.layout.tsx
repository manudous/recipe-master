import React from "react";
import AppBarComponent from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, MenuItem, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export const AppBar: React.FC = () => {
  return (
    <AppBarComponent
      position="static"
      style={{ backgroundColor: "#6200EA", padding: "10px 20px" }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: "bold" }}>
          SmartRecipe Hub
        </Typography>
        <MenuItem
          color="inherit"
          style={{ margin: "0 15px", textTransform: "none" }}
        >
          Home
        </MenuItem>
        <MenuItem
          color="inherit"
          style={{ margin: "0 15px", textTransform: "none" }}
        >
          Recipes
        </MenuItem>
        <MenuItem
          color="inherit"
          style={{ margin: "0 15px", textTransform: "none" }}
        >
          Inventory
        </MenuItem>
        <MenuItem
          color="inherit"
          style={{ margin: "0 15px", textTransform: "none" }}
        >
          Favorites
        </MenuItem>
        <IconButton color="inherit" href="/profile">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBarComponent>
  );
};
