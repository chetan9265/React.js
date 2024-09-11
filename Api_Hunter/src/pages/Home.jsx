import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Home = () => {
  return (
    <div >
      <h1>Welcome to Home Page</h1>
      <div className='Nav'>
        <Link  to="/Dashboard">Dashorad</Link>
        <button className='BtnDashboard'><Link to="/Login">Login</Link></button>
      </div>
    </div>
  )
}

export default Home
