"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import sliderImg1 from "../../../public/images/slider-img1.webp"
import sliderImg2 from "../../../public/images/slider-img2.webp"
import sliderImg3 from "../../../public/images/slider-img3.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide><Image src={sliderImg1} alt='image'/></SwiperSlide>
    <SwiperSlide><Image src={sliderImg2} alt='image'/></SwiperSlide>
    <SwiperSlide><Image src={sliderImg3} alt='image'/></SwiperSlide>
  </Swiper>
  )
}

export default Slider


