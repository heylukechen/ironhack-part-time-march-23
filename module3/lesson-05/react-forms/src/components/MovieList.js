import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import moviesDataJSON from "../movies-data.json";
import FilterMovies from "./FilterMovies";
import MovieCard from "./MovieCard";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [hasOscars, setHasOscars] = useState(false);
  const [IMDBRating, setIMDBRating] = useState(5);

  

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the form from doing its default behavior
    const _id = uuidv4(); // generate a new id

    const newMovie = {
        _id,
        title, // title: title,
        director,
        hasOscars,
        IMDBRating
    }
    console.log('newMovie', newMovie);
    const updateMovieList = [...movies, newMovie];
    // const updateMovieList = [...movies]
    // updateMovieList.push(newMovie)
    console.log('updateMovieList', updateMovieList);
    setMovies(updateMovieList)
    setMoviesData(updateMovieList)
    
    setTitle("")
    setDirector("")
    setHasOscars(false)
    setIMDBRating(5)
  }

  const filterMovieList = (str) => {
    let filteredMovies;
    
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
   
    setMovies(filteredMovies);
  };
 
  return (
    <div>
        
        <FilterMovies filterMovies={filterMovieList} />
      <h2>Movie List</h2>

      {false && <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br/>
        <label>Director:</label>
        <input type="text" name="director" value={director} onChange={(e) => setDirector(e.target.value)} />
        <br/>
        <label>has Oscar:</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={(e) => setHasOscars(e.target.checked)} />
        <br/>
        <label>IMDBRating:</label>
        <input type="number" name="IMDBRating" value={IMDBRating} onChange={(e)=> setIMDBRating(Number(e.target.value))} />
        <br/>
        <button type="submit">Submit</button>
      </form>}
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
 
export default MovieList;