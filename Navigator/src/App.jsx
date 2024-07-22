import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Allroutse from './component/Allroutse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Allroutse/>
    </>
  )
}

export default App
