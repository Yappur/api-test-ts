import Navbar from "../components/Navbar";
import PopularMovies from "../components/PopularMovies";
import MoviesCarousel from "../components/MoviesCarousel";
import { useMovies } from "../hooks/useMovies";
import "../index.css";

function Home() {
  const { movies } = useMovies();
  return (
    <>
      <Navbar />
      <main className="">
        <MoviesCarousel movies={movies} />
        <PopularMovies movies={movies} />
      </main>
    </>
  );
}

export default Home;
