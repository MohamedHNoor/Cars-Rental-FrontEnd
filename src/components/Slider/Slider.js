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


function Slider(props) {
  return (
    
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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide>  <img src={carThree} alt="" /> </SwiperSlide>
      <SwiperSlide>  <img src={carFour} alt="" /> </SwiperSlide>
      <SwiperSlide>  <img src={carTwo} alt="" /> </SwiperSlide>

      <SwiperSlide>  <img src={carFive} alt="" /> </SwiperSlide>
      <SwiperSlide>  <img src={carOne} alt="" /> </SwiperSlide>

    </Swiper> 
    </div>
  );
}

export default Slider;