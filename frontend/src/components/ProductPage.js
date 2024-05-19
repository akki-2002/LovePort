import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pd1 from '../components/Images/Product Photos/1.jpeg';
import pd2 from '../components/Images/Product Photos/10.jpeg';
import '../components/css/productPage.css';
import BestSelling from './Home_Compo/BestSelling';
import Testimonials from './Home_Compo/Testimonials';

const product = {
  name: 'Personalized Gift Set',
  price: 2000,
  description: 'At Love Port, we believe in the power of personalization. Our wide range of customizable gifts ensures that each item is crafted with attention to detail and sentiment, making every moment special.',
  images: [pd1, pd2],
  stock: true,
};

function ProductPage() {

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * product.price);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * product.price);
    }
  };

  return (
    <>
    <div className="productMain">
      <div className="prdImgs">
        <div className="prdiMin">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={`pd${index + 1}`} />
          ))}
        </div>
        <div className="prdiMax">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={`pd${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="prdDets">
        <h1>{product.name}</h1>
        <h1 className='price'>${totalPrice}</h1>
        <p className='tax'>Inclusive of all taxes</p>
        <p className="desc">Description</p>
        <p>{product.description}</p>

        <div className="qua">
          <p>Quantity</p>
          <div className="quantity-controls">
            <button onClick={decrementQuantity}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={incrementQuantity}>+</button>
          </div>
        </div>

        <p className="ins">{product.stock ? 'Item in Stock' : 'Out of Stock'}</p>

        <div className="abBtns">
          <button><Link to={'/cart'}style={{ textDecoration: 'none',  cursor: 'pointer' }} >ADD TO CART </Link></button>  
          <button><Link to={'/billing'}style={{ textDecoration: 'none',  cursor: 'pointer' }} >BUY NOW </Link></button>
        </div>

        <div className="productDetails">
          <h2>Product Details</h2>
          <p>Material: High-quality materials</p>
          <p>Size: Customizable</p>
          <p>Includes: Personalized items based on your preference</p>

          <h2>Delivery Information</h2>
          <p>Standard Delivery: 5-7 business days</p>
          <p>Express Delivery: 2-3 business days</p>
        </div>
      </div>
   
    </div>
       <BestSelling />
       <Testimonials />
       </>
  );
}

export default ProductPage;