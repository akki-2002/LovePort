import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../Images/Untitled-2 1.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Love Port Logo" />
        <div className="email">loveport2011@gmail.com</div>
        <div className="phone">+91 7000296299</div>
        <div className="address">
          Shri Ram Apartments, Jeevan Jyoti Colony, Satna- 485001, Madhya Pradesh
          <p className="india">INDIA</p>
        </div>
        <div className="social-icons">
          <span>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61557881678454&mibextid=qi2Omg&rdid=N1ymuCH319X7tF7Y&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FvktAzS5kngJvqaxS%2F%3Fmibextid%3Dqi2Omg"><FaFacebookF /></a> 
            <a target="_blank" href="https://www.instagram.com/loveport24/?igsh=OXh6aDk0ajJvNGlx"><AiFillInstagram /></a>
           <a target="_blank" href="https://www.linkedin.com/in/love-port-19726a301/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
           <a target="_blank" href="https://x.com/loveport24?t=BeCv-0EnXYRYuLIsQQDgAw&s=08"><FaTwitter /></a>
           <a target="_blank" href="https://www.youtube.com/@Loveport24"><FaYoutube /></a>
          </span>
        </div>
        <div className="copyright">Copyright © Love Port. 2024</div>
      </div>
      <div className="footer-right">
        <ul>
      <li >About Us</li>
          <li>Terms & Conditions</li>
          <li>Refund & Returns</li>
          <li>Privacy Policy</li>
          <li>Shipping</li>
          <li>Contact Us</li>
        </ul>
        <p>
          Design and Development by <span className="oar">&nbsp;AKSHAT</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
