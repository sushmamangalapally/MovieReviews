import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import Spinner from "./Spinner";
import { addToFavorites, removeFromFavorites } from "../actions/listActions";
import MovieCard from "./MovieCard";
export class Favorites extends Component {
    render() {
        const {moviesList}  = this.props;
        const notEmpty = moviesList && moviesList.favoritesMoviesList && moviesList.favoritesMoviesList.length !== 0;

        return (
            <React.Fragment>
                <h3>Favorites</h3>
                {!notEmpty ? <p>No list yet</p> : null}
                <MoviesContainer type="favorite" />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        moviesList: state.moviesList,
        textTitle: state.moviesList.textTitle,
        loading: state.moviesList.loading,
    };
};
export default connect(mapStateToProps, {
    addToFavorites,
    removeFromFavorites,
})(Favorites);
