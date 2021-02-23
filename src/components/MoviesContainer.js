import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
    render() {
        const { movies, text, type, favoritesMoviesList, bookmarkMoviesList, watchMoviesList } = this.props;
        let content = "";
        let moviesList = [];
        console.log(movies);
        if (type === "landing") {
            moviesList = movies;
        } else if (type === "favorite") {
            moviesList = favoritesMoviesList;
        } else if (type === "watchlist") {
            moviesList = watchMoviesList;
        } else if (type === "bookmark") {
            moviesList = bookmarkMoviesList;
        }

        content =
            moviesList && moviesList.length > 0 ? (
                moviesList.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))
            ) : text && text.length ? (
                <p>Sorry, no results found!</p>
            ) : null;
        return (
            <div className="row">
                <div >
                    <div >{content}</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    moviesList: state.moviesList,
    favoritesMoviesList: state.moviesList.favoritesMoviesList,
    watchMoviesList: state.moviesList.watchMoviesList,
    bookmarkMoviesList: state.moviesList.bookmarkMoviesList,
    movies: state.movies.movies,
    text: state.movies.text,
});
export default connect(mapStateToProps)(MoviesContainer);
