import React from 'react';
import '../css/App.css';

class Rating extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: this.props.get_rating,
            temp_rating: null
        }
        this.rate = this.rate.bind(this);
        this.star_over = this.star_over.bind(this);
        this.star_out = this.star_out.bind(this);
    }
    rate(rating,ra) {
        this.setState({
          rating: ra,
          temp_rating: ra
        });
    }
    star_over(rating, ra) {
      this.state.temp_rating = this.state.rating;
      this.state.rating = ra;
      
      this.setState({
        rating: this.state.rating,
        temp_rating: this.state.temp_rating
      });
    }
    star_out() {
      this.state.rating = this.state.temp_rating;
      
      this.setState({ rating: this.state.rating });
    }
  render() {
    const how_many_stars = this.state.rating;
    let stars = []
    for (let i = 0; i < 5; i++){
        var class_star = "star_border";
      if (i < Math.floor(how_many_stars)){
        class_star = "star";
      }
        stars.push(
          <i  key={i} className="small material-icons" onClick={(e) => this.rate(e,(i+1))} onMouseOver={(e) => this.star_over(e, (i+1))}
          onMouseOut={this.star_out}>{class_star}</i>
        )
      
    }
    let say_ratings = "Rating "+how_many_stars;
    if(how_many_stars === 0){
      
        say_ratings = "Not rated";
    }

    if(this.props.date){
      stars = [];
      for (let i = 0; i < 5; i++){
        class_star = "fa fa-star-o";
        stars.push(<span key={i} className={class_star}> </span>) 
      }
    }
    return (
        <div>  
        <p>{say_ratings}</p>
        {stars}
        </div>
    )
  }
}

export default Rating;