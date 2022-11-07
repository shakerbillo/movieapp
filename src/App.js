import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

import './App.css'
import SearchIcon from './search.svg'


// API key 7a9f2fcc

const API_URL = 'http://www.omdbapi.com?apikey=7a9f2fcc'; 

const movie1 = {
    "Title": "The Blacklist",
    "Year": "2013–",
    "imdbID": "tt2741602",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDFkZDI5ZGUtYTdkOC00YTFiLWJjNjMtNTQ3ZjIxMTY2ZjMyXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
}

useEffect(() => {
   searchMovies('The Blacklist')
}, []) 


return (
    <div className='app'>
        <h1>Movieshaker</h1>

        <div className='search'>
            <input 
            placeholder='Type a movie'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            <img 
            src={SearchIcon} 
            alt='search'
            onClick={() => searchMovies(searchTerm)}
            />

        </div>

        {movies?.length > 0
            ? (
                <div className='container'>
        {movies.map((movie) => (
            <MovieCard movie={movie} />
        ))}
        </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )}

        
    </div>
);
}

export default App;
