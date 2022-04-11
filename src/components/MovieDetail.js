import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { URL } from "../data/config";
import "./DetailPage.css";
function MovieDetail({ movie }) {
  return (
    <>
      <div className="bigBox">
        <div
          className="detailMovie"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            })`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="detail">
          <CardMedia
            component="img"
            width="300"
            height="700"
            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {movie.title}
            </Typography>
            <Typography variant="h5" mb={1}>
              VOTE_AVERAGE: {movie.vote_average}
            </Typography>
            <Typography variant="h5" mb={5}>
              RELEASE_DATE: {movie.release_date}
            </Typography>
            <Typography variant="h5" mb={2}>
              OVERVIEW: {movie.overview}
            </Typography>
          </CardContent>
        </div>
      </div>
    </>
  );
}
export default MovieDetail;
