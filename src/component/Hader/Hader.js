import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { moviesAsyncFatch, showAsyncFatch } from '../../common/movies/MovieSlice'

const Hader = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch()
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(term);
    dispatch(moviesAsyncFatch(term))
    dispatch(showAsyncFatch(term))

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a style={{ color: "white" }} className="navbar-brand" href="/">Movie</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <form className="d-flex" role="search" onSubmit={submitHandler}>
          <input className="form-control me-2" value={term} type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setTerm(e.target.value) }} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

      </nav>
    </>
  )
}

export default Hader