import React from 'react';
import CarHistory from "../components/CarHistory/CarHistory";
import SideBar from "../components/SideBar/Sidebar";

function Reservationshistory(props) {
  return (
    <div className="sliderwrapper">
      <SideBar />
      <CarHistory />
    </div>
  );
}

export default Reservationshistory;