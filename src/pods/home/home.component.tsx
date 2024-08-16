import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export const Home: React.FC = () => {
  return (
    <div>
      <Container>
        {/* Hero Section */}
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <Typography variant="h4">
            Descubre recetas deliciosas con lo que tienes a mano
          </Typography>
        </div>

        {/* Categorías */}
        <Typography variant="h4" style={{ margin: "20px 0" }}>
          Categorías
        </Typography>
        <Grid container spacing={4}>
          {["Desayuno", "Almuerzo", "Cena", "Postre"].map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://source.unsplash.com/photos/random?${category}`}
                  alt={category}
                />
                <CardContent>
                  <Typography variant="h6">{category}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recetas Destacadas */}
        <Typography variant="h4" style={{ margin: "20px 0" }}>
          Recetas Destacadas
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://source.unsplash.com/random?food${item}`}
                  alt="Receta"
                />
                <CardContent>
                  <Typography variant="h6">Receta {item}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Tiempo de preparación: 30 min
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
