import React from 'react'
import Product from './component/Product'
import About from './component/About'
import Home from './component/Home'
import {Login} from './component/Login'
import { Routes ,Route} from 'react-router-dom'
import {PRIVACY} from "./privacy/PRIVACY"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Product" element={
            <PRIVACY>
          <Product />
          </PRIVACY>
          } />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}
export default AllRoutes
