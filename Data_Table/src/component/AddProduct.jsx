import axios from 'axios';
import React from 'react'

import { useState } from 'react';
const INTIALIZE = {
  title: "",
  description: "",
  image: "",
  price: 0,
  category: "",
    };
const AddProduct = () => {
  const[formdata,setformdata]=useState(INTIALIZE);
  const {title,
    description,
    image,
    price,
    category} = formdata;
    function handleclick(e) {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
      }
      function handlesubmit(e){
        e.preventDefault();
        console.log(formdata);
        axios.post("http://localhost:8000/posts",formdata)
        .then((res)=>{console.log(res)
          alert("Data Added..")
        })
        .catch((err)=>console.log(err))
      }
  return (
    <div>
      <h1>Add Product</h1>
      <form  onSubmit={handlesubmit}>
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
           <input type="text" placeholder="price" value={price} name="price" onChange={(e)=>handleclick(e)}  /> <br />
           <input type="text" placeholder="description"   name='description' value={description}  onChange={(e)=>handleclick(e)}  /> <br />
           <button  className='btnAdd'>Submit</button>
     </form>



    </div>
  )
}

export default AddProduct
