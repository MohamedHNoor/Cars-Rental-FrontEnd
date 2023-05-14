import React from 'react';
import Wrapper from '../../assets/wrappers/BigSidebar';
import NavLinks from '../../NavLinks';

const BigSidebar = () => {
  return (
    <Wrapper>
      <div className="show-sidebar">
        <div className="content">
          <header>
            <h1>Logo</h1>
          </header>
          <NavLinks />
          <button
            type="button"
            onClick={() => console.log('logout user')}
            className=" logout-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;