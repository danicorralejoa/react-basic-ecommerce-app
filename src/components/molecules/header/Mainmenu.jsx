import React from 'react'
import Logo from './Logo'

const Mainmenu = () => {
  return (
    <>
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      < Logo />
      <ul className='flex space-x-4'>
        <li>
          <a href="/" className="menu-item">Home</a>
        </li> 
        <li>
          <a href="/products" className="menu-item">Products</a>
        </li>
        <li>
          <a href="#" className="menu-item">Offers</a>
        </li>
        <li>
          <a href="#" className="menu-item">About Us</a>
        </li>
      </ul>
   </nav>
    </>
  )
}

export default Mainmenu