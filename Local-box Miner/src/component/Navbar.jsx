import  { useContext } from 'react'
import {ThemeContext} from "../context/Themecontext"

const Navbar = () => {
 const {theme,Themechange}=useContext(ThemeContext)

  return (
    <div>
      <h1>Navbar</h1>
      <h3>The Theme is {theme} </h3>
    </div>
  )
}

export default Navbar
