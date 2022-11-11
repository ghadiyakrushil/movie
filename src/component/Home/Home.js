import React, { useEffect } from 'react'

import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { moviesAsyncFatch } from '../../common/movies/MovieSlice'
import { showAsyncFatch } from '../../common/movies/MovieSlice'



const Home = () => {
  
  const dispatch= useDispatch();
  useEffect(() =>{
    const movieText = "harry";
    const shoeText = "friends";
    dispatch(moviesAsyncFatch(movieText))
    dispatch(showAsyncFatch(shoeText))

  },[dispatch])

  return (
    <>
   
    <MovieListing/>
    </>
  )
}

export default Home