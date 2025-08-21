import "../index.css";
import type { Movie } from "../types/top20Movies.ts";
import { useState } from "react";

interface Props {
  movies: Movie[];
}

const MoviesCarousel = ({ movies }: Props) => {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedMovies = [...movies, ...movies];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 mb-4 ">
        <span className="bg-[#1b1b1b] text-4xl text-white font-bold mb-6 border-2 border-yellow-700 rounded-xl px-4 py-2">
          🎬 Peliculas Populares
        </span>
      </div>

      <div className="relative w-full py-6 overflow-hidden">
        <div
          className="flex gap-6 animate-scroll-infinite"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            width: `${duplicatedMovies.length * 280}px`,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedMovies.map((movie, index) => (
            <div
              key={`${movie.id}-${index}`}
              className="flex-shrink-0 w-64 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold">
                        ⭐ {movie.vote_average.toFixed(1)}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {new Date(movie.release_date).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 px-2">
                <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {movie.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesCarousel;
