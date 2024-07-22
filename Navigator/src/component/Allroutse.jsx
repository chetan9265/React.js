import React from 'react'
import Product from './Product'
import Login from './Login'
import Description from './Description'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Privacypage from './Privacypage'



const Allroutse = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Product" element={
                <Privacypage>
                <Product />
                </Privacypage>
        } />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Description/:id" element={<Description/>}/>
        </Routes>
    </div>
  )
}

export default Allroutse
