import { Grid } from "@mui/material";
import React from "react";
import CartMovie from "./CartMovie";

function MoviesList({ movies }) {
  return (
    <Grid container spacing={2} mt={1}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} md={4} lg={3}>
          <CartMovie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MoviesList;
