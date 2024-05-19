import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home_Compo/Navbar";
import SliderMsg from "./components/Home_Compo/SliderMsg";
import BestSelling from "./components/Home_Compo/BestSelling";
import CorporateGifts from "./components/Home_Compo/CorporateGifts";
import PersonalizedGifts from "./components/Home_Compo/PersonalizedGifts";
import Testimonials from "./components/Home_Compo/Testimonials";
import Gallary from "./components/Home_Compo/Gallary";
import Footer from "./components/Home_Compo/Footer";
import CustomizedGiftAllProduct from "./components/CustomizedGiftAllProduct";
import CorporateGiftsAllProducts from "./components/CorporateGiftsAllProducts";
import ProductPage from './components/ProductPage'
import Cart from "./components/Cart";
import Billing from "./components/Billing";
import Order from "./components/Order";
import OrderHistory from "./components/OrderHistory";
import Addresses from "./components/Addresses";
import AcDetails from "./components/AcDetails";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <SliderMsg />
            <BestSelling />
            <CorporateGifts />
            <PersonalizedGifts />
            <Testimonials />
            <Gallary />
          </>
        } />
        <Route path="/customizedGiftsAllProducts" element={<CustomizedGiftAllProduct />} />
        <Route path="/corporateGiftsAllProducts" element={<CorporateGiftsAllProducts/>} />        
        <Route path="/productDetails/:id" element={<ProductPage />} />        
        <Route path="/addProduct" element={<CreateProduct />} />        
        <Route path="/cart" element={<Cart />} />       
        <Route path="/billing" element={<Billing />} />       

        <Route path="/order" element={<Order/>}>
            <Route path="/order" element={<OrderHistory/>}/>
            <Route path="/order/addresses" element={<Addresses/>}/>
            <Route path="/order/acdetails" element={<AcDetails/>}/>
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
