import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import Spinner from "./Spinner";
import { fetchPopularMovies, setLoading } from "../actions/searchActions";

export class Landing extends Component {
    componentDidMount() {
        this.props.fetchPopularMovies();
        this.props.setLoading();
    }
    render() {
        console.log(this.props);
        const { loading } = this.props;
        return (
            <div className="section">
                <div className="container">
                    {loading ? <Spinner /> : <MoviesContainer type="landing" />}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    movies: state.movies,
    loading: state.movies.loading,
});
export default connect(mapStateToProps, { fetchPopularMovies, setLoading })(
    Landing
);
