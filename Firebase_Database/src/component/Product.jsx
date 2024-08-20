import React, { useEffect, useState } from 'react'

import axios from "axios"
const Product = () => {
    const [data,setdata]=useState([])
    function FetchData(){
        axios.get("https://fakestoreapi.com/products").then((res)=>setdata(res.data))
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        FetchData()
    },[])
  return (
    <div>
      <h1>Product Page</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {
        data.map((el)=>(
            <div key={el.id} style={{margin:"20px"}}>
                <img src={el.image} alt=""height={250} width={250}/>
                <h2>{el.title}</h2>
                <h3>{el.category}</h3>
                <h3>{el.price}</h3>

                </div>
        ))
      }
      </div> 

    </div>
  )
}

export default Product
