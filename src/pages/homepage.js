import React from 'react';
import Slider from "../components/Slider/Slider";
import Swiper from "swiper";
import '../components/Slider/Slider.css'
import SideBar from "../components/SideBar/Sidebar";
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