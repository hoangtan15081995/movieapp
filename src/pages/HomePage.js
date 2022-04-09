import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import apiService from "../data/apiService";
import { API_KEY } from "../data/config";

function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await apiService.get(
          `/discover/movie?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
}

export default HomePage;
