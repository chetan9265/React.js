import React from 'react'
import { useState } from 'react'
import './post.css'

const Post = ({title,body}) => {


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
