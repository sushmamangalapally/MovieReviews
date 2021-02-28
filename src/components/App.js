/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
import React, { createRef } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router, Route, Link, NavLink,
} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Landing from './Landing';
import SearchMovie from './SearchMovie';
import Favorites from './Favorites';
import Bookmark from './Bookmark';
import Watchlist from './Watchlist';
import WhatToWatch from './WhatToWatch';
import MovieDetail from './MovieDetail';
import store from '../store';
import '../css/App.css';

function App() {
  const skipToContentAnchorTag = createRef();
  const content = createRef();
  function handleFocusOfSkipToContentAnchor() {
    skipToContentAnchorTag.current.className = 'skip-to-content-visible';
  }
  function handleBlurOfSkipToContentAnchor() {
    skipToContentAnchorTag.current.className = 'skip-to-content-invisible';
    content.current.focus();
    document.querySelector('main#mainContent').focus();
  }
  function handleClickToContentAnchor() {
    skipToContentAnchorTag.current.className = 'skip-to-content-invisible';
    content.current.focus();
    document.querySelector('main#mainContent').focus();
  }
  return (
    <Provider store={store}>
      <Router>
        <div>
          <a
            href="#mainContent"
            id="skip-to-content-anchor"
            ref={skipToContentAnchorTag}
            className="skip-to-content-invisible"
            onFocus={handleFocusOfSkipToContentAnchor}
            onBlur={handleBlurOfSkipToContentAnchor}
            onClick={handleClickToContentAnchor}
            onKeyPress={handleClickToContentAnchor}
          >
            <u>Skip To Content</u>
          </a>

          <Navbar />
          <main id="mainContent" ref={content}>
            <Route path={['/']} component={Landing} />
            <Route exact path={['/search', '/search/mainContent']} component={SearchMovie} />
            <Route exact path={['/favorites', '/favorites#mainContent']} component={Favorites} />
            <Route exact path={['/bookmark', '/bookmark#mainContent']} component={Bookmark} />
            <Route exact path={['/watchlater', '/watchlater#mainContent']} component={Watchlist} />
            <Route exact path={['/movie/:id', '/movie/:id#mainContent']} component={MovieDetail} />
            <Route exact path={['/whattowatch', '/whattowatch#mainContent']} component={WhatToWatch} />
            {/* <Refapp/> */}
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
