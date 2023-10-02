import React from 'react';
import { Link } from 'react-router-dom';
import './css/MoviePoster.css'; 

function MoviePoster({ title, posterUrl, id, description, rating }) {
    return (
        <div className="movie-poster">
            <Link to={`/movie/${title}`}>
                <img className="poster-image" src={posterUrl} alt={`Poster for ${title}`} />
            </Link>
            <p className="movie-description">Description: {description}</p>
            <p className="movie-rating">Rating: {rating}</p>
        </div>
    );
}

export default MoviePoster;
