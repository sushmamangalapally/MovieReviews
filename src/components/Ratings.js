import React from 'react';
import '../css/App.css';
import Rating from './Rating';

class Ratings extends React.Component {
  render() {
    const { get_rating, get_date } = this.props;
    return (
        <div>
          <Rating get_rating={get_rating} date={get_date}/>
        </div>
    )
  }
}

export default Ratings;


