import * as React from "react";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { API_KEY, BASE_URL } from "../data/config";
import apiService from "../data/apiService";
import { useForm } from "react-hook-form";

function SearchPage() {
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState("spiderman");
  const onSubmit = (data) => setSearch(data.search);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await apiService.get(
          `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [page, search]);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("search")} />
          <input type="submit" />
        </form>
      </div>
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
