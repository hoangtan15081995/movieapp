import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function useMovieContext() {
  return useContext(MovieContext);
}

export default useMovieContext;
