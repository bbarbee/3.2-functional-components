import React from "react";
import Genre from './Genre';

const Container = () => {
    return(
        <div className="container">
            <h1>Movie App</h1>
            <div className="genres">
                <Genre>
                    name="Documentary"
                    description="Non-fictional film intended to document reality"
                    movieTitle1="in our, mothers' gardens"
                    movieTitle2="Quincy"
                </Genre>
                <Genre>
                    name="Comedy"
                    description="Film that emphasizes humor"
                    movieTitle1="No Hard Feelings"
                    movieTitle2="Hustle"
                </Genre>

            </div>
        </div>
    );
};

export default Container;