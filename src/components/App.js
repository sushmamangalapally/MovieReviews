/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
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
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={SearchMovie} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/bookmark" component={Bookmark} />
          <Route exact path="/watchlater" component={Watchlist} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route exact path="/whattowatch" component={WhatToWatch} />

          {/* <Refapp/> */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
