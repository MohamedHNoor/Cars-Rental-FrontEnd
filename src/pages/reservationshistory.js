import React from 'react';
import CarHistory from '../components/CarHistory/CarHistory';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

const Reservationshistory = (props) => {
  return (
    <div className="sliderwrapper">
      <SmallSidebar />
      <BigSidebar />
      <CarHistory />
    </div>
  );
};

export default Reservationshistory;
