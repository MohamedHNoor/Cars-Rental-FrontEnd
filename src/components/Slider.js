import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import carOne from '../assets/car1.png'
import carTwo from '../assets/car2.png'
import carThree from '../assets/car3.png'
import carFour from '../assets/car4.png'
import carFive from '../assets/car5.png'
function Slider(props) {
  return (
    <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide>  <img src={carThree} alt="" /> </SwiperSlide>
      <SwiperSlide>  <img src={carFour} alt="" /> </SwiperSlide>
      <SwiperSlide>  <img src={carTwo} alt="" /> </SwiperSlide>

      <SwiperSlide>  <img src={carFive} alt="" /> </SwiperSlide>
      <SwiperSlide>  <img src={carOne} alt="" /> </SwiperSlide>

      ...
    </Swiper></div>
  );
}

export default Slider;