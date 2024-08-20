import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

export  const PRIVACY = ({children}) => {
    const [user] = useAuthState(auth);
    console.log(user)
    if(!user){
        return <Navigate to={"/Login"}/>
    }
  return children
}

