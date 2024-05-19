import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import pd1 from '../components/Images/Product Photos/1.jpeg';
import pd2 from '../components/Images/Product Photos/10.jpeg';
import '../components/css/productPage.css';
import BestSelling from './Home_Compo/BestSelling';
import Testimonials from './Home_Compo/Testimonials';

function ProductPage() {

  const [product, setProduct] = useState('')
  const {id} = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
          const response = await fetch(`http://localhost:4002/products/getOneProduct/${id}`);
          const json = await response.json();
  
          if (response.ok) {
            setProduct(json);
              console.log(json)
          }
      } catch (error) {
          console.error('Error fetching blog:', error);
      }
  };

  fetchProduct()
  }, [])
  

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    {product && 
    <div className="productMain">
      <div className="prdImgs">
        <div className="prdiMin">
        <img src={`http://localhost:4002/uploads/${product.productImage}`} alt="" />
        </div>
        <div className="prdiMax">
        <img src={`http://localhost:4002/uploads/${product.productImage}`} alt="" />
        </div>
      </div>
      <div className="prdDets">
        <h1>{product.name}</h1>
        <h1 className='price'>{quantity * product.price}</h1>
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

        <p className="ins">{product.itemInStock ? 'Item in Stock' : 'Out of Stock'}</p>

        <div className="abBtns">
          <button><Link to={'/cart'}style={{ textDecoration: 'none',  cursor: 'pointer' }} >ADD TO CART </Link></button>  
          <button><Link to={'/billing'}style={{ textDecoration: 'none',  cursor: 'pointer' }} >BUY NOW </Link></button>
        </div>

        <div className="productDetails">
          <h2>Product Details</h2>
          <p>{product.productDetails}</p>

          <h2>Delivery Information</h2>
          <p>{product.deliveryInfo}</p>
        </div>
      </div>
   
    </div>
    }
       <BestSelling />
       <Testimonials />
       </>
  );
}

export default ProductPage;