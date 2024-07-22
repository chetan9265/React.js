import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
const INTIALIZE = {
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
      };

const EditProduct = () => {
    const{id}=useParams();
    const[formdata,setformdata]=useState(INTIALIZE)
    const {title,
        description,
        image,
        price,
        category} = formdata;
        function handleclick(e) {
            const { name, value } = e.target;
            setformdata({ ...formdata, [name]: value });
          }
        

        function Getdata(){
            axios.get(`http://localhost:8000/posts/${id}`)
            .then((res)=>setformdata(res.data))
            .catch((err)=>console.log(err))
        }
  
        useEffect(()=>{
            Getdata()
        },[])

        function handlesubmit(e){
            e.preventDefault();
            axios.put(`http://localhost:8000/posts/${id}`,formdata)
            .then((res)=>{
                console.log(res.data)
            }).then((err)=>{
                console.log(err)
            })
          }

  return (
    <div>
        <h2>Edit Product</h2>
      <div className="Editform" style={{textAlign:"center",marginTop:"40px"}}>
        <form   onSubmit={handlesubmit} >
           <input type="text" placeholder="Image"  name='image'  value={image}   onChange={(e)=>handleclick(e)}  /> <br />
           <input type="text" placeholder="title" name='title' value={title}  onChange={(e)=>handleclick(e)} /> <br />
           <select  value={category} onChange={(e)=>handleclick(e)}  name='category' >
             <option value={""}>select Your Category</option>
             <option value={"men's clothing"}>men's clothing</option>
             <option value={"jewelery"}>jewelery</option>
             <option value={"electronics"}>electronics</option>
             <option value={"women's clothing"}>women's clothing</option>
           </select>
           <br />
           <input type="text" placeholder="price" value={price} name='price'onChange={(e)=>handleclick(e)}  /> <br />
           <input type="text" placeholder="description"   name='description' value={description}  onChange={(e)=>handleclick(e)}  /> <br />
           <button style={{border:"1px solid black",marginTop:"15px"}}>Submit</button>
     </form>


        </div>
    </div>
  )
}

export default EditProduct
