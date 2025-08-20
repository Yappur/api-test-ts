import Navbar from "../components/Navbar";
import PopularMovies from "../components/PopularMovies";
// import MoviesCarousel from "../components/MoviesCarousel";
import "../index.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        {/* <MoviesCarousel /> */}
        <PopularMovies />
      </main>
    </>
  );
}

export default Home;
