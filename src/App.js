import React from "react";
import axios from "axios";
import Movie from "./Movie";

/* Class Component */
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    //console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }) // (setState에서의)movies:(axios에서의)movies
  }
  componentDidMount(){
    /*setTimeout(() => {
      this.setState({ isLoading:false});
    },6000);*/
    this.getMovies();
  };
  render(){
    const { isLoading, movies } = this.state;
    return (
      <div>
        {/* {isLoading ? "Loading" : "We are ready."} */}
        {isLoading ? "Loading" : movies.map(movie => (
          //console.log(movie);         
          <Movie 
            key={movie.add}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
          />
        ))}
      </div>
    )
  }
}
export default App;

