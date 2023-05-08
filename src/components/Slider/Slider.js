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


function Slider(props) {
 let carOptions = [
    {
      image: carOne,
      title : 'test',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate cum minima modi beatae cumque ex.'
    },
    {
      image: carTwo,
      title : 'test',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate cum minima modi beatae cumque ex.'
    },
    {
      image: carThree,
      title : 'test',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate cum minima modi beatae cumque ex.'
    },
    {
      image: carFour,
      title : 'test',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate cum minima modi beatae cumque ex.'
    },
    {
      image: carFive,
      title : 'test',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate cum minima modi beatae cumque ex.'
    },
  ]
  return (
    <div style={{width: '90%',position: 'relative'}}>
      <h2>Latest Models</h2>
      <span>Please select a model</span>
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
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {carOptions.map(car => ( <SwiperSlide key={car.image}><div className="wrapper"><div className="slide-container"><img src={car.image} alt="car" />
      
      </div> 
      <h3>{car.text}</h3>
      <p className="car-description">{car.description}</p>
      <div className="slide-socials">
        <TiSocialFacebookCircular fill='thistle' />
        <TiSocialTwitterCircular fill='thistle' />
        <TiSocialPinterestCircular fill='thistle' />
      </div>

      </div>  </SwiperSlide>))}
     



{/* 
      <SwiperSlide>  <img src={carThree} alt="car" /> </SwiperSlide>
      <SwiperSlide>  <img src={carFour} alt="car" /> </SwiperSlide>
      <SwiperSlide>  <img src={carTwo} alt="car" /> </SwiperSlide>
      <SwiperSlide>  <img src={carFive} alt="car" /> </SwiperSlide>
      <SwiperSlide>  <img src={carOne} alt="car" /> </SwiperSlide> */}

    </Swiper> 
    </div></div>
  );
}

export default Slider;