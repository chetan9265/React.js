import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
  const[data,setdata]=useState({})

  const {id}=useParams()
  const Description = async () => {
        try {
          const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
          setdata(response.data.data)
        } catch (err) {
            console.log(err)
        }
  };
  useEffect(()=>{
    Description()
  },[id])
  return (
    <div>
      <div className='Card' key={data.id}> 
        <img src={data.img} alt=""  data-testid= "product-image"  height={400} width={400}/> 
           <h2 data-testid = "product-brand">Brand:{data.brand}</h2>
          <h3 data-testid = "product-category">Category:{data.category}</h3>
          <h4 data-testid="product-price">Price: {data.price}</h4>
          <h4 data-testid ="product-details">Deatils: {data.details}</h4>
       </div>
    </div>
  )
}

export default SingleProductPage
