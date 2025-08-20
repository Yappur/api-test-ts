import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  release_date: number;
}

function PopularMovies() {
  const [movies, setMovies] = useState<Movies[]>([]);

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
    });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 p-4">
      {movies.map((movie) => (
        <div
          className="bg-card py-4 rounded-lg shadow text-white flex flex-col items-center"
          key={movie.id}
        >
          <h2>{movie.title}</h2>
          <img
            src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
            alt={movie.title}
          />
          <p>Lanzamiento: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default PopularMovies;
