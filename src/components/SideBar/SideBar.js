import React from 'react';

function SideBar(props) {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark " style={{height : '100vh', padding: 10}}>
      
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">MODELS</li>
        <li className="nav-item">LIFESTYLE</li>
        <li className="nav-item">SHOP</li>
        <li className="nav-item">TEST DRIVE</li>
      </ul>
    </div>
  );
}

export default SideBar;