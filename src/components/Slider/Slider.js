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
import { useSelector } from "react-redux";
function Slider(props) {
 const {cars} = useSelector(state => state.cars)
  return (
    <div style={{width: '100%',position: 'relative'}}>
      <div className="slider-title"> 
        <h2 >Latest Models</h2>
      <span >Please select a model</span></div>
      <div className="slider-btns">
      <div className="swiper-prev">
          <IoIosArrowBack />
        </div>
    <div className="swiper-next">
          <IoIosArrowForward />
        </div>
        </div>
<div style={{width: '90%',position: 'relative'}} className="responsive-slider"> 
    
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      breakpoints= {
{300: {
  slidesPerView: 1,
  spaceBetween: 100,
    },
  
    1024: {
idesPerView: 2,
      spaceBetween: 50,
    },}
      }
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }}
     
    >
      {cars.map(car => ( <SwiperSlide key={car.id}><Link to={`/detailsPage/${car.id}`} className="wrapper">
        <div className="slide-container">
        <img className="car" src={car.photo} alt="car" />
        </div> 
      <div className="car-info">
      <h3 className="car-title"  >{car.name}</h3>
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