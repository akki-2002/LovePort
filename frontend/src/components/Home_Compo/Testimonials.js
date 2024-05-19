import React from 'react';
import avtar from '../Images/avtar.jpg';
import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    id: 1,
    name: 'Rajesh Gupta',
    location: 'Mumbai, India',
    message: '"Love Port amazed me with their readiness to take on new challenges. Their dedication and creativity in crafting personalized gifts are unmatched!"',
    image: avtar
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    message: '"I was blown away by Love Ports customization options. They turned my ideas into beautiful gifts that truly captured the essence of my sentiments."',
    image: avtar
  },
  {
    id: 3,
    name: 'Arun Kumar',
    location: 'Mumbai, India',
    message: ' "Love Port exceeded my expectations with their attention to detail. The personalized touch in their gifts made each moment special."',
    image: avtar
  },
  {
    id: 4,
    name: 'Sneha Patel',
    location: 'Mumbai, India',
    message: '“All the products I have purchased had the best quality and the prices were also very affordable. Also love how you treat your customers ✨”',
    image: avtar
  },
  {
    id: 5,
    name: 'Rahul Singh',
    location: 'Mumbai, India',
    message: ' "Love Ports customer service is outstanding. They guided me through the customization process seamlessly, ensuring a delightful experience."',
    image: avtar
  },
  {
    id: 6,
    name: 'Nehal Sukhwani',
    location: 'Mumbai, India',
    message: '“All the products I have purchased had the best quality and the prices were also very affordable. Also love how you treat your customers✨”',
    image: avtar
  },
];

function Testimonials() {
  return (
    <>
      <div className="sub-title">
        <div className="header">
          <h2 className="trendingNow-text">See what our Customers say</h2>
          <h3 className="view-all-best-selling">View All</h3>
          {/* <Link to="/testimonials" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <h3 className="view-all-best-selling">View All</h3>
          </Link> */}
        </div>
        <div className="testimonials-container">
          <Swiper
            className="container testimonials_container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={2.6}
            pagination={{ clickable: true }}
          >
            {testimonialsData.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-item">
                  <div className="profile-container">
                    <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
                    <div className="profile-text">
                      <h3 className="name">{testimonial.name}</h3>
                      <p className="location">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="message-container">
                    <p className="message">{testimonial.message}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
