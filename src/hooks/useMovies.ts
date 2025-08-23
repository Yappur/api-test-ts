import { useState, useEffect } from "react";
import axios from "axios";
import type { Movie, MovieDetails } from "../types/moviesType";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const popularMovies =
    "https://api.themoviedb.org/3/movie/popular?api_key=" +
    apiKey +
    "&language=es-AR&page=1";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios.get(popularMovies).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });
  };

  const detailsMovie = (id: number): string => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-AR`;
  };

  const fetchDetails = async (id: number): Promise<MovieDetails | null> => {
    const response = await axios.get<MovieDetails>(detailsMovie(id));
    console.log("Detalles de película:", response.data);
    return response.data;
  };

  return { movies, fetchDetails };
}
