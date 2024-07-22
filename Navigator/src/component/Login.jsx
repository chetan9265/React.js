import axios from 'axios'
import React, { useContext, useState } from 'react'
import { IsAuthcontext } from '../context/Auth'

const Login = () => {
    const {Login}=useContext(IsAuthcontext)

    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
      const User={
        email,password
      }
      const handleLogin=(e)=>{
        e.preventDefault()
        axios.post("https://reqres.in/api/login",User).then((res)=>{
            Login(res.data.token)
        }).catch((err)=>{
            console.log(err)
        })
      }
      

  return (
    <div  className='Main'>
        <form action="" onSubmit={(e)=>handleLogin(e)}>
            <input type="text"  style={{width:"200px"}} name="username"  onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email" />
            <br />
            <input type="password" style={{width:"200px"}}  name="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Your Password" />
            <br />
            <input type="submit" style={{width:"80px"}} />
        </form>
      
    </div>
  )
}

export default Login
