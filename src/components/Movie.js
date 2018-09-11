import React from 'react';
import Ratings from './Ratings';
import '../css/App.css';

// import { formatPrice } from '../helpers';

class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fav: "favorite_border",
      temp_fav: null,
      moviesToWatch: "add_circle_outline",
      temp_watch: null
  }
    this.fav_over = this.fav_over.bind(this);
    this.fav_out = this.fav_out.bind(this);
    this.addFav = this.addFav.bind(this);
    this.watch_over = this.watch_over.bind(this);
    this.watch_out = this.watch_out.bind(this);
    this.addWatch = this.addWatch.bind(this);
  }
  fav_over(){
    this.state.temp_fav = this.state.fav;

    if(this.state.fav === "favorite_border"){
      this.state.fav = "favorite";
    }else{
      this.state.fav = "favorite_border";
    }
    this.setState({
      fav: this.state.fav,
      temp_fav: this.state.temp_fav
    });
  }
  fav_out(){
    this.state.fav = this.state.temp_fav;
    //console.log(this)
    this.setState({ 
      fav: this.state.fav 
    });
  }
  addFav(){
    let favorites = this.props.favorites;
    if(this.state.fav === "favorite"){
      if(favorites.indexOf(this.props.details) === -1){
        favorites.push(this.props.details);
      }
    }else{
      let get_index = favorites.indexOf(this.props.details);
      favorites.splice(get_index, 1);
    }
    //console.log("Fav")
    //console.log(this.props.favorites);
    this.setState({
      fav: this.state.fav,
      temp_fav: this.state.fav
    });
  }
  watch_over(){
    this.state.temp_watch = this.state.moviesToWatch;

    if(this.state.moviesToWatch === "add_circle_outline"){
      this.state.moviesToWatch = "remove_circle_outline";
    }else{
      this.state.moviesToWatch = "add_circle_outline";
    }
    this.setState({
      moviesToWatch: this.state.moviesToWatch,
      temp_watch: this.state.temp_watch
    });
  }
  watch_out(){
    this.state.moviesToWatch = this.state.temp_watch;
    //console.log(this)
    this.setState({ moviesToWatch: this.state.moviesToWatch });
  }
  addWatch(){
    //console.log('add watch')
    let moviesToWatchList = this.props.newMovies;
    //console.log(moviesToWatchList);
    //console.log(this.state.moviesToWatch);
    if(this.state.moviesToWatch === "remove_circle_outline"){
      //console.log("sdsd")
      if(moviesToWatchList.indexOf(this.props.details) === -1){
        //console.log("sdsd")
        moviesToWatchList.push(this.props.details);
      }
    }else{
      let get_index = moviesToWatchList.indexOf(this.props.details);
      moviesToWatchList.splice(get_index, 1);
    }
    //console.log("Fav")
    //console.log(this.props.newMovies);
    this.setState({
      moviesToWatch: this.state.moviesToWatch,
      temp_watch: this.state.moviesToWatch
    });
  }

  render() {
    const { details, index } = this.props;
    console.log(details)
    const date  = new Date(details["release_date"])
    //console.log(date.toDateString())   //"Sat Jan 01 2000"
    var options = {year: 'numeric', month: 'long', day: 'numeric' };
    const date_released = date.toLocaleDateString("en-US", options)
    var today = new Date();
    let notReleasedYet = false;
    if(date > today){
      notReleasedYet = true;
    }
    //console.log(details["title"])
    //console.log(notReleasedYet)
    const img_link = "https://image.tmdb.org/t/p/w500/"+details["poster_path"];
    let fav = this.state.fav;
    let watch = this.state.moviesToWatch;
    const emptyRating = 0;
    let movieTitle = details["title"];
    if(details["title"].length > 23){
      movieTitle = details["title"].substr(0, 23)+"...";
    }
    return (
      <div className="grid-example a_movie col s8 m3 center-align z-depth-5" key={index["id"]}>
        <div className="content ">
          <div className="img-content">
            <img className="poster" src={img_link} alt={movieTitle}/>
          </div>
          <div className="info-content">
            <h5>{movieTitle}</h5>
            <p>{date_released}</p>
            <Ratings index={index} id={details["id"]} get_rating={emptyRating} get_date={notReleasedYet}/>
            <i className="iconsChange small material-icons" onClick={this.addFav} onMouseOver={this.fav_over}
              onMouseOut={this.fav_out}>{fav}</i>
            <i className="iconsChange small material-icons" onClick={this.addWatch} onMouseOver={this.watch_over}
              onMouseOut={this.watch_out}>{watch}</i>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;




