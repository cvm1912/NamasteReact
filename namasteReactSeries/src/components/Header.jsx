import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

const Header = () => {
  const onlineStatus = useOnline();

  const[btnName,setBtnName] = useState("Login")
  return (
    <div className='header'>
        <div className='logo-container'> <img src="/Logo.png" alt = "logo"  /></div>
        <div className='nav-items'>
            <ul>
                <li>online status:{onlineStatus?"green":"red"} </li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li>Cart</li>
            </ul>
        </div>
        <div className='btn'>
          <button onClick={()=>{
            btnName==="Login"?
           setBtnName("Logout"):  setBtnName("Login")
          }}>{btnName}</button>
        </div>
    </div>
  )
}

export default Header
