import Navbar from "../components/Navbar";
// import PopularMovies from "../components/PopularMovies";
import MoviesCarousel from "../components/MoviesCarousel";
import { useMovies } from "../hooks/useMovies";
import "../index.css";

function Home() {
  const { movies } = useMovies();
  return (
    <>
      <Navbar />
      <main className="">
        <div className="mt-6.5">
          <MoviesCarousel movies={movies} />
        </div>

        {/* <PopularMovies movies={movies} /> */}
      </main>
    </>
  );
}

export default Home;
