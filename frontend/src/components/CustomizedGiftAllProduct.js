import React from 'react'
import { Link } from "react-router-dom";
import img1 from '../components/Images/Product Photos/1.jpeg';
import img2 from '../components/Images/Product Photos/2.jpeg';
import img3 from '../components/Images/Product Photos/3.jpeg';
import img4 from '../components/Images/Product Photos/4.jpeg';
import img5 from '../components/Images/Product Photos/5.jpeg';
import img6 from '../components/Images/Product Photos/6.jpeg';
import img7 from '../components/Images/Product Photos/7.jpeg';
import img8 from '../components/Images/Product Photos/8.jpeg';
import img9 from '../components/Images/Product Photos/9.jpeg';
import img10 from '../components/Images/Product Photos/10.jpeg';
import img11 from '../components/Images/Product Photos/11.jpeg';
import img12 from '../components/Images/Product Photos/12.jpeg';
import img13 from '../components/Images/Product Photos/13.jpeg';
import img14 from '../components/Images/Product Photos/14.jpeg';
import img15 from '../components/Images/Product Photos/15.jpeg';
import img16 from '../components/Images/Product Photos/16.jpeg';
import img17 from '../components/Images/Product Photos/17.jpeg';
import img18 from '../components/Images/Product Photos/18.jpeg';
import img19 from '../components/Images/Product Photos/19.jpeg';
import PersonalizedGiftImg from "../components/Images/image 2.jpeg";

import { FaCartPlus } from "react-icons/fa";
import Testimonials from './Home_Compo/Testimonials';

function CustomizedGiftAllProduct() {
     // Array of product objects
const products = [
    { id: 1, name: "Corporate Gift Set", price: 599, image: img1 },
    { id: 2, name: "Corporate Gift Set", price: 599, image: img2 },
    { id: 3, name: "Corporate Gift Set", price: 599, image: img3 },
    { id: 4, name: "Corporate Gift Set", price: 599, image: img4 },
    { id: 5, name: "Corporate Gift Set", price: 599, image: img5 },
    { id: 6, name: "Corporate Gift Set", price: 599, image: img6 },
    { id: 7, name: "Corporate Gift Set", price: 599, image: img7 },
    { id: 8, name: "Corporate Gift Set", price: 599, image: img8 },
    { id: 9, name: "Corporate Gift Set", price: 599, image: img9 },
    { id: 10, name: "Corporate Gift Set", price: 599, image: img10 },
    { id: 11, name: "Corporate Gift Set", price: 599, image: img11 },
    { id: 12, name: "Corporate Gift Set", price: 599, image: img12 },
    { id: 13, name: "Corporate Gift Set", price: 599, image: img13 },
    { id: 14, name: "Corporate Gift Set", price: 599, image: img14 },
    { id: 15, name: "Corporate Gift Set", price: 599, image: img15 },
    { id: 16, name: "Corporate Gift Set", price: 599, image: img16 },
    { id: 17, name: "Corporate Gift Set", price: 599, image: img17 },
    { id: 18, name: "Corporate Gift Set", price: 599, image: img18 },
    { id: 19, name: "Corporate Gift Set", price: 599, image: img19 },
];
  return (

    <>
      <div className="personalized-gifts-container">
        <img
          src={PersonalizedGiftImg}
          alt="Personalized Gifts"
          className="personalized-gift-image"
        />
        <div className="overlay2">
          <div className="text-content2">
            <h1>Personalized Gifting</h1>
            <p>
              Create personalized gifts for your loved ones, tailored to their
              unique preferences and occasions.
            </p>
          </div>
          <Link
            to={"/customizedGiftsAllProducts"}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <button className="shop-now-button2">Shop Now</button>
          </Link>
        </div>
      </div>



    <div className="sub-title">


        <div className="header">
        
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <h2 className="trendingNow-text">Customized Gifts</h2>
        </Link>
      </div>
        <div className="product-section">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
             <Link to={'/productDetails'}>
              <img src={product.image} alt={product.name} className="hoverable" />
            </Link>
              <div className="product-details">
                <p className="model-type">{product.name}</p>
                <div className="price-container">
                  <p className="price">&#8377;{product.price}</p>
                  <FaCartPlus className="fa-cart-plus" />
                </div>
              </div>
            </div>
          ))}
        </div>


      
      </div>

      <Testimonials />

      </>
  )
}

export default CustomizedGiftAllProduct