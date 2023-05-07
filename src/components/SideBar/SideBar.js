import React from 'react';
import logo from '../../assets/logo.png'
import './SideBar.css'
import {BsTwitter} from 'react-icons/bs' 
import { ImFacebook } from 'react-icons/im';
import { TfiGoogle } from 'react-icons/tfi';
import { FaPinterestP } from 'react-icons/fa';
import { Link } from "react-router-dom";
function SideBar(props) {
  const nav = [{
    text : 'MODELS',
    path : '/'
  },
   { text : 'LIFESTYLE',
    path : '/lifestyle'
  },
  { text : 'SHOP',
    path : '/'
  },
  { text : 'TEST DRIVE',
    path : '/'
  }]

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-white sidebarWrapper" style={{height : '100vh', padding: 10, justifySelf: 'flex-start'}}>
      <img src={logo} className="logo" alt="logo" />
      <ul className="nav nav-pills flex-column mb-auto">
        { nav.map(item => ( <li className="nav-item" key={item.text}><Link to={item.path} className="nav-item">{item.text}</Link></li>))}
      </ul>
      <div className="footer">
      <div className="socials">
        <BsTwitter fill="black" />
        <ImFacebook fill="black" />
        <TfiGoogle fill="black" />
        <FaPinterestP fill="black" />
      </div>
      <div className="text-black"> 
            @2023 WHEELSAWAY CAR RENTALS
</div>
      </div>
    </div>
  );
}

export default SideBar;