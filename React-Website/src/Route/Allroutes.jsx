import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Store from '../Pages/Store'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import Mac from '../Pages/Mac'
import Ipad from '../Pages/Ipad'
import Accesories from '../Pages/Accesories'
import Descrioption from '../Pages/Descrioption'
import Bag from '../Component/Bag'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/Store" element={<Store />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Mac" element={<Mac />} />
        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Accesories" element={<Accesories />} />
        <Route path="/Description/:id" element={< Descrioption/>} />
        <Route path="/Bag" element={< Bag/>} />
        
      </Routes>
      
    </div>
  )
}

export default Allroutes
