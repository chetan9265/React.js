import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const[data,setdata]=useState({})
    const {id}=useParams();
    function FetchData(){
        axios.get(`http://localhost:8000/posts/${id}`)
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        FetchData()
    },[])
  return (
    <div>
        <h1>Product Details</h1>
        <div className='One'>
            <img src={data.image} alt="" height={300} width={300}/>
            <h2>{data.title}</h2>
            
            <p>{data.description}</p>
            <p>{data.category}</p>
            <p>Price: {data.price}</p>
            </div>
        </div>
  )
}

export default ProductDetails
