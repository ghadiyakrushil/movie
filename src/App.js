import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Hader from "./component/Hader/Hader"
import Home from './component/Home/Home'
import MovieDetail from './component/MovieDetail/MovieDetail'
import Footer from './component/Footer/Footer'
import PageNotFound from './component/PageNotFound/PageNotFound'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Hader/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>



  );
}

export default App;
