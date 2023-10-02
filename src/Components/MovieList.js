// MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import MoviePoster from './MoviePoster';
import sampleMovies from '../Data/sampleMovies'; // Import the sample movie data

function MovieList() {
    return (
        <div>
            {sampleMovies.map((movie, index) => (
                <Link
                    to={`/movie/${(movie.title)}`}
                >
                    <MoviePoster title={movie.title} posterUrl={movie.posterUrl} rating={movie.rating} description={movie.description}  />
                </Link>
            ))}
        </div>
    );
}

export default MovieList;
