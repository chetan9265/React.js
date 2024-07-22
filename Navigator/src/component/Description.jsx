import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const {id}=useParams();
    const [data,setdata]=useState({})

    function FetchData(){
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        FetchData()
    },[])
  return (
    <div>
        <h1>Product Description</h1>
        <div style={{textAlign:"center",width:"60%",margin:"auto"}}>
            <img src={data.image} alt="" height={300} width={300}/>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h3>{data.category}</h3>
            <h4>{data.price}</h4>

        </div>
    </div>
  )
}

export default Description
