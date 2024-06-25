import React from 'react'
import { useState } from 'react'
import './post.css'

const Post = ({title,body}) => {

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
   console.log(data)

  return (
    <div>
         <div>
          {
            <div className='post'> 
              <h1>{title}</h1> 
              <h3>{body}</h3>
              </div>
          }
          
         </div>
    </div>
  )
}

export default Post
