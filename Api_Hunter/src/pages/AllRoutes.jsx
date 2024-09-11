import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import PrivateRoute from '../component/PrivateRoute'
import SingleProductPage from './SingleProductPage'
const AllRoutes = () => {
  return (
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={  <PrivateRoute> <Dashboard /></PrivateRoute>} />
      <Route path="/products/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes
