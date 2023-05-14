import React from 'react';
import SideBar from "../components/SideBar/Sidebar";
import CarDetails from "../components/CarDetails/CarDetails";
import BigSidebar from "../components/BigSidebar/BigSidebar";
import SmallSidebar from "../components/SmallSidebar/SmallSidebar";
function Detailspage(props) {
  return (
    <div className="sliderwrapper">
      <BigSidebar />
      <SmallSidebar />
      <CarDetails />
    </div>
  );
}

export default Detailspage;