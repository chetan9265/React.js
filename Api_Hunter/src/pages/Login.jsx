import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../component/AuthContext';
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
  const[email,setemail]=useState("")
  const[pass,setpass]=useState("")


    const{Login,Auth}=useContext(AuthContext)
    const Navigate = useNavigate();

    const HandleLogin = async (e) => {
        e.preventDefault();
            try {
              const response = await axios.post('https://reqres.in/api/login', {email: email,password: pass});
              Login(response.data.token);
              Navigate('/Dashboard');
            } catch (err) {
                console.log(err)
            }
      };
      useEffect(()=>{
        HandleLogin()
      },[])
  return (
    <div>
      <div className='Login'>
        <h2>Log in</h2>
        <form action="" onSubmit={(e)=>HandleLogin(e)}>
            <input type="text" placeholder='Enter your email'  onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' onChange={(e)=>setpass(e.target.value)} />
            <br />
            <button type="submit" >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
