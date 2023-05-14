import React from 'react';
import Slider from "../components/Slider/Slider";
import '../components/Slider/Slider.css'
import SideBar from "../components/SideBar/Sidebar";
import BigSidebar from "../components/BigSidebar/BigSidebar";
import SmallSidebar from "../components/SmallSidebar/SmallSidebar";
function Homepage(props) {
  return (
    <div className="sliderwrapper">
      {/* <SideBar /> */}
      <BigSidebar />
      <SmallSidebar />
      <div className="sliderWrapper">
        <Slider />
      </div>
      
    </div>
  );
}

export default Homepage;