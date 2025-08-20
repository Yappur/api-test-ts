import { useState, useEffect } from 'react';
import axios from 'axios';

interface Movies {
    id: number;
    title: string;
    poster_path: string;
    release_date: number;

}

function Home() {

const [movies, setMovies] = useState <Movies[]>([]);

     const apiKey = import.meta.env.VITE_TMDB_API_KEY;
     const popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=en-US&page=1";

    useEffect(() => {
        fetchData();
    }, []);

     const fetchData = async () => {
        axios.get(popularMovies).then((response) => {
            setMovies(response.data.results);
        });
     }
  return (
   
    <div>
        <h1>Popular Movies</h1>
     {movies.map((movie) => (
        <div key={movie.id}>
<h2>{movie.title}</h2>
<img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} width={200} />
<p>Lanzamiento: {movie.release_date}</p>
        </div>
     ))}
      
    </div>
  );
}

export default Home;