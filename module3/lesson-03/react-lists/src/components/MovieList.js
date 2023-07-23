import { useState, useEffect } from 'react';
import { Spin, Button } from 'antd';
 import MovieCard from './MovieCard';
// import the array of movie objects
import moviesData from '../movies-data.json';
 
function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState([]);
  const [showList, setShowList] = useState(false)

  const deleteMovie = (movieId) => {
    // remove the movie that matches the entered movieId
    const filteredMovies = movies.filter(movie => movie._id !== movieId); // filter out the movie from the array
    // console.log('filteredMovies', filteredMovies);
    setMovies(filteredMovies); // update the state variable "movies"
  }

  useEffect(() => {
    setTimeout(()=> setMovies(moviesData), 2000);
  },[])

  if(movies.length === 0){
    return <Spin />
  }
 
  return (
    <div>
      <h2>Movie List</h2>
      <Button onClick={()=> setShowList(!showList) }>{showList ? "Hide movies" : "Show movies"} </Button>
      { showList && movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie}/>
      })}
    </div>
  );
}
 
export default MovieList;