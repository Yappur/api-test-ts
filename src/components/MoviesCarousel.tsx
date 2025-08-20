import "../index.css";
import type { Movie } from "../types/top20Movies.ts";

interface Props {
  movies: Movie[];
}

const MoviesCarousel = ({ movies }: Props) => {
  return (
    <div className="movies-carousel w-full overflow-x-auto py-4">
      <div className="flex gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card-slide flex-shrink-0 w-48 md:w-56 lg:w-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesCarousel;
