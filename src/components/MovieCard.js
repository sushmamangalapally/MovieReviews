import React, { Component } from "react";
import missingImg from "./download.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    addToFavorites,
    removeFromFavorites,
    addToWatchlist,
    removeFromWatchlist,
    addToBookmark,
    removeFromBookmark,
} from "../actions/listActions";

export class MovieCard extends Component {
    favoriteOrUnfavorite = (e) => {
        e.preventDefault();
        console.log(this);
        const faveMovies = this.props.favoritesMoviesList
            ? this.props.favoritesMoviesList
            : [];
        const isFave = faveMovies
            ? faveMovies.find((favMov) => favMov.id === this.props.movie.id)
            : null;
        if (isFave) {
            this.props.removeFromFavorites(faveMovies, this.props.movie);
        } else {
            this.props.addToFavorites(faveMovies, this.props.movie);
        }
        this.setState({ fave: !this.state.fave });
    };
    bookmarkOrUnbookmark = (e) => {
        e.preventDefault();
        console.log(this);
        const bookmarkMovies = this.props.bookmarkMoviesList
            ? this.props.bookmarkMoviesList
            : [];
        const isBookmarked = bookmarkMovies
            ? bookmarkMovies.find(
                  (bookmark) => bookmark.id === this.props.movie.id
              )
            : null;
        if (isBookmarked) {
            this.props.removeFromBookmark(bookmarkMovies, this.props.movie);
        } else {
            this.props.addToBookmark(bookmarkMovies, this.props.movie);
        }
        this.setState({ bookMrk: !this.state.bookMrk });
    };
    watchOrNotWatch = (e) => {
        e.preventDefault();
        console.log(this);
        const watchListMovies = this.props.watchMoviesList
            ? this.props.watchMoviesList
            : [];
        const isAddedToWatchList = watchListMovies
            ? watchListMovies.find(
                  (watchMovie) => watchMovie.id === this.props.movie.id
              )
            : null;
        if (isAddedToWatchList) {
            this.props.removeFromWatchlist(watchListMovies, this.props.movie);
        } else {
            this.props.addToWatchlist(watchListMovies, this.props.movie);
        }
        this.setState({ watch: !this.state.watch });
    };
    state = {
        fave: this.props.favoritesMoviesList
            ? this.props.favoritesMoviesList.find(
                  (favMov) => favMov.id === this.props.movie.id
              )
            : false,
        bookMrk: this.props.bookmarkMoviesList
            ? this.props.bookmarkMoviesList.find(
                  (bkmrkMov) => bkmrkMov.id === this.props.movie.id
              )
            : false,
        watch: this.props.watchMoviesList
            ? this.props.watchMoviesList.find(
                  (watchMov) => watchMov.id === this.props.movie.id
              )
            : false,
    };

    componentDidMount() {
        console.log(this);
    }

    render() {
        console.log(this);
        const movie = this.props;
        const movieInfo = movie.movie;
        const index = this.props.key;
        const faveMovies =
            this.props.moviesList && this.props.moviesList.favoritesMoviesList
                ? this.props.moviesList.favoritesMoviesList
                : null;

        return (
            <div className="col s3 center-align z-depth-5 movie-card" key={index}>
                <div className="col-content ">
                    <div className="img-content">
                        <img
                            className="poster"
                            src={
                                movieInfo.poster_path
                                    ? "https://image.tmdb.org/t/p/w500/" +
                                      movieInfo.poster_path
                                    : missingImg
                            }
                            alt={"Poster of " + movieInfo.title}
                            style={{ width: "255px", height: "370px" }}
                        />
                    </div>
                    <div className="info-content">
                        <h5>{movieInfo.title}</h5>
                        <p>{movieInfo.release_date}</p>
                        {/* 
                            <Ratings index={index} id={details["id"]} get_rating={emptyRating} get_date={notReleasedYet}/>
                            <i className="iconsChange small material-icons" 
                                onClick={this.addFav}
                                onMouseOver={this.fav_over}
                                onMouseOut={this.fav_out}>
                                {fav}
                            </i>
                            <i className="iconsChange small material-icons"
                                onClick={this.addWatch}
                                onMouseOver={this.watch_over}
                                onMouseOut={this.watch_out}>
                                {watch}
                            </i> */}
                    </div>
                    <Link
                        className="waves-effect waves-light btn-small"
                        style={{ "margin-bottom": "5px" }}
                        to={"/movie/" + movieInfo.id}
                    >
                        Details
                    </Link>
                    <br />
                    <p
                        className="iconsChange waves-effect waves-light btn-small"
                        onClick={this.favoriteOrUnfavorite}
                    >
                        {this.props.favoritesMoviesList.find(
                            (movie) => movie.id === movieInfo.id
                        ) ? (
                            <i class="material-icons">favorite</i>
                        ) : (
                            <i class="material-icons">favorite_border</i>
                        )}
                    </p>
                    <br />
                    <p
                        className="iconsChange waves-effect waves-light btn-small"
                        onClick={this.watchOrNotWatch}
                    >
                        {this.props.watchMoviesList.find(
                            (movie) => movie.id === movieInfo.id
                        ) ? (
                            <i class="material-icons">playlist_add_check</i>
                        ) : (
                            <i class="material-icons">playlist_add</i>
                        )}
                    </p>
                    <br />
                    <p
                        className="iconsChange waves-effect waves-light btn-small"
                        onClick={this.bookmarkOrUnbookmark}
                    >
                        {this.props.bookmarkMoviesList.find(
                            (movie) => movie.id === movieInfo.id
                        ) ? (
                            <i class="material-icons">bookmark</i>
                        ) : (
                            <i class="material-icons">bookmark_border</i>
                        )}
                    </p>
                    {/* <p className="iconsChange waves-effect waves-light btn-small" onClick={this.favoriteOrUnfavorite}>{fave}</p> */}
                    {/* <p className="iconsChange waves-effect waves-light btn-small" onClick={this.favoriteOrUnfavorite}>is</p> */}

                    {/* <i className="iconsChange small material-icons" onClick={this.addWatch} >{'watch'}</i> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        favoritesMoviesList: state.moviesList.favoritesMoviesList,
        bookmarkMoviesList: state.moviesList.bookmarkMoviesList,
        watchMoviesList: state.moviesList.watchMoviesList,
        text: state.moviesList.textTitle,
        loading: state.moviesList.loading,
    };
};
export default connect(mapStateToProps, {
    addToFavorites,
    removeFromFavorites,
    addToWatchlist,
    removeFromWatchlist,
    addToBookmark,
    removeFromBookmark,
})(MovieCard);
