import React from 'react'
import CounterButton from './CounterButton'
import Theme from './ThemeButton'
import { useDispatch, useSelector } from 'react-redux'
import ThemeButton from "../component/ThemeButton"

const Counter = () => {

    const {counter}=useSelector((store)=>store.Counter)
    const dispatch=useDispatch();
    const {Theme}=useSelector((store)=>store.Theme)
      
  return (
    <div>
      <ThemeButton/>
      <div className={Theme=="Light"?"Main-Light":"Main-Dark"}>
      <div className='Counter-Main'>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <CounterButton/>  
      </div>
      </div>
    </div>
  )
}

export default Counter
