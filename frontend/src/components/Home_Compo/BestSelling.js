import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../Images/Product Photos/1.jpeg';
import img2 from '../Images/Product Photos/2.jpeg';
import img3 from '../Images/Product Photos/3.jpeg';
import img4 from '../Images/Product Photos/4.jpeg';
import { FaCartPlus } from "react-icons/fa";

// Array of product objects
// Add more products as needed


function BestSelling() {
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
    <div className="sub-title">
      <div className="header">
        <h2 className="trendingNow-text">Best Selling</h2>
        <h3 className="view-all-best-selling">View All</h3>
        {/* <Link to="/bestSellingProducts" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <h3 className="view-all-best-selling">View All</h3>
        </Link> */}
      </div>
      <div className="product-section">
        {products && products.map((product, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default BestSelling;

