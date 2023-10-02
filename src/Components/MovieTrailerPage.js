// MovieTrailerPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sampleMovies from "../Data/sampleMovies";

function MovieTrailerPage() {
    const { title } = useParams();
    const [trailerUrl, setTrailerUrl] = useState("");
    const selectedMovie = sampleMovies.find((movie) => movie.title === title);

    useEffect(() => {
        if (selectedMovie) {
            setTrailerUrl(selectedMovie.trailerUrl);
        }
    }, [selectedMovie]);

    return (
        <div>
            <h2>{title} Trailer</h2>
            {trailerUrl ? (
                <iframe
                    width="1500"
                    height="660"
                    src={trailerUrl}
                    title={`Trailer for ${title}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Trailer not available</p>
            )}
        </div>
    );
}

export default MovieTrailerPage;
