import React from 'react';
import SideBar from "../components/SideBar/Sidebar";
import BookingForm from "../components/BookingForm/BookingForm";

function Reservationpage(props) {
  return (
    <div className="sliderwrapper">
      <SideBar />
      <BookingForm />
    </div>
  );
}

export default Reservationpage;