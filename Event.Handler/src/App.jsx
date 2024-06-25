import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from "../src/component/Post"
import './component/post.css'

function App() {
  const [toggle, settoggle] = useState()
  const[data,setdata]=useState([])
  async function Fetch(){
   try{
       let data = await  fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json());
       setdata(data);
   }
   catch{
   console.log(err);
   }
  }
  Fetch();
  function clicktoggle(){
    settoggle(!toggle)
  }
  return (
    <>
     
    {
      toggle?
      <div>
      {  data.map((el)=>(
          <Post key={el.id} title={el.title} body={el.body} />
         ))
      
         }
      </div>
      :<button onClick={clicktoggle} className='btn'>GET POSTS</button>
    }
    
    </>
  )
}

export default App
