import React, { useState } from 'react';
import './css/cart.css';
import { Link } from 'react-router-dom';
import prod1 from '../components/Images/Product Photos/12.jpeg';
import cross from '../components/Images/cross.png';
import arrow_back from '../components/Images/Arrow_back.png';

const initialCartItems = [
  {
    id: 1,
    name: 'Corporate Gift Set',
    image: prod1,
    category: 'Corporate Gifts',
    price: 599,
  },
  {
    id: 2,
    name: 'Corporate Gift Set',
    image: prod1,
    category: 'Corporate Gifts',
    price: 599,
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cartMain">
      <div className="cartTop">
        <div className="cartLeftMain">
          <div className="cartLeft">
            <h1>Cart</h1>
            <div className="clContent">
              {cartItems.map(item => (
                <div className="cItem1" key={item.id}>
                  <div className="cItem">
                    <div className="cItemImg"> <img src={item.image} alt={item.name} /> </div>
                    <div className="cItemDetails">
                      <h2>{item.name}</h2>
                      <div className="p">
                        <p>CATEGORY - {item.category}</p>
                      </div>
                      <div className="price">₹{item.price}</div>
                    </div>
                  </div>
                  <div className="cItemRemove">
                    <p onClick={() => handleRemove(item.id)}>REMOVE <img src={cross} alt="Remove" /></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cartRgt">
          <div className="cartTotalHeading">
            <h1>Cart Total</h1>
          </div>
          <div className="cartTotal">
            <p>Total</p>
            <span>₹{cartItems.reduce((total, item) => total + item.price, 0)}</span>
          </div>
          <Link to={'/billing'} >
            <div className="cartCheckoutBtn">
              <button>Proceed to Checkout</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="cartBottom">
        <div className="clContinueShop">
          <Link to={'/'} ><img src={arrow_back} alt="Continue Shopping" /></Link><p>Continue Shopping</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
