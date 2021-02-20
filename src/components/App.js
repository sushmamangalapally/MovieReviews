import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './Landing'
import MovieDetail from './MovieDetail';
import { Provider} from 'react-redux';
import store from '../store';
import {HashRouter as Router, Route} from 'react-router-dom';
// import Refapp from './Refapp'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          {/* <Landing/> */}
          <Route exact path="/" component={Landing}/>
          <Route exact path="/movie/:id" component={MovieDetail}/>
          {/* <Refapp/> */}
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

