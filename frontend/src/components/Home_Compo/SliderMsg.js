import React from 'react'
import SliderImg1 from '../Images/slider1.png'


// import Swiper core and required modules
import {  Pagination  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

function SliderMsg() {
  return (
    <div>
        <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
   
      >
        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={SliderImg1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={SliderImg1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={SliderImg1} alt="" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default SliderMsg