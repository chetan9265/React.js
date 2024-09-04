import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const CounterButton = () => {
    const dispatch=useDispatch();
            
    function handleAdd(){
      dispatch({type:"INCREMENT",payload:1})
    }  
    function handleReduce(){
      dispatch({type:"DECREMENT",payload:1})
    }
  return (
    <div>
      <div>
        <button   onClick={()=>handleAdd()} >ADD</button>
        <button onClick={()=>handleReduce()}>REDUCE</button>
      </div>
    </div>
  )
}

export default CounterButton
