import React, { useEffect, useState } from 'react'
import Header from '../Component/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { TimedImage } from 'react-timed-image';
import HeadSlider_1 from "../assets/aalp-magsafe-header-01-202403.png"
import HeadSlider_2 from "../assets/aalp-magsafe-header-02-202403.png"
import HeadSlider_3 from "../assets/aalp-magsafe-header-03-202403.png"
import HeadSlider_4 from "../assets/aalp-magsafe-header-04-202403.png"
import HeadSlider_6 from "../assets/aalp-magsafe-header-06-202403.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import HeadSlider_5 from "../assets/aalp-magsafe-header-05-202403.png"
import HeadSlider_7 from "../assets/aalp-magsafe-header-07-202403.png"
import HeadSlider_8 from "../assets/aalp-magsafe-header-08-202403.png"
import HeadSlider_9 from "../assets/aalp-magsafe-header-09-202403.png"
import icon_1 from "../assets/icon-product-mac.png"
import icon_2 from "../assets/icon-product-ipad.png"
import Icon3 from "../assets/icon-product-iphone.png"
import icon_4 from '../assets/icon-product-watch.png'
import icon_5 from "../assets/icon-product-tv.png"
import Tabs_icon_1 from "../assets/icon-category-new-arrivals.png"
import Tabs_icon_2 from "../assets/icon-category-cases-protection.png"
import Tabs_icon_3 from "../assets/icon-category-charging-essentials.png"
import Tabs_icon_4 from "../assets/icon-category-magsafe.png"
import Tabs_icon_5 from "../assets/icon-category-audio-music.png"
import axios from 'axios';
import icon_footer_1 from "../assets/icon-shipping-grey-2017.png"
import icon_footer_2 from "../assets/icon-financing-grey-2017_GEO_IN.png"
import icon_footer_3 from "../assets/icon-music-2021.png"
import Footer from '../Component/Footer';

const Accesories = () => {
    const [toggle, settoggle] = useState(1);
    const [Accesdata1, setAccesdata1 ] = useState([]);
    const [Accesdata, setAccesdata ] = useState([]);
    const [Accesdata4,setAccesdata4]=useState([]);
    const [Accesdata5,setAccesdata5]=useState([]);
      
    
    const [Accesdata6,setAccesdata6]=useState([]);
    const [search,setsearch]=useState()
    
    
    const [data, setdata] = useState([]);
    const temp = [HeadSlider_1, HeadSlider_2, HeadSlider_3,
        HeadSlider_4, HeadSlider_5, HeadSlider_6, HeadSlider_7, HeadSlider_8, HeadSlider_9]
    const [counter, setCounter] = useState(0);
    function FectchData() {
        axios.get("http://localhost:8000/Alldata",{
            params:{
                q:search
            }
        }).then((res) => {
                  res.data.map((el)=>{

                    if(el.id==="AcesoriesProduct"){
                          setdata(el.AcesoriesProduct)
                    }
                    if(el.id==="product1"){
                        setAccesdata6(el.product1)
                  }
                  if(el.id==="Accessoriesdata3"){
                    setAccesdata1(el.Accessoriesdata3)
                  }
                  if(el.id==="AccessoriesProduct2"){
                    setAccesdata(el.AccessoriesProduct2)
                    
                     } if(el.id==="Accesories4"){
                       setAccesdata4(el.Accesories4)
                     }
                     if(el.id==="product"){
                       setAccesdata5(el.product)
                    }
                  }
                )
        }).catch((err) => {
            console.log(err)
        })
    }
    const sliderParams1 = {
        slideToClickedSlide: true,
        slidesPerView:3.1,
        centeredSlides: true,
        spaceBetween:10,
        loop:true,
        mousewheel: {
        forceToAxis: true,
         },
        breakpoints: {
          340: {
            slidesPerView: "auto",
            spaceBetween: 10
          },

          731:{
            slidesPerView:1.8,
            spaceBetween:10
          },
          750:{
            slidesPerView:1.9,
            spaceBetween:10
          },
          800:{
            slidesPerView:2.1,
            spaceBetween:10
          },
          840:{
            slidesPerView:2
          },
          880:{
            slidesPerView:2.18
          },
          910:{
            slidesPerView:2.2
          },
          970:{
            slidesPerView:2.26
          },
          1000:{
            slidesPerView:2.4,
            spaceBetween:10
            },
            1040:{
                slidesPerView:2.45
            },
            1060:{
                slidesPerView:2.5
            },
            1100:{
                slidesPerView:2.6
            },
            1160:{
                slidesPerView:2.7
            },
            1190:{
                slidesPerView:2.8
            }
        }
      };

      useEffect(()=>{
        FectchData();
      },[search])

    useEffect(() => {
        setTimeout(() => {
            counter === 8 ? setCounter(0) : setCounter(counter + 1)
        }, 1700)
    }, [counter])

    return (
        <div>
            <div className="Accesories-Main-Section">
                <div className="Accesories-Main">
                    <Header />
                     <div className="Accesories-Main-Section-Cont">
                        <div className="Accories-Main-Section-1" style={{ backgroundColor: "#f5f5f7" }}>
                            <div className='Accories Main-Section-1-text'>
                                <h2>Mix.Match <br /> MagSafe.
                                </h2>
                                <p>Snap on a case,wallet or<br />wireless charger.</p>
                                <Link>Shop MagSafe
                                    <i class="bi bi-chevron-right"></i>
                                </Link>
                            </div>
                            <div className='Accories-Main-Section-1-Content'>
                                <img src={temp[counter]} alt=""  className='imgmediaaccs'/>


                            </div>
                        </div>
                    </div> 
                </div>
                 <div className="Accesories-Main-Content-1">
                    <div className='Accesories-Main-Content-1-text'>
                        <h2>Find the accessories you’re looking for.</h2>
                        <div style={{position:"relative"}}>
                        <i class="bi bi-search"></i>
                        <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Search accessories' style={{ textIndent: "47px" }} />
                        </div>
                    </div>

                    <div className='Accesories-Main-Content-1-content'>
                        <div className='Accesories-Main-Content-1'>
                            <div className='Nav-Tabs'>
                                <NavLink className={toggle === 1 ? "A-link" : ""}
                                    onClick={() => settoggle(1)}
                                >Browse by Product
                                </NavLink>
                                <NavLink className={toggle === 2 ? "A-link-1" : ""} onClick={() => settoggle(2)} >Browse by Category</NavLink>
                            </div>
                            <div className="nav-Tabs-Acces">
                                <div className={toggle === 1 ? "Nav-tabs-content-1" : "Navs_hide"}>
                                    <div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={icon_1} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>

                                        <div className='nav-tabs-text'><Link>Mac</Link></div>

                                    </div>
                                    <div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={icon_2} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>
                                        <div className='nav-tabs-text'>
                                            <Link>iPad</Link>

                                        </div>

                                    </div><div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={Icon3} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>

                                        <div className='nav-tabs-text'><Link>iPhone</Link></div>

                                    </div><div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={icon_4} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>
                                        <div className='nav-tabs-text'>
                                            <Link>Watch</Link>
                                        </div>

                                    </div><div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={icon_5} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>
                                        <div className='nav-tabs-text'>
                                            <Link>TV & Home</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={toggle === 2 ? "Nav-tabs-content-1" : "Navs_hide"}>
                                    <div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={Tabs_icon_1} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>

                                        <div className='nav-tabs-text' >
                                            <Link>New Arrivals</Link>
                                        </div>

                                    </div>
                                    <div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={Tabs_icon_2} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>
                                        <div className='nav-tabs-text' style={{ width: "160px" }}> <Link>Cases & Protection</Link>  </div>

                                    </div><div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={Tabs_icon_3} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>

                                        <div className='nav-tabs-text' style={{ width: "160px" }}><Link>Charging Essentials</Link></div>

                                    </div><div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={Tabs_icon_4} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>
                                        <div className='nav-tabs-text' style={{ width: "160px" }}>
                                            <Link>MagSafe</Link>
                                        </div>

                                    </div><div className="Nav-Tabs-1">
                                        <div className="nav-tabs-img">
                                            <img src={Tabs_icon_5} alt="" style={{ width: "75px", height: "75px" }} />
                                        </div>
                                        <div className='nav-tabs-text' style={{ width: "160px" }}>
                                            <Link>Headphones &<br />Speakers</Link>
                                        </div>
                                    </div>
                                    <Link className='Link-show'>Show more <i class="bi bi-chevron-down"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className='Accesories-Main-Content-2'>
                            <div className='Accesories-Main-Text-2'>
                                <h1>Featured iPhone Accessories</h1>
                            </div>
                            <div className='Accesories-Main-Content-2-IN'>
                                <Swiper  {...sliderParams1}
                                 pagination={{
                                    type: 'fraction',
                                }}
                                    navigation={true}
                                    slidesPerView={2.7}
                                    spaceBetween={20}
                                    modules={[Navigation]} className="mySwiper">
                                    {
                                        data.map((el) => {
                                            return (
                                                <SwiperSlide key={el.id}>
                                                    <Link to={`/Description/${el.id}`}>
                                                    <div className='Slider-Product-1'>
                                                        <img src={el.image} alt=""  className='Data-1img'  />


                                                        <div className="text">
                                                            <p className='Last-para'>New</p>
                                                            <h2><Link>{el.name} </Link></h2>
                                                            <p className='Last-Para-in'>
                                                                {el.price} (Incl. of all taxes)</p>
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
                        <div className='Accesories-Main-Content-2'>
                            <div className='Accesories-Main-Text-2'>
                                <h1>Featured iPhone Accessories</h1>
                            </div>
                            <div className='Accesories-Main-Content-2-IN'>
                                <Swiper {...sliderParams1}
                                 pagination={{
                                    type: 'fraction',
                                }}
                                    navigation={true}
                                    slidesPerView={2.7}
                                    spaceBetween={20}
                                    modules={[Navigation]} className="mySwiper">
                                    {
                                        Accesdata.map((el) => {
                                            return (
                                                
                                                <SwiperSlide key={el.id}>
                                                    <Link to={`/Description/${el.id}`}>
                                                    <div className='Slider-Product-1'>
                                                        <img src={el.image} alt="" style={{ height: "291px", width: "266px" }} />


                                                        <div className="text">
                                                            <p className='Last-para'>New</p>
                                                            <h2><Link>{el.name} </Link></h2>
                                                            <p className='Last-Para-in'>
                                                                {el.price} (Incl. of all taxes)</p>
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
                        <div className='Accesories-Main-Content-2'>
                            <div className='Accesories-Main-Text-2'>
                                <h1>Apple Watch Straps</h1>
                            </div>
                            <div className='Accesories-Main-Content-2-IN'>
                                <Swiper  {...sliderParams1}
                                pagination={{
                                    type: 'fraction',
                                }}
                                    navigation={true}
                                    slidesPerView={2.7}
                                    spaceBetween={20}
                                    modules={[Navigation]} className="mySwiper">
                                    {
                                        Accesdata1.map((el) => {
                                            return (
                                                
                                                <SwiperSlide key={el.id}>
                                                    <Link to={`/Description/${el.id}`}>
                                                    <div className='Slider-Product-1'>
                                                        <img src={el.image} alt="" style={{ height: "291px", width: "266px" }} />


                                                        <div className="text">
                                                            <p className='Last-para'>{el.model}</p>
                                                            <h2 className='h2-acces'><Link>{el.name} </Link></h2>
                                                            <p className='Last-Para-in'>
                                                                {el.price} (Incl. of all taxes)</p>
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
                        <div className='Accesories-Main-Content-2'>
                            <div className='Accesories-Main-Text-2'>
                                <h1>Sound Essentials</h1>
                            </div>
                            <div className='Accesories-Main-Content-2-IN'>
                                <Swiper  {...sliderParams1}
                                 pagination={{
                                    type: 'fraction',
                                }}
                                    navigation={true}
                                    slidesPerView={2.7}
                                    spaceBetween={20}
                                    modules={[Navigation]} className="mySwiper">
                                    {
                                        Accesdata4.map((el) => {
                                            return (
                                                
                                                <SwiperSlide key={el.id}>
                                                    <Link to={`/Description/${el.id}`}>
                                                    <div className='Slider-Product-1'>
                                                        <img src={el.image} alt="" style={{ height: "291px", width: "266px" }} />


                                                        <div className="text">
                                                            <p className='Last-para'>{el.model}</p>
                                                            <h2 ><Link>{el.name} </Link></h2>
                                                            <p className='Last-Para-in'>
                                                                {el.price} (Incl. of all taxes)</p>
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
                        <div className='Accesories-Main-Content-2'>
                            <div className='Accesories-Main-Text-2'>
                                <h1>Featured Mac Accessories</h1>
                            </div>
                            <div className='Accesories-Main-Content-2-IN'>
                                <Swiper {...sliderParams1}
                                 pagination={{
                                    type: 'fraction',
                                }}
                                    navigation={true}
                                    slidesPerView={2.7}
                                    spaceBetween={20}
                                    modules={[Navigation]} className="mySwiper">
                                    {
                                        Accesdata5.map((el) => {
                                            return (
                                                <SwiperSlide key={el.id}>
                                                    <Link to={`/Description/${el.id}`}>
                                                    <div className='Slider-Product-1'>
                                                        <img src={el.image} alt="" style={{ height: "291px", width: "266px" }} />


                                                        <div className="text">
                                                            <p className='Last-para'>{el.model}</p>
                                                            <h2 ><Link>{el.name} </Link></h2>
                                                            <p className='Last-Para-in'>
                                                                {el.price} (Incl. of all taxes)</p>
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
                        <div className='Accesories-Main-Content-2'>
                            <div className='Accesories-Main-Text-2'>
                                <h1>AirTag</h1>
                            </div>
                            <div className='Accesories-Main-Content-2-IN'>
                                <Swiper {...sliderParams1}
                                 pagination={{
                                    type: 'fraction',
                                }}
                                    navigation={true}
                                    slidesPerView={2.7}
                                    spaceBetween={20}
                                    modules={[Navigation]} className="mySwiper">
                                    {
                                        Accesdata6.map((el) => {
                                            return (
                                                <SwiperSlide key={el.id}>
                                                    <Link to={`/Description/${el.id}`}>
                                                    <div className='Slider-Product-1'>
                                                        <img src={el.image} alt="" style={{ height: "291px", width: "266px" }} />


                                                        <div className="text">
                                                            <p className='Last-para' style={{height:"55px"}}>{el.model}</p>
                                                            <h2   ><Link>{el.name} </Link></h2>
                                                            <p className='Last-Para-in'>
                                                                {el.price} (Incl. of all taxes)</p>
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
                        <div className='Accesories-Main-Content-3'>
                            <div className='Accesories-Main-Content-Footer'>
                                <div className='Accesories-Main-Content-Footer-1'>
                                              <div className='Accesories-Main-Content-Footer-img-1'>
                                                <img src={icon_footer_1} alt="" style={{width:"44px",height:"56px"}} />
                                              </div>
                                              <h3>Free delivery and pickup</h3>
                                              <p>Get free delivery or pick up  at <br /> your Apple Store.</p>
                                              <Link>Learn more <i class="bi bi-chevron-right"></i></Link>
                                </div>
                                <div className='Accesories-Main-Content-Footer-1'>
                                              <div className='Accesories-Main-Content-Footer-img-1'>
                                                <img src={icon_footer_2} alt="" style={{width:"40px",height:"56px"}} />
                                              </div>
                                              <h3>Ways to Buy</h3>
                                              <p>Buy the way that's right for you.</p>
                                              <Link>Learn more <i class="bi bi-chevron-right"></i></Link>
                                </div>
                                <div className='Accesories-Main-Content-Footer-1'>
                                              <div className='Accesories-Main-Content-Footer-img-1'>
                                                <img src={icon_footer_3} alt="" style={{width:"44px",height:"56px"}} />
                                              </div>
                                              <h3>Enjoy Apple Music on us</h3>
                                              <p>Get 3 months free with <br /> selected Beats products.*</p>
                                              <Link>Check eligibility <i class="bi bi-chevron-right"></i></Link>
                                </div>
                            </div>
                            <div className='Accesories-Main-Content-Footer-Para'>
                            <div className="Footer-Section-9">
                    <div className="Footer-Section-9-1">
                        <div className="Footer-section-para">
                            <p>Certain products are only available at selected resellers.</p>
                            <p style={{ marginTop: "-8px" }}>
                            * New subscribers only. ₹99.00/month after trial. Offer is available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer is valid for 3 months after eligible device pairing. No audio product purchase is necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other <Link> terms </Link> apply</p>
                            <p><span>‡</span> Listed pricing is Maximum Retail Price (inclusive of all taxes).
                            </p>
                            <p>We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.</p>
                        </div>
                        <Footer />
                    </div>
                </div>
                            </div>
                        </div>
                    </div>


                </div> 
            </div>

        </div>
    )
}

export default Accesories
