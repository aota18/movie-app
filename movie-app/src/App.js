import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './Movie.css'
class App extends Component{

    state = {
      isLoading: true,
      movies: []
    };

    getMovies = async () => {
      const {
        data: {
          data: {movies}
        }
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
      console.log(movies);
      this.setState({
        isLoading: false,
        movies
      })
    };

    //Right after render()
    componentDidMount(){
      this.getMovies();
      
    }
  render(){
    const { isLoading, movies} = this.state;

    return ( 
      <section class="container"> 
        { isLoading ? 
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div> : 

          <div class="movies">
            {movies.map( movie => (
              <Movie
              id={movie.id}
              year={movie.year}
              title={movie.title}
              poster={movie.medium_cover_image}
              summary={movie.summary}
              genre={movie.genres}
              />
            ))}
          </div>
        }
        
        </section>
    )
  }
}

export default App;
