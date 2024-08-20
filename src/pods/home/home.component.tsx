import React from "react";
import { Typography, Grid, Card, CardMedia, CardHeader } from "@mui/material";
import BreakfastImage from "@/core/assets/breakfast.webp";
import LunchImage from "@/core/assets/lunch.webp";
import DinnerImage from "@/core/assets/dinner.webp";
import DessertImage from "@/core/assets/dessert.webp";

export const Home: React.FC = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <div
        style={{
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <Typography variant="h4">
          Discover delicious recipes with what you have on hand
        </Typography>
      </div>

      <Typography variant="h4" style={{ margin: "20px 0" }}>
        Categories
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3} key="breakfast">
          <Card>
            <CardHeader
              title="Breakfast"
              style={{
                backgroundColor: "#F77C63",
                color: "#fff",
                fontWeight: "bolder",
              }}
            />
            <CardMedia
              component="img"
              height="140"
              image={BreakfastImage}
              alt="breakfast"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} key="dinner">
          <Card>
            <CardHeader
              title="Lunch"
              style={{
                backgroundColor: "#50AFFF",
                color: "#fff",
                fontWeight: "bolder",
              }}
            />
            <CardMedia
              component="img"
              height="140"
              image={LunchImage}
              alt="lunch"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} key="dinner">
          <Card>
            <CardHeader
              title="Dinner"
              style={{
                backgroundColor: "#C83C32",
                color: "#fff",
                fontWeight: "bolder",
              }}
            />
            <CardMedia
              component="img"
              height="140"
              image={DinnerImage}
              alt="dinner"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} key="dinner">
          <Card>
            <CardHeader
              title="Dessert"
              style={{
                backgroundColor: "#E0A638",
                color: "#fff",
                fontWeight: "bolder",
              }}
            />
            <CardMedia
              component="img"
              height="140"
              image={DessertImage}
              alt="dessert"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
