import * as React from "react";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import apiService from "../data/apiService";
import { API_KEY, BASE_URL } from "../data/config";
import { useParams } from "react-router-dom";

function DetailPage() {
  let params = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    if (params.id) {
      const getMovie = async () => {
        try {
          const response = await apiService.get(
            `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}`
          );
          setMovie(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getMovie();
    }
  }, [params]);
  return (
    <>
      <MovieDetail movie={movie} />
    </>
  );
}

export default DetailPage;
