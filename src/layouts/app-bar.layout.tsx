import React from "react";
import AppBarComponent from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const AppBar: React.FC = () => {
  return (
    <AppBarComponent position="static">
      <Toolbar>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Recetas</Button>
        <Button color="inherit">Inventario</Button>
        <Button color="inherit">Favoritas</Button>
      </Toolbar>
    </AppBarComponent>
  );
};
