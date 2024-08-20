import React from 'react'
import Addproduct from './component/Addproduct'
import Product from './component/Product'
import About from './component/About'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import EditProduct from './component/EditProduct'

const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Product" element={<Product/> } />
            <Route path="/AddProduct" element={<Addproduct/>}/>
            <Route path='/EditProduct/:id' element={<EditProduct />} />
      </Routes>
    </div>
  )
}

export default Allroutes
