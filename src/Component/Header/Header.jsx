import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { DataContext } from '../data/DataProvider';
import Menu from '../svg/bars-solid.svg' ;
import Close from '../svg/xmark-solid.svg' ;
import Cart from '../svg/cart-arrow-down-solid.svg'



const Header = () => {
 const [menu,setMenu] = useState(false)
const value =useContext(DataContext)
const [cart]=value.cart
  const toggleMenu = () => {
    setMenu(!menu)
  }
  const styleMenu ={
    left: menu ? 0 : '-100%'
  }
  return (
    <header >
    <div className='logo'>
      <h1>
        <Link to="/">Citizen </Link>
      </h1>
    </div>
    <ul style={styleMenu}>
          <img src={Close} alt="" className='close' onClick={toggleMenu}/>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Login">Login / Register</Link></li>
    </ul>
    <div className="menu">
      <div className="header__logo">
          <img src={Menu} alt="" className=' menu' onClick={toggleMenu}/>
      </div>
      <div className="cart">
        <span>{cart.length  }</span>
        <Link to="/cart">
          <img src={Cart} alt="" className=' cart__img' onClick={toggleMenu}/>
        </Link>
      </div>
    </div>
    </header>
  )
}   

export default Header