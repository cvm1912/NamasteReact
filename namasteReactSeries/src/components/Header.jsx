import React from 'react'

const Header = () => {
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
        <div className='cart'>Cart</div>
    </div>
  )
}

export default Header
