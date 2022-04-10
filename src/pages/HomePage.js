import * as React from "react";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import apiService from "../data/apiService";
import { API_KEY } from "../data/config";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await apiService.get(
          `/discover/movie?api_key=${API_KEY}&page=${page}`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [page]);
  return (
    <>
      <MoviesList movies={movies} />
      <Stack spacing={2} m="auto" my="25px">
        <Pagination
          count={pageCount}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Stack>
    </>
  );
}

export default HomePage;
