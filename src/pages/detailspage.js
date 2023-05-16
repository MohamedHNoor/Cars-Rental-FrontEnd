import React from 'react';
import CarDetails from '../components/CarDetails/CarDetails';
import SmallSidebar from '../components/SmallSidebar/SmallSidebar';
import BigSidebar from '../components/BigSidebar/BigSidebar';

const Detailspage = (props) => {
  return (
    <div className="sliderwrapper">
      <SmallSidebar />
      <BigSidebar />
      <CarDetails />
    </div>
  );
};

export default Detailspage;
