import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieOrShowAsyncFatch, getSelectedMovieOrShow, removeSelectedMOvieOrShow } from '../../common/movies/MovieSlice'

const MovieDetail = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data);
  useEffect(() => {
    dispatch(movieOrShowAsyncFatch(imdbID))
    return () =>{
      dispatch(removeSelectedMOvieOrShow())
    }
  }, [dispatch, imdbID])

  return (  
    <>
      <div className="card" >
        <img src={data.Poster} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{data.Title}</h5>
            <p className="card-text">{data.Plot}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Year: {data.Year}</li>
            <li className="list-group-item">Released: {data.Released}</li>
            <li className="list-group-item">Runtime: {data.Runtime}</li>
          </ul>
         
      </div>
    </>
  )
}

export default MovieDetail
