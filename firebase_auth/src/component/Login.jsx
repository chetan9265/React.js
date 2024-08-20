import React from 'react'
import {  signInWithPopup } from "firebase/auth"
import { auth, provider } from '../firebase/firebase';


 export const Login = () => {
    function SignWithData(){
        signInWithPopup(auth,provider).then((res)=>{
            console.log(res.user.photoURL)
            alert("Log in Successfully ..")
        }).catch((err)=>{
            alert(err.message)
        })
    }
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="Enter Your Username" />
        <br />
        <input type="text" placeholder="Enter Your Password" />
        <br />
        <button>Login</button>
     <br />
     <br />
     <button  onClick={SignWithData} type="button" class="login-with-google-btn" >
  Sign in with Google
</button>
      </form>
    </div>
  )
}

