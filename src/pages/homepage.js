import React from 'react';
import Slider from "../components/Slider/Slider";
import Swiper from "swiper";
import SideBar from "../components/SideBar/SideBar";
import '../components/Slider/Slider.css'
function Homepage(props) {
  return (
    <div className="sliderwrapper">
      <SideBar />
      <div className="sliderWrapper">
        <Slider />
      </div>
      
    </div>
  );
}

export default Homepage;