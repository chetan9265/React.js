import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter } from "react-router-dom";
import Allroutes from './Allroutes'


function App() {

  return (
    <>
      <Navbar/>
      <Allroutes/>
    </>
  )
}

export default App
