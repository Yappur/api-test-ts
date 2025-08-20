import "../index.css";
import PopularMovies from "./PopularMovies";

const MoviesCarousel = () => {
  return (
    <div class="movies-carousel">
      <div class="card-slide">
       <PopularMovies />
      </div>
    </div>
  );
};

export default MoviesCarousel;