import React from "react";
import SideBar from "../SideBar/Sidebar";

const MyReservations = () => {
  return (
    <>
      <div className="sliderwrapper">
        <SideBar />
        <div className="wrapper-my-reservation background-tint">
          MyReservations
        </div>
      </div>
    </>
  );
};

export default MyReservations;
