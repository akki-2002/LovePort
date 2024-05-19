import React from 'react'
import pd1 from '../components/Images/Product Photos/1.jpeg'
import pd2 from '../components/Images/Product Photos/10.jpeg'
import '../components/css/productPage.css'


function ProductPage() {
  return (
    // <div>
        <div className="productMain">
            <div className="prdImgs">
                <div className="prdiMin">
                    <img src={pd1} alt="pd1" />
                    <img src={pd2} alt="pd2" />
                    <img src={pd1} alt="pd1" />
                </div>
                <div className="prdiMax">
                    <img src={pd1} alt="pd1" />
                    <img src={pd2} alt="pd2" />
                    <img src={pd1} alt="pd1" />
                </div>
            </div>
            <div className="prdDets">
                <h1>Personalized Gift Set</h1>
                <h1 className='price'>$2000</h1>
                <p className='tax'>Inclusive of all taxes</p>
                <p className="desc">Description</p>
                <p>At Love Port, we believe in the power of personalization. Our wide range of customizable gifts ensures that each item is crafted with attention to detail and sentiment, making every moment special.</p>

                <div className="qua">
                    <p>Quantity</p>
                    <input type="number" />
                </div>

                <p className="ins">Item in Stock</p>

                <div className="abBtns">
                    <button>ADD TO CART</button>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default ProductPage