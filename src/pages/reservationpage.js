import React from 'react';
import SideBar from '../components/SideBar/Sidebar';
import BookingForm from '../components/BookingForm/BookingForm';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

function Reservationpage(props) {
  return (
    <div className="sliderwrapper">
      <SmallSidebar />
      <BigSidebar />
      <BookingForm />
    </div>
  );
}

export default Reservationpage;
