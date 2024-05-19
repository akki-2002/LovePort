import React, { useEffect, useState } from 'react';
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

function CreateProduct() {

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

const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [description, setDescription] = useState('')
// const [quantity, setQuantity] = useState('')
const [productDetails, setProductDetails] = useState('')
const [deliveryInfo, setDeliveryInfo] = useState('')
const [itemInStock, setItemInStock] = useState(false)
const [error, setError] = useState('')
const [conf, setConf] = useState('')
const [productImage, setProductImage] = useState(null)
const [profUrl, setProfUrl] = useState('')
// console.log(productImage)

const handleSubmit = async(e) =>{
    e.preventDefault()

    const formData = new FormData()
    formData.append("uploaded_file", productImage)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("quantity", quantity)
    formData.append("description", description)
    formData.append("productDetails", productDetails)
    formData.append("deliveryInfo", deliveryInfo)
    formData.append("itemInStock", itemInStock)

    try {
        const response = await fetch("http://localhost:4002/products/addProduct", {
          method: "POST",
          body: formData,
        });
  
        const json = await response.json();
  
        if (!response.ok) {
          setError(json.error || "Failed to create blog post");
        } else {
          setConf("Successfully created a product")
          console.log("New product added", json);
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        setError("Error during form submission. Please try again later.");
      }

}

  return (
    <>
    <form className="productMain" onSubmit={handleSubmit} encType="multipart/form-data" method="post">
      <div className="prdImgs">
        <div className="prdiMax">
        <input
              type="file"
              className="form-control-file"
              name="uploaded_file"
              onChange={(e) => {
                setProductImage(e.target.files[0])
                setProfUrl(URL.createObjectURL(e.target.files[0]));
              }}
            />
          <img src={profUrl} alt="" />

        </div>
      </div>
      <div className="prdDets">
        <h1><input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Product name'/></h1>
        <h1 className='price'><input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Eg. 0000'/></h1>
        <p className='tax'>Inclusive of all taxes</p>
        <p className="desc">Description</p>
        <p><input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Product description'/></p>

        <div className="qua">
          <p>Quantity</p>
          <div className="quantity-controls">
            <div onClick={decrementQuantity}>-</div>
            <input type="number" value={quantity} readOnly />
            <div onClick={incrementQuantity}>+</div>
          </div>
        </div>

        <p className="ins">{product.stock ? 'Item in Stock' : 'Out of Stock'}</p>
        

        <div className="productDetails">
          <h2>Product Details</h2>
          <input type="text" value={productDetails} onChange={(e)=>setProductDetails(e.target.value)} placeholder='Enter details'/>

          <h2>Delivery Information</h2>
          <input type="text" value={deliveryInfo} onChange={(e)=>setDeliveryInfo(e.target.value)} placeholder='Enter delivery information'/>
        </div>
        <div className="abBtns">
          <button>Create</button> 
        </div>
      </div>
   
    </form>
       <BestSelling />
       <Testimonials />
       </>
  );
}

export default CreateProduct;