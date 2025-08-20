import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {

const [movies, setMovies] = useState();

     const apiKey = import.meta.env.VITE_TMDB_API_KEY;
     const popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1";

    useEffect(() => {
        fetchData();
    }, []);

      useEffect(() => {
    if (movies) {
      console.log(movies);
    }
  }, [movies]);

     const fetchData = async () => {
        axios.get(popularMovies).then((response) => {
            setMovies(response.data.results);
        });
     }
  return (
   
    <div>
      <h1>Home</h1>
      
    </div>
  );
}

export default Home;