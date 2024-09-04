import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ThemeButton = () => {
  const {Theme}=useSelector((store)=>store.Theme)
  const dispatch=useDispatch();
  return (
    <div>
      <div>
        <button  disabled={Theme=="Light"} onClick={()=>dispatch({ type:"LIGHT", payload:"Light"})} >Switch to Light</button>
        <button disabled={Theme=="DARK"}  onClick={()=>dispatch({type:"DARK",payload:"DARK"})}>Switch to Dark</button>
      </div>
    </div>
  )
}

export default ThemeButton
