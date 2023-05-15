import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/Wrappers/BigSidebar';
import NavLinks from '../Navlinks/NavLinks';
import Logo from '../../assets/logo.png';
import { BsTwitter } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { TfiGoogle } from 'react-icons/tfi';
import { FaPinterestP } from 'react-icons/fa';
import { logoutUser } from '../../redux/slices/userSlice';

const BigSidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, 1000);
    toast.success('Logout Successful!');
  };
  return (
    <Wrapper>
      <div className="show-sidebar">
        <div className="content">
          <header>
            <img src={Logo} alt="logo" />
          </header>
          <NavLinks />
          <button type="button" onClick={handleLogout} className=" logout-btn">
            Logout
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="socials">
          <BsTwitter fill="black" />
          <ImFacebook fill="black" />
          <TfiGoogle fill="black" />
          <FaPinterestP fill="black" />
        </div>
        <div className="text-black">@2023 WHEELSAWAY</div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
