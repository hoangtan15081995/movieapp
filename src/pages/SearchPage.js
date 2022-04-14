import * as React from "react";
import { Box, Button, Pagination, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { API_KEY, BASE_URL } from "../data/config";
import apiService from "../data/apiService";
import { NavLink } from "react-router-dom";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await apiService.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [search, page]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <>
      <Box
        sx={{
          width: 800,
          maxWidth: "100%",
          ml: "50px",
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <TextField
            className="textField"
            fullWidth
            label="Search movie"
            id="fullWidth"
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button type="submit" sx={{ height: "57px" }} variant="contained">
            Search
          </Button>
        </form>
      </Box>
      <MoviesList movies={movies} />
      <Stack spacing={2} m="auto" my="25px">
        <Pagination
          onClick={() => window.scroll(0, 0)}
          count={pageCount}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Stack>
    </>
  );
}

export default SearchPage;
