import React from 'react';
import Slider from "../components/Slider/Slider";
import Swiper from "swiper";
import SideBar from "../components/SideBar/SideBar";

function Homepage(props) {
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <SideBar />
      <Slider />
      
    </div>
  );
}

export default Homepage;