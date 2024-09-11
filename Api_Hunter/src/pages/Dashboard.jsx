import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../component/AuthContext'
import ProductTable from '../component/ProductTable';
import axios from "axios"

const Dashboard = () => {
  const { Auth, Logout } = useContext(AuthContext)
  const [Dataproduct, setDataproduct] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(() => {
    const Fectdata = async () => {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
      setDataproduct(response.data.data);
      setloading(false);
    };
    Fectdata();
  }, []);

  return (
    <div>

      <h2>Dashboard</h2>
      <button className='Logout' onClick={() => Logout} data-testid="logout-btn">Log Out</button>
      <h3 data-testid="user-token">Token :{Auth.token}</h3>
      <div>{ loading ? <p>Loading...</p> : <ProductTable ProductData={Dataproduct} />}
      </div>
      <div>
      </div>
    </div>
  )
}

export default Dashboard
