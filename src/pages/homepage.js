import React from 'react';
import Slider from "../components/Slider";
import Swiper from "swiper";
import SideBar from "../components/SideBar";

function Homepage(props) {
  return (
    <div className="d-flex flex-row">
      <SideBar />
      <Slider />
      
    </div>
  );
}

export default Homepage;