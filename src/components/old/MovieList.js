import React from 'react';
// import movies_list from '../movies.json';
import Movie from './Movie';
import '../css/App.css';
const API_KEY = '7107cc88cc38939ff1dc0ecdee74365c';

// console.log(process.env)

class MovieList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          movies: [],
        };
      }
    
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(
            json => {
                //console.log(json.results)
                this.setState({
                    movies: json.results
                });
                
            }
        )
    }
                        
    render(){   
        return (
            <div className="Main">
                <div className="MainTiles row">
                    {this.state.movies.map((index) => (
                        <Movie key={index["id"]} index={index} details={index} favorites={this.props.fav} newMovies={this.props.filmsToWatch}/>
                    ))}
                </div> 
            </div>

        )
    }
}

  
export default MovieList;