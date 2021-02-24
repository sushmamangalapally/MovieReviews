import React, { Component } from "react";
import { connect } from "react-redux";
import MoviesContainer from "./MoviesContainer";
export class Bookmark extends Component {
    render() {
        const {moviesList}  = this.props;
        const notEmpty = moviesList && moviesList.bookmarkMoviesList && moviesList.bookmarkMoviesList.length !== 0;

        return (
            <React.Fragment>
                <h3>Bookmarks</h3>
                {!notEmpty ? <p>No list yet</p> : null}
                <MoviesContainer type="bookmark" />
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
export default connect(mapStateToProps)(Bookmark);
