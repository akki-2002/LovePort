import React from "react";
import { Link } from "react-router-dom";
import PersonalizedGiftImg from "../Images/image 2.jpeg";
import img13 from "../Images/Product Photos/13.jpeg";
import img14 from "../Images/Product Photos/14.jpeg";
import img15 from "../Images/Product Photos/15.jpeg";
import img16 from "../Images/Product Photos/16.jpeg";
import { FaCartPlus } from "react-icons/fa";

function PersonalizedGifts() {
  // Array of product objects
  const products = [
    { id: 1, name: "Corporate Gift Set", price: 599, image: img13 },
    { id: 2, name: "Corporate Gift Set", price: 599, image: img14 },
    { id: 3, name: "Corporate Gift Set", price: 599, image: img15 },
    { id: 4, name: "Corporate Gift Set", price: 599, image: img16 },
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
        <div className="product-section">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="hoverable"
              />
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
    </>
  );
}

export default PersonalizedGifts;
