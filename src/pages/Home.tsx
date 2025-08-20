// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Navbar from '../components/Navbar';
import PopularMovies from '../components/PopularMovies';
import "../index.css"

// interface Movies {
//     id: number;
//     title: string;
//     poster_path: string;
//     release_date: number;

// }

function Home() {

    //  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    //  const popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=es-AR&page=1";

    // useEffect(() => {
    //     fetchData();
    // }, []);

    //  const fetchData = async () => {
    //     axios.get(popularMovies).then((response) => {
    //         setMovies(response.data.results);
    //     });
    //  }
  return (
    <>
    <main className=''>
        <Navbar/>
  <PopularMovies />
      
    </main>
    </>
  );
}

export default Home;