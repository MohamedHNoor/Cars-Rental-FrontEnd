import React from 'react';
import Slider from '../components/Slider/Slider';
import Swiper from 'swiper';
import SideBar from '../components/SideBar/Sidebar';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

function LifeStyle(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SmallSidebar />
      <BigSidebar />
      <Slider />
    </div>
  );
}

export default LifeStyle;
