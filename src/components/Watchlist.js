import React, { Component } from "react";
import { connect } from "react-redux";
import MoviesContainer from "./MoviesContainer";
export class Watchlist extends Component {
    render() {
        const {moviesList}  = this.props;
        const notEmpty = moviesList && moviesList.watchMoviesList && moviesList.watchMoviesList.length !== 0;

        return (
            <React.Fragment>
                <h3>Watchlist</h3>
                {!notEmpty ? <p>No list yet</p> : null}
                <MoviesContainer type="watchlist" />
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
export default connect(mapStateToProps)(Watchlist);
