import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/1217123_apple_icon.png"
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Service/firebase';
import { signOut } from 'firebase/auth';


function Header (){
  const [show,setshow]=useState(false);
  const [ShowData,setShowData]=useState(false);
  const [medidata,setmedidata]=useState(false);
  const [user] = useAuthState(auth);
  const[Data,setData]=useState([])
  const [textdata,settextdata]=useState(false);
  const [login,setlogout]=useState(false)
  const [showdata1,setshowdata1]=useState(false)
   
  function Signout(){
    signOut(auth).then(() => {
      setlogout(false)
      setShowData(false)

    }).catch((error) => {
      // An error happened.
    });
  }
    
  function SetShow(){
    setshow(!show)
  }
  function Authication(){
if(user){
  setShowData(true)
  setlogout(true)
}
  }
  
  function Click(){
    alert("Sorry , I Have No Data for Your Select Please Show The this Products  ")
    window.location.href="Accesories"
  }
  function  Add(){
    axios.get(" http://localhost:8000/AddtoCart").then((res)=>{
      setData(res.data)
        if(0<res.data.length){
          settextdata(true)
        }
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    Add()
    Authication()
  },[show,login,textdata,ShowData])
  
  return (
    <div style={{position:"relative"}}>
        <div className='Navbar' style={{backgroundColor:"   rgba(255, 255, 255, .8);"}}>
            <div className="Nav">
            <Navbar  className='Navs'  >
        <div className='Nav-Container'>
        <NavLink>
                    <img src={Logo} alt=""  width={17}/>
                </NavLink>
                <NavLink className='A-hide' to="/Store">  <h2 className='A-hide'>Store</h2></NavLink>
                <NavLink className='A-hide' to="/Accesories">  <h2 className='A-hide'>Accessories</h2></NavLink>

                <NavLink  className='A-hide' to="/Mac">  <h2 className='A-hide'>Mac</h2></NavLink>
                <NavLink  className='A-hide' to="/Ipad">  <h2 className='A-hide'>ipad</h2></NavLink>
                <NavLink className='A-hide'  onClick={Click} >  <h2 className='A-hide'>iPhone</h2></NavLink>
                <NavLink className='A-hide'  onClick={Click}>  <h2 className='A-hide'>Watch</h2></NavLink>
                <NavLink className='A-hide' onClick={Click}>  <h2 className='A-hide'>AirPods</h2></NavLink>
                <NavLink className='A-hide' onClick={Click}>  <h2 className='A-hide'>TV & Home</h2></NavLink>
                <NavLink className='A-hide' onClick={Click}>  <h2 className='A-hide'>Entertainment</h2></NavLink>
                <NavLink className='A-hide' onClick={Click}>  <h2 className='A-hide'>Support</h2></NavLink>
                <NavLink>  <i class="bi bi-search"></i>
                </NavLink>
                <NavLink   onClick={SetShow} >  <i class="bi bi-bag"></i> <span className={ShowData ? "Span-Data" : "Span-Data-Hide"}>{Data.length}</span>
                </NavLink>
        </div>
      </Navbar>
        </div>
        </div>
        <div className='Navbar-media' style={{backgroundColor:"   rgba(255, 255, 255, .8);"}}>
            <div className="Nav">
            <Navbar  className='Navs'  >
        <div className='Nav-Container'>
        <NavLink>
                    <img src={Logo} alt=""  width={17}/>
                </NavLink>
                     <div className='Media-Icon'>
                <NavLink className="icon-1">  <i class="bi bi-search"></i>
                </NavLink>
                <NavLink  className="icon-2"  onClick={SetShow} >  <i class="bi bi-bag"></i> <span className={ShowData ? "Span-Data" : "Span-Data-Hide"}>{Data.length}</span>
                </NavLink>
                <NavLink className="icon-3" onClick={()=>setmedidata(true)} >
                <i class="bi bi-list" style={{fontSize:"22px"}}></i>
                </NavLink>
                </div>
        </div>
      </Navbar>
        </div>
        </div>
        {
          medidata ?<div className="Navbar-media-Main">
          <Link onClick={()=>setmedidata(false)}><i class="bi bi-x-lg"></i></Link>
        <NavLink to="/Store">  <h2>Store</h2></NavLink>
                <NavLink to="/Accesories">  <h2>Accessories</h2></NavLink>

                <NavLink to="/Mac">  <h2>Mac</h2></NavLink>
                <NavLink to="/Ipad">  <h2>ipad</h2></NavLink>
                <NavLink onClick={Click} >  <h2>iPhone</h2></NavLink>
                <NavLink onClick={Click}>  <h2>Watch</h2></NavLink>
                <NavLink onClick={Click}>  <h2>AirPods</h2></NavLink>
                <NavLink onClick={Click}>  <h2>TV & Home</h2></NavLink>
                <NavLink onClick={Click}>  <h2>Entertainment</h2></NavLink>
                <NavLink onClick={Click}>  <h2>Support</h2></NavLink>
        </div>:""
        }
{
  show ?     
        <div className="Signup">
  <div className="Signup-Bag">
  {
   ShowData ?   
 <div className='Cart-Main'>
  {textdata ?
  <div className='Cart-Head'>
    <h2>Bag</h2>
  <Link to="/Bag">
  <button className='btn btn-primary'>Review Bag</button></Link>
  </div>:
  <div className="Card-text">
  <h1>Your Bag is empty</h1>
  <Link to={"/Accesories"}>Shop Now</Link>
</div>
}
  <div className={Data.length>3? "Cart-Data-Main":"Cart-Data"}>
  {
  Data.map((el)=>{
  return(
    <div key={el.id} className="Bag-Container">
      <img src={el.image} alt="" width={64} height={64} />
      <h2>{el.name}</h2>
      </div>
  )
})
}
</div>
 </div>
:
<div className="Non-Signup-Data">
        <h1>Your Bag is empty</h1>
        {
           login ?<span>
           <Link to={"/Signup"}> Shop Now</Link>
         </span>
           :
           <span>
           <Link to={"/Signup"}>Sign in</Link>
              to see if you have any saved items
         </span>
        }

      </div>
  }
  
      <div className="Signup-Profile">
        <p>My Profile</p>
        <span><i class="bi bi-box-seam"></i>Orders</span> <br />
        <span><i class="bi bi-bookmark"></i>Your Saves</span> <br />
        <span><i class="bi bi-person-fill-gear"></i>Account</span> <br />
        <span>
        <i class="bi bi-person-circle"></i>{
          login?<Link onClick={Signout}> Sign Out</Link>:<Link to={"/Signup"}>Sign in</Link>
        }
        </span>
      </div>

  </div>
</div> :""
}
        
    </div>
     )
}

export default Header
