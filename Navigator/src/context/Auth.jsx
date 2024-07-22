import { createContext, useState } from "react";

 export const IsAuthcontext=createContext();


 export   default function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState({
        Islogin:false,
        token:null
    });
    function Login(value){
     setIsAuth({Islogin:true,token:value})
    }
    function Logout(value){
        setIsAuth({Islogin:false,token:null})
       }
   return  <IsAuthcontext.Provider  value={{isAuth,Login,Logout}} >{children}</IsAuthcontext.Provider>
    }