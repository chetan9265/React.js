// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination,Navigation } from 'swiper/modules';

// const Card = ()=> {
//   const [data,setdata]=useState([])



//   function FectchData(){
//     axios.get("http://localhost:8000/StorePage").then((res)=>{
//       setdata(res.data)
//     }).catch((err)=>{
//       console.log(err)
//     })
//   }

//   useEffect(()=>{
//     FectchData()
//   },[])
//   return (
//     <div className='Main' style={{width:"1000px"}}>
      
//       <Swiper  pagination={{
//           type: 'fraction',
//         }}
//         injectStyles={[
//           `
//             .swiper-button-next,
//             .swiper-button-prev {
//               background-color: white;
//               padding: 8px 16px;
//               border-radius: 100%;
//               border: 2px solid black;
//               color: red;
//                   opacity: 0;
//             }
//             .swiper-pagination-bullet{
//               width: 40px;
//               height: 40px;
//               background-color: red;
//                   opacity: 0;
//             }
//         `,
//         ]}
//         navigation={true}
//         slidesPerView={2.9}
//         spaceBetween={10}
//         modules={[ Navigation]}className="mySwiper">
//                    {
//   data.map((el)=>(
//     <SwiperSlide>
//     <div key={el.id}>
//    <div className='Store-Section-Data' key={el.id}>
//     <div className="Store-Section-Card"  key={el.id}  >
//                <img src={el.image_url} alt="" />
//                       <div className="Text">
//         <p className='Head-Para'>
//           NEW
//         </p>
//         <h2>
//             {el.name}
//         </h2>
//         <p className='Last-para'>
//         MRP {el.price} (Incl. of all taxes)
//         </p>
//     </div>
//    </div>
   
//    </div>
//     </div></SwiperSlide>

//   ))
// } 
//                   </Swiper>
      
// {/* {
//   data.map((el)=>(
    
//     <div key={el.id}>
//    <div className='Store-Section-Data' key={el.id}>
//     <div className="Store-Section-Card"  key={el.id}  >
//                <img src={el.image_url} alt="" />
//                       <div className="Text">
//         <p className='Head-Para'>
//           NEW
//         </p>
//         <h2>
//             {el.name}
//         </h2>
//         <p className='Last-para'>
//         MRP {el.price} (Incl. of all taxes)
//         </p>
//     </div>
//    </div>
   
//    </div>
//     </div>
//   ))
// } */}
// </div>

//   )
// }

// export default Card