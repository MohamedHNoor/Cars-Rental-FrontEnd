import React from 'react';
import CarHistory from '../components/CarHistory/CarHistory';
import SideBar from '../components/SideBar/Sidebar';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

function Reservationshistory(props) {
  return (
    <div className="sliderwrapper">
      <SmallSidebar />
      <BigSidebar />
      <CarHistory />
    </div>
  );
}

export default Reservationshistory;
