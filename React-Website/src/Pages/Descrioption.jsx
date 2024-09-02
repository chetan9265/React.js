import React, { useEffect, useState } from 'react'
import Header from '../Component/Navbar'
import { Link, useParams } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import Footer from '../Component/Footer'

const Descrioption = () => {
    const {id}=useParams();
    const [data,setdata]=useState([])
    const [Dataone,setDataone]=useState([])

        function FectchData() {
        axios.get(`http://localhost:8000/Alldata`).then((res) => {
            res.data.map((el)=>{
                 if(el.id==="AcesoriesProduct"){
                    let filterdata =el.AcesoriesProduct.filter((ele, ind)=>ele.id==id)
                    filterdata.map((el)=>{
                        setDataone(el)
                    })
                 }
                 if(el.id==="product1"){
                    let filterdata =el.product1.filter((ele, ind)=>ele.id==id)
                    filterdata.map((el)=>{
                        setDataone(el)
                    })
                 }
                 if(el.id==="Accessoriesdata3"){
                    let filterdata =el.Accessoriesdata3.filter((ele, ind)=>ele.id==id)
                    filterdata.map((el)=>{
                        setDataone(el)
                    })
                 }
                 if(el.id==="AccessoriesProduct2"){
                    let filterdata =el.AccessoriesProduct2.filter((ele, ind)=>ele.id==id)
                    filterdata.map((el)=>{
                        setDataone(el)
                    })
                 }
                 if(el.id==="Accesories4"){
                    let filterdata =el.Accesories4.filter((ele, ind)=>ele.id==id)
                    filterdata.map((el)=>{
                        setDataone(el)
                    })
                 }
                 if(el.id==="product"){
                    let filterdata =el.product.filter((ele, ind)=>ele.id===id)
                    filterdata.map((el)=>{
                        setDataone(el)
                    })
                 }
                 
            })
                
        }).catch((err) => {
            console.log(err)
        })
    }



    function FetchDatadesc(){
        axios.get(`http://localhost:8000/DescriptionData/${id}`).then((res)=>{
                 setDataone(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    function FetchData1(){
        axios.get(" http://localhost:8000/DescriptionData").then((res)=>{
            setdata(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    function AddProduct(id){
        axios.post("http://localhost:8000/AddtoCart",{
            name:Dataone.name,
            description:Dataone.description,
            image:Dataone.image,
            price:Dataone.price,
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const sliderParams1 = {
        centeredSlides: true,
        loop:true,
        pagination:{
            type: 'fraction'
        },
        breakpoints: {
          340: {
            slidesPerView: 'auto',
            spaceBetween: 10
          },
          1000:{
          slidesPerView:2.7,
          spaceBetween:30
          },
          480:{
            slidesPerView:1.2,
            spaceBetween:0
          }
        }
      };
    useEffect(() => {
        FectchData()
        FetchData1()
        FetchDatadesc()
    }, [id])

    return (
        <div>

            <div className='Description-Main'>
                <Header />
                <div className='Description-Main-1'>
                    <div className='Description-Main-Text'>
                        <div className="Text">
                            
                            <div className="Text-Main">
                                <p className='Desc-Para'>
                                    {Dataone.model}
                                </p>
                                <h2 className='Text-Head'>
                                    {Dataone.name}
                                    </h2>
                                <p>MRP {Dataone.price} <br />
                                    (Incl. of all taxes)</p>
                            </div>
                            <div className="Text-Main-1">
                                <Link>Personalise it for free <i class="bi bi-plus-circle"></i></Link>
                                <div className="text-icon-1">
                                    <div className="icon">
                                        <i class="bi bi-truck"></i>
                                    </div>
                                    <div className="text-icon">
                                        <p>Order by 5:00 pm. Delivers to <Link> 400011 </Link> <br />
                                            <span> Tomorrow — Free </span></p>
                                    </div>
                                </div>
                                <div className="text-icon-1" style={{ marginTop: "-2px" }}>
                                    <div className="icon">
                                        <i class="bi bi-apple"></i>
                                    </div>
                                    <div className="text-icon">

                                        <p>Order now. Pick up, in store: <br />
                                            <span>
                                                Today at <Link> Apple BKC </Link> </span>  </p>
                                    </div>
                                </div>
                                <button className='btn btn-primary' onClick={()=>AddProduct(id)} > Add to Bag</button>
                                <div className="text-information b-1" >
                                    <h3>Need a moment ?</h3>
                                    <p>Keep all your selections by saving this device to <br /> Your Saves, then come back anytime and pick <br /> up right where you left off.</p>
                                    <Link><i class="bi bi-bookmark"></i> Save for later </Link>
                                </div>
                                <div className="text-information" style={{ marginTop: "30px" }}>
                                    <div className='text-info-icon'>
                                        <i class="bi bi-wechat"></i>
                                    </div>
                                    <div className="text-info-2">
                                        <h3>Get help buying.</h3>
                                        <p><Link>Chat now iCE </Link> or call 000800 040 1966.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img">
                            <img src={Dataone.Desc_image}  alt="" className='Descimage' />
                        </div>
                    </div>
                </div>
                <div className='Description-Main-Content'>
                    <div className="Description-Main-Accordian">
                        <div className="Mac-Main-Section-6">
                            <div className="Mac-Main-Text">
                                <h1 style={{ marginBottom: "94px" }}>
                                    {Dataone.name}
                                </h1>
                            </div>
                            
                        </div>

                        </div>
                    <div className='Description-Main-Data'>
                        <div className="Description-Main-Section-7-text" style={{paddingTop:"60px",paddingBottom:"30px"}}>
                            <h1>You may also like</h1>

                        </div>
                        <div className="Description-Main-Section-7-Content">
                            <Swiper 
                             breakpoints={{
                                // when window width is >= 640px
                                640: {
                                  slidesPerView: 2,
                                },
                                // when window width is >= 768px
                                768: {
                                  slidesPerView: 2, 
                                },
                                670:{
                                    slidesPerView:2.1,
                                    spaceBetween:10
                                },
                                480: {
                                    slidesPerView: 1.4,
                                  },
                                  510:{
                                    slidesPerView: 1.5,
                                  },
                                  540:{
                                    slidesPerView:1.6
                                  }
                                  ,340:{
                                    slidesPerView:"auto"
                                  },
                                  840:{
                                    slidesPerView:2.8
                                  },
                                  900:{
                                    slidesPerView:3
                                  },
                                  1000:{
                                    slidesPerView:3.1
                                  },
                                  1100:{
                                    slidesPerView:3.1
                                  },
                                  1200:{
                                    slidesPerView:3.25
                                  }
                              }}

                                navigation={true}
                                slidesPerView={3}
                                spaceBetween={20}
                                modules={[Navigation]} className="mySwiper">
                                {
                                    data.map((el) => {
                                        return (
                                            <SwiperSlide key={el.id}>
                                                <Link to={`/Description/${el.id}`}>
                                                <div className="Desc_Product_1">
                                                    <img src={el.image} alt="" style={{ height: "200px", width: "200px" }} />
                                                    <div className="text">
                                                        <p className='Last-Para'>{el.model}</p>
                                                        <h2> <Link>{el.name} </Link>
                                                        </h2>
                                                        <p> MRP {el.price} <br />(Incl. of all taxes)00</p>
                                                    </div>
                                                </div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                }


                            </Swiper>
                        </div>
                    </div>
                    <div className="Description-Footer-1">
                    <div className="Footer-Section-9">
                    <div className="Footer-Section-9-1">
                        <div className="Footer-section-para" style={{paddingTop:"15px"}}>
                            <p>* Mac, iPad, and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad, and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                           <p><span>◊◊</span> Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 24 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.</p>
                         <p><span>‡</span> Listed pricing is Maximum Retail Price (inclusive of all taxes).
                            </p>
                        <p>
                        Representative example: <br />
                        Based on purchase of ₹79900.00. Total amount payable ₹92978.00 paid over 24 months as 24 monthly payments of ₹3874.00 at an interest rate of 15% pa. Total interest paid to bank: ₹13078.00.
                        </p>
                        <p><span>§</span> No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3 or 6 month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3, 6, 9, 12, 18, 24 month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank's terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. <Link> Terms apply. </Link></p>
                        <p>Representative example: <br />
                        Based on purchase of ₹79900.00. Total amount payable ₹92978.00 paid over 24 months as 24 monthly payments of ₹3874.00 at an interest rate of 15% pa. Total interest paid to bank: ₹13078.00.</p>
                        <p>1. Apple Pencil hover works with iPad Pro 13-inch (M4), iPad Pro 12.9‑inch (6th generation), iPad Pro 11-inch (M4), iPad Pro 11‑inch (4th generation), iPad Air 13-inch (M2) and iPad Air 11-inch (M2).</p>
                        <p style={{paddingTop:"15px"}}> <span>‡</span> Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
                        <p>We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple</p>
                        </div>
                        <Footer />
                    </div>
                </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Descrioption
