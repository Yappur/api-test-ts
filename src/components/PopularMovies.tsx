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
      console.log(response.data.results);
    });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 p-6">
      {movies.map((movie, index) => (
        <div className="relative" key={movie.id}>
          <div className="absolute -bottom-4 -left-4 z-[50] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out">
            <span className="styled-text text-8xl font-black drop-shadow-lg">
              {index + 1}
            </span>
          </div>

          <div className="relative bg-gradient-to-br from-[#1b1b1b] to-gray-500 border-2 border-slate-300 rounded-xl shadow-2xl text-white flex flex-col items-center overflow-visible group hover:scale-105 hover:shadow-3xl transition-all duration-300 ease-out">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>

            <div className="p-6 pt-8 flex flex-col items-center relative z-10">
              <h2 className="text-lg truncate w-60 font-bold mb-4 text-center line-clamp-2 group-hover:text-yellow-300 transition-colors duration-300">
                {movie.title}
              </h2>

              <div className="relative mb-4 rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                  alt={movie.title}
                  className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-1 flex flex-col justify-end items-end rounded-full border border-slate-600">
                <p className="text-sm text-slate-300 font-medium">
                  Lanzamiento:{" "}
                  <span className="text-white">{movie.release_date}</span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularMovies;
