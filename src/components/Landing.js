/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import Spinner from './Spinner';
import { fetchPopularMovies, setLoading } from '../actions/searchActions';

export const Landing = ({
  fetchPopularMovies,
  setLoading,
  loading,
  popularMovies,
}) => {
  // eslint-disable-next-line prefer-const
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function handleScroll() {
      const scrollHeight = document.body.scrollHeight;
      const totalHeight = window.scrollY + window.innerHeight;

      if (totalHeight >= scrollHeight) {
        console.log('at the bottom');
        await setPage((state) => (state + 1));
        console.log('page2');
        console.log(page);
        if (page === 1) {
          await setPage((state) => (state + 1));
          await fetchPopularMovies(2);
        } else {
          await fetchPopularMovies(page);
        }
      }
    }
    fetchPopularMovies();
    setLoading();
    console.log('llklk fdfd');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, setPage]);

  //   function handleBackClick() {
  //     console.log('page1');
  //     console.log(page);
  //     page += 1;
  //     setPage(page);
  //     console.log('page2');
  //     console.log(page);
  //     fetchPopularMovies(page);
  //   }

  return (
    <main>
      <div className="section">
        <div className="container">
          {loading ? <Spinner /> : <MoviesContainer type="landing" popularMovies={popularMovies} />}
          {/* <button type="submit" onClick={handleBackClick}>Back to the top</button> */}
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies,
  loading: state.movies.loading,
  popularMovies: state.movies.popularMovies,
});
export default connect(mapStateToProps, { fetchPopularMovies, setLoading })(
  Landing,
);
