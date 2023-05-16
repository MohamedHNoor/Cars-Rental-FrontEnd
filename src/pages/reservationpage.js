import React from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

const Reservationpage = (props) => {
  return (
    <div className="sliderwrapper">
      <SmallSidebar />
      <BigSidebar />
      <BookingForm />
    </div>
  );
};

export default Reservationpage;
