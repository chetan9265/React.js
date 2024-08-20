import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Service/firebase'
import { doc, deleteDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Product = () => {
const [data,setdata]=useState([])
function fetchdata(){
  getDocs(collection(db,"Product"))
  .then((res)=>{
    let newarray=res.docs.map((el)=>(({...el.data(),id:el.id})))
    setdata(newarray)

  }).catch((err)=>{
    console.log(err)
  })
}
useEffect(()=>{
  fetchdata()
  
},[])
const DeleteProduct =async(id)=>{
  await deleteDoc(doc(db, "Product", id));
}
  return (
    <div style={{paddingTop:"40px",display:"flex"}}>
      {
        data.map((el)=>{
          return(
            <div key={el.id} style={{width:"500px",margin:"auto"}}> 
              <img src={el.image} alt=""  height={250} width={250}/>
              <h2>{el.title}</h2>
              <h3>{el.price}</h3>
              <h3>{el.category}</h3>
              <div>

              <button style={{marginRight:"20px"}}>
              <Link to={`/EditProduct/${el.id}`}>
                Edit
                </Link></button>
              <button onClick={()=>DeleteProduct(el.id)}>Delete</button>
              </div>
              </div>

          )
        })
      }
    </div>
  )
}

export default Product
