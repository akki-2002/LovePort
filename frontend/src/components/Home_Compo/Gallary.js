import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../Images/Self photos/photo1.jpeg';
import img2 from '../Images/Self photos/photo2.jpeg';
import img3 from '../Images/Self photos/photo3.jpeg';
import img4 from '../Images/Self photos/photo4.jpeg';
import img5 from '../Images/Self photos/photo5.jpeg';
import img6 from '../Images/Self photos/photo6.jpeg';
import img7 from '../Images/Self photos/photo7.jpeg';
import img8 from '../Images/Self photos/photo8.jpeg';


const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="text-container">
        <h2 className="gallery-title">About Us</h2>
        <p className="gallery-description">
          Welcome to Love Port, your gateway to creating heartfelt connections
          through personalized gifts. Our mission is to go beyond traditional
          gifting and craft memorable moments that celebrate love, connection,
          and cherished memories. With a deep understanding of the importance of
          personalization, we strive to make every gift unique and meaningful,
          reflecting the true essence of your emotions. At Love Port, we believe
          that every occasion is an opportunity to create lasting impressions
          and foster emotional connections. Join us in this journey of love and
          celebration.
        </p>
      </div>
      <div className="gallery-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              <div className="gallery-image-container">
                <img src={image} alt={`Photo ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
