import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import carOne from '../../assets/car1.png'
import carTwo from '../../assets/car2.png'
import carThree from '../../assets/car3.png'
import carFour from '../../assets/car4.png'
import carFive from '../../assets/car5.png'
import './Slider.css'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiSocialTwitterCircular , TiSocialPinterestCircular ,TiSocialFacebookCircular} from "react-icons/ti";
import { BsCardChecklist } from "react-icons/bs";
import { Link } from "react-router-dom";
import { carOptions } from "../../data";
function Slider(props) {
 
  return (
    <div style={{width: '100%',position: 'relative'}}>
      <div className="slider-title"> 
        <h2 >Latest Models</h2>
      <span >Please select a model</span></div>
   
    <div style={{width: '90%',position: 'relative'}}>
      <div className="slider-btns">
      <div className="swiper-prev">
          <IoIosArrowBack />
        </div>
    <div className="swiper-next">
          <IoIosArrowForward />
        </div>
        </div>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }}
     
    >
      {carOptions.map(car => ( <SwiperSlide key={car.id}><Link to={`/detailsPage/${car.id}`} className="wrapper">
        <div className="slide-container">
        <img className="car" src={car.image} alt="car" />
        </div> 
      <div className="car-info">
      <h3 className="car-title"  >{car.title}</h3>
      <p className="car-description">{car.description}</p>
 <div className="slide-socials">
        <TiSocialFacebookCircular fill='thistle' className="icon" />
        <TiSocialTwitterCircular fill='thistle' className="icon"  />
        <TiSocialPinterestCircular fill='thistle' className="icon" />
      </div></div>
      </Link>  </SwiperSlide>))}
    </Swiper> 
    </div></div>
  );
}

export default Slider;