import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../common/movies/MovieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  
  let randerMovies = ''
  randerMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      return (
        <MovieCard key={index} data={movie} />
      )

    })
  ) : (<div className="movie-error"><h3>{movies.Error}</h3></div>)
  
  let randerShows = ''
  ;
  randerShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => {
      return (
        <MovieCard key={index} data={show} />
      )

    })
  ) : (<div className="movie-error"><h3>{shows.Error}</h3></div>) 


  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="container row m-auto">            
            {randerMovies}            
          </div>
        </div>
        <div className="movie-list">
          <h2>Show</h2>
          <div className="container row m-auto">{randerShows}</div>
        </div>
      </div>
    </>
  )
}

export default MovieListing