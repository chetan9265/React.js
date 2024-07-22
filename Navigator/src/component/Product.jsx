import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const[data,setdata]=useState([])
    function Fectdata(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        Fectdata()
    },[])
  return (
    <div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"90%",margin:"auto"}}>
         {
            data.map((el)=>(
                <div key={el.id} className="card" style={{width: "18rem"}}
                >
                    <Link to={`/Description/${el.id}`}>
                    <img src={el.image} className="card-img-top"   height={250} width={250} alt="..."/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{el.title}</h5>
                        <h4>{el.category}</h4>
                        <p className="card-text">{el.price}</p>

                    </div>
                    </div>
            ))

         }
         </div>
    </div>
  )
}

export default Product
