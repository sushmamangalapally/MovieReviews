/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie, setLoading } from '../actions/searchActions';
import missingImg from './download.png';
import Spinner from './Spinner';

export const MovieDetail = (props) => {
  useEffect(() => {
    props.fetchMovie(props.match.params.id);
    props.setLoading();
    console.log('testing');
  }, []);

  //   componentDidMount(){
  //     props.fetchMovie(props.match.params.id);
  //     props.setLoading();
  //   }
  const { movie, loading } = props;
  const movieDeets = (
    <main>
      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <div className="card">
              <div className="card-image">
                <img
                  src={
                                            movie.poster_path
                                              ? `https://image.tmdb.org/t/p/w500/${
                                                movie.poster_path}`
                                              : missingImg
                                        }
                  alt={`Poster of ${movie.title}`}
                  style={{
                    margin: 'auto',
                    width: '396px',
                    height: '596px',
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
};
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});
export default connect(mapStateToProps, { fetchMovie, setLoading })(
  MovieDetail,
);
