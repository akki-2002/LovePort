import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CorporateGiftImg from "../Images/image 1.png";
import img5 from "../Images/Product Photos/5.jpeg";
import img6 from "../Images/Product Photos/6.jpeg";
import img7 from "../Images/Product Photos/7.jpeg";
import img8 from "../Images/Product Photos/8.jpeg";
import img9 from "../Images/Product Photos/9.jpeg";
import img10 from "../Images/Product Photos/10.jpeg";
import img11 from "../Images/Product Photos/11.jpeg";
import img12 from "../Images/Product Photos/12.jpeg";
import { FaCartPlus } from "react-icons/fa";

function CorporateGifts() {
  const [products, setProduts] = useState('')

  useEffect(() => {
    const fetchBlogs = async ()=>{
        const response = await fetch("http://localhost:4002/products/getProducts")
        const json = await response.json()
  
        if(response.ok){
          setProduts(json)
            // console.log(json.likes)
        }
    }
        fetchBlogs()
      }, [])
    

  
  return (
    <>
      <div className="corporate-gifts-container">
        <img
          src={CorporateGiftImg}
          alt="Corporate Gifts"
          className="corporate-gift-image"
        />
        <div className="overlay">
          <div className="text-content">
            <h1>Corporate Gifting</h1>
            <p>
              Impress your employees and clients with unique and memorable
              corporate gifts.
            </p>
          </div>
          <Link
            to={"/corporateGiftsAllProducts"}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="sub-title">
        <div className="product-section">
        {products && products.map((product, index) => (
        // <div >
          <Link to={`/productDetails/${product._id}`} className="product-item" key={index}>
              {/* <img src={`http://localhost:4002/uploads/${product.productImage}`} alt={product.name} className="hoverable" /> */}
              <img src={`http://localhost:4002/uploads/${product.productImage}`} alt="" />

            
          <div className="product-details">
            <p className="model-type">{product.name}</p>
            <div className="price-container">
              <p className="price">&#8377;{product.price}</p>
              <FaCartPlus className="fa-cart-plus" />
            </div>
          </div>
          </Link>
        // </div>
      ))}
        </div>
      </div>
    </>
  );
}

export default CorporateGifts;
