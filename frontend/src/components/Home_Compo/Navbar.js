import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../Images/iconamoon_search-light.png'
import cart from '../Images/Cart.png'
import userProfImg from '../Images/Group 46.png'
import logoImg from '../Images/Untitled-2 1.png'
import '../css/home.css'

function Navbar() {

    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      if(scrollY > window.scrollY)
      {
        console.log(true)
      }else{
        console.log(false)
      }
      setScrollY(window.scrollY);
      console.log(scrollY)
    };

    window.addEventListener('scroll', handleScroll);

  }, []); 
  return (
    <>
    <div className='navMain'>
      <Link to={'/'}>
        <img src={logoImg} className='logo' alt="" />
      </Link>
        <div className='navComps'>
            <Link to={'/customizedGiftsAllProducts'}>CUSTOMIZED GIFTS</Link>
            <Link to={'/corporateGiftsAllProducts'}>CORPORATE GIFTS</Link>
            <div className='navSearchBar'>
                <input type="text" placeholder='Search'/>
                <img src={search} alt="search" />
            </div>
            <Link to={'/cart'}>
                <img src={cart} alt="cart" />
            </Link>
            <Link to={'/order'}>
                <img src={userProfImg} alt="userProfImg" />
            </Link>
        </div>
    </div>
    </>
  )
}

export default Navbar