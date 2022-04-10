import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import apiService from "../data/apiService";
import { API_KEY } from "../data/config";
import useMovieContext from "../hooks/useMovieContext";

function HomePage() {
  const { movies } = useMovieContext;
  // const [movies, setMovies] = useState([]);
  // console.log(movies);
  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       const response = await apiService.get(
  //         `/discover/movie?api_key=${API_KEY}`
  //       );
  //       setMovies(response.data.results);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMovies();
  // }, []);
  return <MoviesList movies={movies} />;
}

export default HomePage;
