import React from 'react';
import SideBar from "../components/SideBar/Sidebar";
import CarDetails from "../components/CarDetails/CarDetails";

function Detailspage(props) {
  return (
    <div className="sliderwrapper">
      <SideBar />
      <CarDetails />
    </div>
  );
}

export default Detailspage;