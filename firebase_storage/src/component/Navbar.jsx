import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Product">Product</Link>
      <Link to="/Addproduct">AddProduct</Link>
      
      </div>
    </div>
  )
}

export default Navbar
