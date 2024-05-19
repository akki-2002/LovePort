import React, { useState } from "react";
import "../components/css/billing.css";
import arrow_back from "../components/Images/Product Photos/12.jpeg";
import backprint_t from "../components/Images/Product Photos/18.jpeg";
import cross from "../components/Images/cross.png";
import { Link } from "react-router-dom";

function Billing() {

  // OnClick for default Country

  const [country, setCountry] = useState({
    display: "none",
  });

  const handleCountryClick = () => {
    setCountry({ display: "block" });
  };

  // Dropdown for States of India

  const [selectedState, setSelectedState] = useState("");

  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const handleChange = (e) => {
    setSelectedState(e.target.value);
  };

  // Validation on Ph No

  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const isValid = /^[789]\d{9}$/.test(value);

    if (!isValid && value !== "") {
      setErrorMessage(
        "Invalid phone number. Please enter a valid 10-digit phone number starting with 7, 8, or 9."
      );
    } else {
      setErrorMessage("");
    }

    setPhoneNumber(value);
  };

  const handleBlur = () => {
    if (!errorMessage && phoneNumber === "") {
      setErrorMessage("");
    }
  };

  // Validation for Email

  const [email, setEmail] = useState("");
  const [errorMessagee, setErrorMessagee] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValid && value !== "") {
      setErrorMessagee(
        "Invalid email address. Please enter a valid email address."
      );
    } else {
      setErrorMessagee("");
    }

    setEmail(value);
  };

  const handleBlurr = () => {
    if (!errorMessage && email === "") {
      setErrorMessagee("");
    }
  };

  // Validation for Pin Code

  const [pincode, setPincode] = useState("");
  const [errorMessageee, setErrorMessageee] = useState("");

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    const isValid = /^\d{6}$/.test(value);

    if (!isValid && value !== "") {
      setErrorMessageee(
        "Invalid PIN code. Please enter a valid 6-digit PIN code."
      );
    } else {
      setErrorMessageee("");
    }

    setPincode(value);
  };

  const handleBlurrr = () => {
    if (!errorMessageee && pincode === "") {
      setErrorMessageee("");
    }
  };

  return (
    <>
    
      <div className="billingMain">
        <div className="billingLeftMain">
          <div className="billingLeft">
            <Link to={'/cart'}>
            <div className="backToCart">
              <p>Back to Cart</p>
            </div>
            </Link>
            <div className="blHeading">
              <h1>Billing and Shipping</h1>
            </div>
            <form className="form" action="">
              <div className="customerName">
                <div className="firstname">
                  <label htmlFor="">
                    First Name <span className="star">*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>

                <div className="firstname">
                  <label htmlFor="">
                    Last Name <span className="star">*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>
              </div>

              <div className="newPass">
                <label htmlFor="">
                  Country <span className="star">*</span>
                </label>
                <input
                  type="text"
                  value="INDIA"
                  placeholder=""
                  onClick={handleCountryClick}
                />
                <p style={country}>Currently available for India.</p>
              </div>

              <div className="firstname">
                <label htmlFor="">
                  Street Address <span className="star">*</span>
                </label>
                <input type="text" placeholder="" />
              </div>

              <div className="customerName">
                <div className="firstname">
                  <label htmlFor="">
                    Town/City <span className="star">*</span>
                  </label>
                  <input type="text" placeholder="" />
                </div>

                <div className="firstname">
                  <label htmlFor="">
                    State <span className="star">*</span>
                  </label>
                  <select
                    id="states"
                    value={selectedState}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {stateOptions.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {/* <p>Selected State: {selectedState}</p> */}
                </div>
              </div>

              <div className="customerName">
                <div className="firstname">
                  <label htmlFor="">
                    Pin Code <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    value={pincode}
                    onChange={handlePincodeChange}
                    onBlur={handleBlurrr}
                    placeholder="Enter your PIN code"
                  />
                  {errorMessageee && <p>{errorMessageee}</p>}
                </div>

                <div className="firstname">
                  <label htmlFor="">
                    Phone <span className="star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    onBlur={handleBlur}
                    placeholder="Enter your phone number"
                  />
                  {errorMessage && <p>{errorMessage}</p>}
                </div>
              </div>

              <div className="firstname">
                <label htmlFor="">
                  Email <span className="star">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleBlurr}
                  placeholder="Enter your email address"
                />
                {errorMessagee && <p>{errorMessagee}</p>}
              </div>

              <div className="additionalInfo">
                <p>Additional Information</p>
              </div>

              <div className="firstname">
                <label htmlFor="">
                  Order Notes (Optional) <span className="star">*</span>
                </label>
                <input type="text" placeholder="" />
              </div>
            </form>
            
          </div>
          
        </div>
        



        <div className="billingRgt">
          <div className="cartRgt cartRgtt">
            <div className="cartTotalHeading cartTotalHeadingg">
              <h1>Your Order</h1>
              <p>Edit Order</p>
            </div>
            <div className="clContent clContentt">
              <div className="cItem1 cItem11">
                <div className="cItem cItemm">
                  <div className="cItemImg cItemImgg">
                    {" "}
                    <img src={backprint_t} alt="backprint_t" />{" "}
                  </div>
                  <div className="cItemDetails cItemDetailss">
                    <h2>New Galaxy Over - Sized T-shirt</h2>
                    <div className="p">
                      <p>Size - M</p>
                      <p>COLOR - White</p>
                      <p>STYLE - Over Sized T- Shirt</p>
                    </div>
                  </div>
                </div>
                <div className="cItemRemove">
                  <p>₹599</p>
                </div>
              </div>

              <div className="cItem1 cItem11">
                <div className="cItem cItemm">
                  <div className="cItemImg cItemImgg">
                    {" "}
                    <img src={backprint_t} alt="backprint_t" />{" "}
                  </div>
                  <div className="cItemDetails cItemDetailss">
                    <h2>New Galaxy Over - Sized T-shirt</h2>
                    <div className="p">
                      <p>Size - M</p>
                      <p>COLOR - White</p>
                      <p>STYLE - Over Sized T- Shirt</p>
                    </div>
                  </div>
                </div>
                <div className="cItemRemove">
                  <p>₹599</p>
                </div>
              </div>

              <div className="cItem1 cItem11">
                <div className="cItem cItemm">
                  <div className="cItemImg cItemImgg">
                    {" "}
                    <img src={backprint_t} alt="backprint_t" />{" "}
                  </div>
                  <div className="cItemDetails cItemDetailss">
                    <h2>New Galaxy Over - Sized T-shirt</h2>
                    <div className="p">
                      <p>Size - M</p>
                      <p>COLOR - White</p>
                      <p>STYLE - Over Sized T- Shirt</p>
                    </div>
                  </div>
                </div>
                <div className="cItemRemove">
                  <p>₹599</p>
                </div>
              </div>

              <div className="cItem1 cItem11">
                <div className="cItem cItemm">
                  <div className="cItemImg cItemImgg">
                    {" "}
                    <img src={backprint_t} alt="backprint_t" />{" "}
                  </div>
                  <div className="cItemDetails cItemDetailss">
                    <h2>New Galaxy Over - Sized T-shirt</h2>
                    <div className="p">
                      <p>Size - M</p>
                      <p>COLOR - White</p>
                      <p>STYLE - Over Sized T- Shirt</p>
                    </div>
                  </div>
                </div>
                <div className="cItemRemove">
                  <p>₹599</p>
                </div>
              </div>

              <div className="cItem1 cItem11">
                <div className="cItem cItemm">
                  <div className="cItemImg cItemImgg">
                    {" "}
                    <img src={backprint_t} alt="backprint_t" />{" "}
                  </div>
                  <div className="cItemDetails cItemDetailss">
                    <h2>New Galaxy Over - Sized T-shirt</h2>
                    <div className="p">
                      <p>Size - M</p>
                      <p>COLOR - White</p>
                      <p>STYLE - Over Sized T- Shirt</p>
                    </div>
                  </div>
                </div>
                <div className="cItemRemove">
                  <p>₹599</p>
                </div>
              </div>

              <div className="cItem1 cItem11">
                <div className="cItem cItemm">
                  <div className="cItemImg cItemImgg">
                    {" "}
                    <img src={backprint_t} alt="backprint_t" />{" "}
                  </div>
                  <div className="cItemDetails cItemDetailss">
                    <h2>New Galaxy Over - Sized T-shirt</h2>
                    <div className="p">
                      <p>Size - M</p>
                      <p>COLOR - White</p>
                      <p>STYLE - Over Sized T- Shirt</p>
                    </div>
                  </div>
                </div>
                <div className="cItemRemove">
                  <p>₹599</p>
                </div>
              </div>

              


            </div>
            <div className="cartTotal cartTotall">
              <p>Total</p>
              <span>₹1896</span>
            </div>
            <Link to={'/order'}>
            <div className="cartCheckoutBtn">
              <button>PLACE ORDER</button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
