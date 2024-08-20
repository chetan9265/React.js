import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../Service/firebase';
const INTIALIZE = {
    title: "",
    description: "",
    image: "",
    price: 0,
    category: "",
};
const EditProduct = () => {


    const { id } = useParams();
    const [formdata, setformdata] = useState(INTIALIZE);
    const { title,
        description,
        image,
        price,
        category } = formdata;
    function handleclick(e) {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    }
    function fetchdata(){
        getDocs(collection(db,"Product"))
        .then((res)=>{
          let newarray=res.docs.map((el)=>{

            if(el.id==id){
                setformdata({...el.data(),id:el.id})
                console.log("hello")
            }

        })
          setdata(newarray)
      
        }).catch((err)=>{
          console.log(err)
        })
      }

    function UpdateProduct(e) {
        const Updatedata = doc(db, "Product", id);
        updateDoc(Updatedata, {
            
            title: title,
            description: description,
            image: image,
            price: price,
            category: category

        }).then((res)=>{
            alert("Data Update")
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        fetchdata()
    },[])

    return (
        <div style={{paddingTop:"20px"}}>
                <input type="text" placeholder="Image" name='image' value={image} onChange={(e) => handleclick(e)} /> <br />
                <input type="text" placeholder="title" name='title' value={title} onChange={(e) => handleclick(e)} /> <br />
                <select value={category} onChange={(e) => handleclick(e)} name='category' >
                    <option value={""}>select Your Category</option>
                    <option value={"men's clothing"}>men's clothing</option>
                    <option value={"jewelery"}>jewelery</option>
                    <option value={"electronics"}>electronics</option>
                    <option value={"women's clothing"}>women's clothing</option>
                </select>
                <br />
                <input type="text" placeholder="price" value={price} name="price" onChange={(e) => handleclick(e)} /> <br />
                <input type="text" placeholder="description" name='description' value={description} onChange={(e) => handleclick(e)} /> <br />
                <button className='btnAdd' onClick={(e)=>UpdateProduct(e)}>Submit</button>
        </div>
    )
}

export default EditProduct
