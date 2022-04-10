import * as React from "react";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { API_KEY, BASE_URL } from "../data/config";
import apiService from "../data/apiService";

function TrendingPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await apiService.get(
          `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
        console.log(response);
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

export default TrendingPage;
