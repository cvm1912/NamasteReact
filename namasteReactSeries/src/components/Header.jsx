import React, { useState } from 'react'

const Header = () => {

  const[btnName,setBtnName] = useState("Login")
  return (
    <div className='header'>
        <div className='logo-container'> <img src="/Logo.png" alt = "logo"  /></div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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
