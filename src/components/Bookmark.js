import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";
export class Bookmark extends Component {
    render() {
        return <MoviesContainer type="bookmark" />;
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
export default connect(mapStateToProps)(Bookmark);
