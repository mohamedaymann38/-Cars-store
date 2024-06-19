import React, {useRef, useEffect, useState } from "react";
import Home from './Home';
import NNavBar from './NNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { PacmanLoader } from "react-spinners";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, [])
  return (
    <BrowserRouter>
      
    {/* {loading ?
      <div className="preloaderr">
        <PacmanLoader color={'#ffb426'} loading={loading} size={40} margin={10} />
      </div> : */}

      <>
        <NNavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
{/* } */}
  </BrowserRouter>
    
  )
}


export default App