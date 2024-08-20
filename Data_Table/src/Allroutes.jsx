import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddProduct from './component/AddProduct'
import EditProduct from './component/EditProduct'
import ProductDetails from './component/ProductDetails'
import ProductList from './component/ProductList'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/EditProduct/:id" element={<EditProduct />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        </Routes>

    </div>
  )
}

export default Allroutes
