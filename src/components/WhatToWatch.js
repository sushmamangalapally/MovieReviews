import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { fetchRandomMovie } from "../actions/searchActions";

function WhatToWatch({
    favoritesMoviesList,
    watchMoviesList,
    fetchRandomMovie,
    randomMovies,
}) {
    const [selectAns, setSelectAns] = useState("");
    const [movie, setMovie] = useState(null);
    const [showChangeButton, setShowChangeButton] = useState(null);

    function handleChange(e) {
        setSelectAns(e.target.value);
    }
    function randomizeList(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - 0) + 0);
    }
    function handleClick() {
        console.log(selectAns);
        const movieObj =
            selectAns === "random"
                ? randomMovies[randomizeList(randomMovies.length)]
                : selectAns === "favorites"
                ? favoritesMoviesList[randomizeList(favoritesMoviesList.length)]
                : selectAns === "watchlist"
                ? watchMoviesList[randomizeList(watchMoviesList.length)]
                : null;
        setMovie(movieObj);
    }

    useEffect(() => {
        if (!randomMovies.length) fetchRandomMovie();
    }, [randomMovies]);

    async function handleSubmit(event) {
        console.log(selectAns);
        let movieObj = null;
        if (selectAns === "favorites") {
            movieObj =
                favoritesMoviesList[randomizeList(favoritesMoviesList.length)];
        } else if (selectAns === "watchlist") {
            movieObj = watchMoviesList[randomizeList(watchMoviesList.length)];
        } else if (selectAns === "random") {
            console.log(randomMovies);
            movieObj = randomMovies[randomizeList(randomMovies.length)];
        }

        console.log(movie);
        console.log(movieObj);
        setMovie(movieObj);
        setShowChangeButton(true);
        event.preventDefault();
    }
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <p>Movies Roulette</p>
                            <div className="input-field col s12">
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        What should you watch?
                                        <select
                                            value={selectAns}
                                            style={{ display: "block" }}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled selected>
                                                Choose your option
                                            </option>
                                            {favoritesMoviesList.length && (
                                                <option value="favorites">
                                                    Select from your favorites
                                                </option>
                                            )}
                                            {watchMoviesList.length && (
                                                <option value="watchlist">
                                                    Select from your watchlist
                                                </option>
                                            )}
                                            <option value="random">
                                                Select from any movies
                                            </option>
                                        </select>
                                    </label>
                                    <br />
                                    <input type="submit" className="btn btn-primary btn-bg mt-3" value="Submit" />
                                </form>
                            </div>
                            {showChangeButton === true && movie && (
                                <button
                                    className="btn btn-primary btn-bg mt-3"
                                    onClick={handleClick}
                                >
                                    Change movie
                                </button>
                            )}
                            {movie && <MovieCard movie={movie} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        favoritesMoviesList: state.moviesList.favoritesMoviesList,
        watchMoviesList: state.moviesList.watchMoviesList,
        loading: state.moviesList.loading,
        randomMovies: state.movies.randomMovies,
    };
};
export default connect(mapStateToProps, { fetchRandomMovie })(WhatToWatch);
