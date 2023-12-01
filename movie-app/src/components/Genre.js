import React from "react";
import Movie from './Movie';

const Genre = ({ name, description, movieTitle1, movieTitle2}) => {
    return(
        <div className="genre">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="movies">
                <Movie title={movieTitle1} year="0000"/>
                <Movie title={movieTitle2} year="1111"/>
            </div>
        </div>
    );
};

export default Genre;