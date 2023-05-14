import React, { useState } from 'react';
import { FaAlignLeft, FaTimes } from 'react-icons/fa';
import Wrapper from '../../assets/wrappers/SmallSidebar';
import NavLinks from '../../NavLinks';

const SmallSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(true);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="toggle-btn"
        onClick={handleToggleSidebar}
      >
        <FaAlignLeft />
      </button>
      <div className={`sidebar-container ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className="content">
          <button className="close-btn" onClick={handleCloseSidebar}>
            <FaTimes />
          </button>
          <header>
            <h2>Logo</h2>
          </header>
          <NavLinks onClick={handleLinkClick} />
          <button
            type="button"
            onClick={() => console.log('logout user')}
            className="logout-btn btn"
          >
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;