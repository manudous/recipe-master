import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import BreakfastImage from "@/core/assets/breakfast.webp";
import LunchImage from "@/core/assets/lunch.webp";
import DinnerImage from "@/core/assets/dinner.webp";
import DessertImage from "@/core/assets/dessert.webp";

export const Home: React.FC = () => {
  return (
    <div>
      <Container>
        {/* Hero Section */}
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <Typography variant="h4">
            Discover delicious recipes with what you have on hand
          </Typography>
        </div>

        {/* Categorías */}
        <Typography variant="h4" style={{ margin: "20px 0" }}>
          Categories
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} key="breakfast">
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={BreakfastImage}
                alt="breakfast"
              />
              <CardContent>
                <Typography variant="h6">Breakfast</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} key="dinner">
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={LunchImage}
                alt="lunch"
              />
              <CardContent>
                <Typography variant="h6">Lunch</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} key="dinner">
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={DinnerImage}
                alt="dinner"
              />
              <CardContent>
                <Typography variant="h6">Dinner</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} key="dinner">
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={DessertImage}
                alt="dessert"
              />
              <CardContent>
                <Typography variant="h6">Dessert</Typography>
              </CardContent>
            </Card>
          </Grid>
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
