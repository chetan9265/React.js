import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./component/Navbar"
import Section from "./component/Section"
import {ThemeContext} from "./context/Themecontext"

function App() {
  const {theme,Themechange}=useContext(ThemeContext)

  return (
    <>
     <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}}>
     <Navbar/>
     <Section/>
     </div>
     <button onClick={Themechange} style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}}>{
      theme=="light"?"Toggle to Dark Theme":"Toggle to light Theme"
}</button>
    </>
  )
}

export default App
