import React from 'react'
import PropTypes from 'prop-types';


function Movie({key, id, year, title, summary, poster, genre}) {
    return (
        <div class="movie">
            <img src={poster} alt={title}></img>
            <div class="movie__data">
                <h3 class="movie__tile">{title}</h3>
                <h3 class="movie__year">{year}</h3>
                <p class="movie__summary">{summary.slice(0, 140)}.....</p>
                <ul class="movie__genres">
                {genre.map( (g, i) => {
                        return <li key={i}>{g}</li>;
                })}</ul>
                
            </div>
        </div>
    )
}

Movie.propTypes = {

    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.object.isRequired
};

export default Movie;
