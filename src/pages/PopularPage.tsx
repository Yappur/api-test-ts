import Navbar from "../components/Navbar";
import PopularMovies from "../components/PopularMovies";
import { useMovies } from "../hooks/useMovies";
import "../index.css";

function PopularPage() {
  const { movies } = useMovies();
  return (
    <>
      <Navbar />
      <main className="">
        <PopularMovies movies={movies} />
      </main>
    </>
  );
}

export default PopularPage;