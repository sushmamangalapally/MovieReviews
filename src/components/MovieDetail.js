import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "../actions/searchActions";
import missingImg from "./download.png";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
export class MovieDetail extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }
    render() {
        const { movie, loading } = this.props;
        let movieDeets = (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src={
                                            movie.poster_path
                                                ? "https://image.tmdb.org/t/p/w500/" +
                                                  movie.poster_path
                                                : missingImg
                                        }
                                        alt={"Poster of " + movie.title}
                                        style={{
                                            width: "255px",
                                            height: "370px",
                                            margin: "auto",
                                        }}
                                    />
                                    <span className="card-title">
                                        {movie.title}
                                    </span>
                                </div>
                                <div className="card-content">
                                    <p>{movie.overview}</p>
                                </div>
                                <div className="card-action">
                                    <p>{movie.popularity}</p>
                                    <p>{movie.release_date}</p>
                                </div>
                                <div className="card-action">
                                    <Link to="/">Go back to home page.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
        return loading ? (
            <main>
                <div className="container">
                    <div className="row">
                        <Spinner />
                    </div>
                </div>
            </main>
        ) : (
            movieDeets
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.movies.loading,
    movie: state.movies.movie,
});
export default connect(mapStateToProps, { fetchMovie, setLoading })(
    MovieDetail
);
