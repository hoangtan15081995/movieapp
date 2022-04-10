import React, { createContext, useEffect, useState } from "react";
import apiService from "../data/apiService";
import { API_KEY } from "../data/config";

const MovieContext = createContext();

function MovieContextProvider({ Children }) {
  const [movies, setMovies] = useState([]);
  console.log(movies);
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
    <MovieContext.Provider value={{ movies, response }}>
      {Children}
    </MovieContext.Provider>
  );
}

export { MovieContext, MovieContextProvider };
