
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {
    const {Auth}=useContext(AuthContext)
    const Authication=Auth.token
    if(!Authication){
        return <Navigate to={"/Login"}/>
    }

  return children
      
  
}

export default PrivateRoute
