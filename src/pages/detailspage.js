import React from 'react';
import SideBar from '../components/SideBar/Sidebar';
import CarDetails from '../components/CarDetails/CarDetails';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

function Detailspage(props) {
  return (
    <div className="sliderwrapper">
      <SmallSidebar />
      <BigSidebar />
      <CarDetails />
    </div>
  );
}

export default Detailspage;
