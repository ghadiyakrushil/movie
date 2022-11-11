import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { data } = props
  return (
    <>
      <div className="card col-md-2" >
        <Link to={`/movie/${data.imdbID}`}>

          <img src={data.Poster} className="card-img-top" alt={data.title} />
          <div className="card-body">
            <h5 className="card-title">{data.Title}</h5>
            <p className="card-text">{data.Year}</p>

          </div>

        </Link>
      </div>



    </>
  )
}

export default MovieCard