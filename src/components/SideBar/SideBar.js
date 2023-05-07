import React from 'react';
import logo from '../../assets/logo.png'
import './SideBar.css'
import {BsTwitter} from 'react-icons/bs' 
import { ImFacebook } from 'react-icons/im';
import { TfiGoogle } from 'react-icons/tfi';
import { FaPinterestP } from 'react-icons/fa';

function SideBar(props) {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-white " style={{height : '100vh', padding: 10}}>
      <img src={logo} className="logo" alt="logo" />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">MODELS</li>
        <li className="nav-item">LIFESTYLE</li>
        <li className="nav-item">SHOP</li>
        <li className="nav-item">TEST DRIVE</li>
      </ul>
      <div className="footer">
      <div className="socials">
        <BsTwitter fill="black" />
        <ImFacebook fill="black" />
        <TfiGoogle fill="black" />
        <FaPinterestP fill="black" />
      </div>
      </div>
    </div>
  );
}

export default SideBar;