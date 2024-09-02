import React, { useState } from 'react'
import  Header  from '../Component/Navbar'
import { Link, Navigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Service/firebase'


const Signup = () => {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  function Signin(){
    signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
      <Navigate to={"/"}/>
      window.location.href="/"

    }).catch((err)=>{
      alert("error")
    })
  }
  
  return (

    <div>
  <Header/>
        <div className="Signup-Main">
            <div className="signup">
            <h1>Sign in for faster checkout.</h1>
            </div>
            <div className="Signup-Form">
              <h2>Sign in to Apple Store</h2>
                <input type="text"   name='email'   onChange={(e)=>setemail(e.target.value)}  placeholder='Email or Phone Number' className='Input-1' /> <br />
                <input type="password" name='password' onChange={(e)=>setpassword(e.target.value)} placeholder='password' /> <br />
               <button class="button-46" onClick={Signin}>Sign in</button>
               <div className="Checkbox-Form">

                <input type="checkbox" className='Check' />
                Rememeber me
               </div>
               <div className="Links-Form">
                <Link>Forgotten your password?
                <i class="bi bi-arrow-up-right"></i>
                </Link>
                <br />
                <p >
                Do not have an Apple ID?  
                <Link  to={"/Signin"} style={{paddingLeft:"3px"}}>
                      Create yours now.<i class="bi bi-arrow-up-right"></i>
                </Link>
                </p>
               </div>

            </div>
        </div>
        <div className="signup-Footer">
          <div className="Signup-Form-footer">
            <h2>Need more help? <Link>Chat now</Link>  or call  000800 040 1966</h2>
          </div>
          <div className="Signup-Footer-2">
            <div className="Signup-Footer-Text">
              <p className='Border-p'>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our <Link>Security Policy</Link> </p>
              <p>More ways to shop: <Link>
              Find an Apple Store</Link> or <Link>
              near you. Or </Link> near you Or call <Link>
              000800 040 1966</Link> </p>
              <div className='Footer-Para-lasts'  style={{marginTop:"-10px"}}>
            <div className="Footer-Links-Last">
            <p  className='COPY-last  lst-signup'>Copyright © 2024 Apple Inc. All rights reserved.</p>
             <div className='Last-links'>
             <Link className='A-1'>Privacy Policy</Link>
                <Link  className='A-2'>Terms of Use</Link>
                <Link className='A-3'>Sales Policy</Link>
                <Link className='A-4'>Legal</Link>
                <Link className='A-5'>Site Map</Link>
             </div>
            </div>
            <div className="Footer-link-country">
                <p className='Para-Country'>India</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Signup
