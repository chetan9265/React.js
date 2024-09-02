import React, { useEffect, useState } from 'react'
import Navbar from "../Component/Navbar"
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from "../assets/1217123_apple_icon.png"
import ILogo from "../assets/store-chat-specialist-icon-202309_AV1.jpg"
import Applelog from "../circle-apple.png"
import { Swiper, SwiperSlide } from 'swiper/react'; import SwiperCore, { Keyboard } from 'swiper';
import { FreeMode, Pagination, Navigation, Autoplay, Mousewheel, Scrollbar, A11y } from 'swiper/modules';
import Sliderimg1 from "../assets/store-card-13-mac-nav-202310.png"
import Sliderimg2 from "../assets/store-card-13-iphone-nav-202309_GEO_EMEA.png"
import Sliderimg3 from "../assets/store-card-13-ipad-nav-202405.png"
import Sliderimg4 from "../assets/store-card-13-watch-nav-202309_GEO_IN (1).png"
import Sliderimg5 from "../assets/store-card-13-airpods-nav-202209.png"
import Sliderimg6 from "../assets/store-card-13-appletv-nav-202210.png"
import Sliderimg7 from "../assets/store-card-13-homepod-nav-202301.png"
import Sliderimg8 from "../assets/store-card-13-accessories-nav-202403.png"
import Sliderimg9 from "../assets/store-card-13-airtags-nav-202108.png"
import Iphoen1 from "../assets/store-card-40-iphone-15-pro-202309.jpg"
import Ipad1 from "../assets/store-card-40-ipad-pro-202405.jpg"
import Mac from "../assets/store-card-40-bts-offer-featured-202406_GEO_IN.jpg"
import Iphone15 from "../assets/store-card-40-iphone-15-202309.jpg"
import Air from "../assets/store-card-40-ipad-air-202405.jpg"
import Ipadpencil from "../assets/store-card-40-apple-pencil-202405.png"
import StoreCard from "../assets/store-card-40-watch-s9-202309_GEO_IN.jpg"
import StoreLaptop from "../assets/store-card-40-macbook-air-202402.png"
import StoreWatch from "../assets/store-card-40-watch-ultra-202309_GEO_IN.png"
import twowatches from "../assets/store-card-40-watch-se-202403_GEO_IN.png"
import StoreMac from "../assets/store-card-40-macbook-pro-202310.png"
import Help1 from "../assets/store-card-50-specialist-help-202309.png"
import Help2 from "../assets/store-card-40-business-202209_GEO_IN.png"
import Help3 from "../assets/store-card-50-bts-todayatapple-202406.png"
import Help4 from "../assets/iphone-card-50-personal-session-202109.png"
import Help5 from "../assets/apple-support-app-202308_GEO_IN.png"
import Apple1 from "../assets/icons8-laptop-and-phone-96.png"
import Accessories1 from "../assets/store-card-40-accessories-202405.png"
import Product1 from "../assets/store-card-40-applemusic-202301.png"
import experience1 from "../assets/card-50-instigators-202407.png"
import experience2 from "../assets/store-card-50-subscriptions-202108.png"
import experience3 from "../assets/store-card-50-applecare-202405 (2).png"
import experience4 from "../assets/store-card-50-homekit-202405_GEO_IN_11zon.png"
import ProductCard from "../Component/ProductCard"
import 'swiper/css/navigation';
import Footer from '../Component/Footer';
import axios from 'axios';
// import  {  Mousewheel } from "swiper/core";
// SwiperCore.use([Keyboard]);
import storelastimg1 from "../assets/store-card-40-bts-edu-macbook-air-ipad-air-202406.png"




const Store = () => {
  const [data, setdata] = useState([])
  const [storedata, setstoredata] = useState([])
  const [show, setshow] = useState(false);
  const [ShowData, setShowData] = useState(false);
  const [medidata, setmedidata] = useState(false);

  const [Data, setData] = useState([])
  const sliderParams = {
    slidesPerView: 8,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      340: {
        slidesPerView: "auto",
        spaceBetween: 1
      },
      1000: {
        slidesPerView: 8,
        spaceBetween: 3
      }
    }
  };
  const sliderParams1 = {
    slideToClickedSlide: true,
    slidesPerView: 2.3,
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: -10
      },
      430: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      481: {
        slidesPerView: 1.4,
        spaceBetween: 20
      }
      ,
      530: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      590: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      621: {
        slidesPerView: 1.8,
        spaceBetween: 0
      },
      660: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      731: {
        slidesPerView: 1.6,
        spaceBetween: 10
      }
      , 780: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      900: {
        slidesPerView: 1.84
      },
      930:{
        slidesPerView:1.90,
        spaceBetween:10
      }
      ,
      940: {
        slidesPerView: 1.9,
        spaceBetween: 10
      },
      950: {
        slidesPerView: 1.98,
      },
      960: {
        slidesPerView: 2.01
      },
      970: {
        slidesPerView: 2.02,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 2.03,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 2.15,
        spaceBetween: 10
      },
      1020: {
        slidesPerView: 2.16
      },
      1040: {
        slidesPerView: 2.18,
        spaceBetween: 10
      },
      1040: {
        slidesPerView: 2.19,
        spaceBetween: 10
      },
      1060: {
        slidesPerView: 2.21,
        spaceBetween: 10
      },

      1100: {
        slidesPerView: 2.3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 2.43,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 2.44,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 2.49,
        spaceBetween: 10
      },1210:{
        slidesPerView:2.3
      },
      1270:{
        slidesPerView:2.36
      },
      1300:{
        slidesPerView:2.41
      }
    }
  };
  const sliderParams2 = {
    slideToClickedSlide: true,
    slidesPerView: 2.3,
    centeredSlides: false,
    mousewheel: {
      forceToAxis: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: -10
      },
      430: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },

      481: {
        slidesPerView: 1.4,
        spaceBetween: 20
      }
      ,
      530: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      590: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      621: {
        slidesPerView: 1.8,
        spaceBetween: 0
      },
      660: {
        slidesPerView: 1.9,
        spaceBetween: 10
      },
      731: {
        slidesPerView: 1.3,
        spaceBetween: 10
      }
      , 780: {
        slidesPerView: 1.4,
        spaceBetween: 10
      }
      , 820: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      840: {
        slidesPerView: 1.49,
        spaceBetween: 10
      },
      860: {
        slidesPerView: 1.50,
        spaceBetween: 10
      },
      870: {
        slidesPerView: 1.51,
        spaceBetween: 10
      },
      880: {
        slidesPerView: 1.53,
        spaceBetween: 10
      },
      890:
       {
        slidesPerView: 1.54,
        spaceBetween: 10
      },
       900: {
        slidesPerView: 1.58,
        spaceBetween: 10
      }
      ,930:{
        slidesPerView:1.60
      },960:{
        slidesPerView:1.62
      },970:{
        slidesPerView:1.67,
        spaceBetween:10
      },
      1000:{
        slidesPerView:1.77,
        spaceBetween:10
      }
      ,1040:{
        slidesPerView:1.83
      },
      1060:{
        slidesPerView:1.85
      },
      1090:{
        slidesPerView:1.87,
        spaceBetween:10
      },
      1130:{
        slidesPerView:1.91
      },
      1160:{
        slidesPerView:1.99
      },
      1190:{
        slidesPerView:2.1
      },
      1210:{
        slidesPerView:1.86
      },
      1250:{
        slidesPerView:1.9
      },
      1280:{
        slidesPerView:1.95
      },
      1300:{
        slidesPerView:2
      }
    }
  };

  const sliderParams3 = {
    slideToClickedSlide: true,
    slidesPerView: 3.1,
    spaceBetween: 30,
    mousewheel: {
      forceToAxis: true,
    },
    breakpoints: {
      340: {
        slidesPerView: "auto",
        spaceBetween: 10,

      },
      380: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },

      440: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1.3,
        spaceBetween: 10
      },
      490: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      520: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      540: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },

      560: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      590: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 1.8,
        spaceBetween: 10
      },
      680: {
        slidesPerView: 1.9,
        spaceBetween: 10
      },
      730: {
        slidesPerView: 1.8,
        spaceBetween: 10
      },
      755: {
        slidesPerView: 1.9,
        spaceBetween: 10
      },
      770: {
        slidesPerView: 1.95,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      840:{
        slidesPerView:2.15
      },
      880:{
        slidesPerView:2.27
      },
      920:{
        slidesPerView:2.4
      },
      960:{
        slidesPerView:2.49
      },
      1000:{
        slidesPerView:2.58
      },
      1040:{
        slidesPerView:2.68
      },
      1210:{
        slidesPerView:2.7
      },
      1250:{
        slidesPerView:2.74
      },
      1280:{
        slidesPerView:2.79
      },
      1300:{
        slidesPerView:2.84
      }

    }
  };
  const sliderParams4 = {
    slideToClickedSlide: true,
    slidesPerView: 3.1,
    spaceBetween: 10,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      
      481: {
        slidesPerView: 1.3,
        spaceBetween: 10
      },

      500: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      530: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      580: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      630: {
        slidesPerView: 1.8,
        spaceBetween: 10
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView:2.1
      },
      730:{
        slidesPerView:2
      },
      790:{
        slidesPerView:2.1
      },
      810:{
        slidesPerView:2.13
      },
      840:{
        slidesPerView:2.15
      },850:{
        slidesPerView:2.17
      },
      880:{
        slidesPerView:2.24
      },
      910:{
        slidesPerView:2.36
      },
      940:{
        slidesPerView:2.48
      },
      980:{
        slidesPerView:2.53
      },
      1000:{
        slidesPerView:2.59
      },
      1030:{
        slidesPerView:2.67
      },
      1060:{
        slidesPerView:2.79
      },
      1100:{
        slidesPerView:2.89
      },
      1130:{
        slidesPerView:2.98
      },1180:{
        slidesPerView:3
      },
      1200:{
        slidesPerView:3.1
      },
      1210:{
        slidesPerView:2.8
      },
      1250:{
        slidesPerView:2.9
      },
      1300:{
        slidesPerView:3
      }
    }
  };
  const sliderParams5 = {
    slideToClickedSlide: true,
    slidesPerView: 3.1,
    spaceBetween: 10,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 2.9,
        spaceBetween: 0
      },
      481: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },

      500: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      530: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      590: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      630: {
        slidesPerView: 1.8,
        spaceBetween: 10
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      760: {
        slidesPerView: 2.1,
        spaceBetween: 10
      }
      , 800: {
        slidesPerView: 2.2,
        spaceBetween: 10
      }
      , 820: {
        slidesPerView: 2.2,
        spaceBetween: 10
      },
      840:{
        slidesPerView:2.15
      },850:{
        slidesPerView:2.17
      },
      880:{
        slidesPerView:2.24
      },
      910:{
        slidesPerView:2.36
      },
      940:{
        slidesPerView:2.48
      },
      980:{
        slidesPerView:2.53
      },
      1000:{
        slidesPerView:2.59
      },
      1030:{
        slidesPerView:2.67
      },
      1060:{
        slidesPerView:2.79
      },
      1100:{
        slidesPerView:2.89
      },
      1130:{
        slidesPerView:2.98
      },1180:{
        slidesPerView:3
      },
      1200:{
        slidesPerView:3.1
      },
      1210:{
        slidesPerView:2.8
      },
      1250:{
        slidesPerView:2.9
      },
      1300:{
        slidesPerView:3
      }

    }
  }

  const sliderParams6 = {
    slideToClickedSlide: true,
    slidesPerView: 3.1,
    centeredSlides: false,
    spaceBetween: 10,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 2.9,
        spaceBetween: 0
      },
      481: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },

      500: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      530: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      590: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1.2,
      },
      630: {
        slidesPerView: 1.3,
        spaceBetween: 10
      },
      680: {
        slidesPerView: 1.3,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 1.9,
        spaceBetween: 10
      },
      730: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      780: {
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      760: {
        slidesPerView: 1.4,
        spaceBetween: 10
      }
      , 800: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      860:{
        slidesPerView: 1.57,
      },
      900:{
        slidesPerView:1.64
      },
      930:{
        slidesPerView:1.72
      },
      960:{
        slidesPerView:1.79
      }
      , 1000: {
        slidesPerView: 1.9,
        spaceBetween: 10
      },
      1040:{
        slidesPerView:2
      },
      1130:{
        slidesPerView:2.1
      },
      1180:{
        slidesPerView:2.18
      },
      1210:{
        slidesPerView:2
      },
      1250:{
        slidesPerView:2.1
      },
      1300:{
        slidesPerView:2.12
      }
    }
  }


  function SetShow() {
    setshow(!show)
  }

  function Click() {
    alert("Sorry , I Have No Data for Your Select Please Show The this Products  ")
    window.location.href = "Accesories"
  }

  function AddtoCart() {
    axios.get(" http://localhost:8000/AddtoCart").then((res) => {
      setData(res.data)
      if (res.data.length > 0) {
        setShowData(true)
      }
    }).catch((err) => {
      console.log(err)
    })
  }


  function FectchData1() {
    axios.get(" http://localhost:8000/StorePage-2").then((res) => {
      setdata(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  function FectchData() {
    axios.get(" http://localhost:8000/StorePage").then((res) => {
      setstoredata(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    FectchData()
    FectchData1()
    AddtoCart()
  }, [show])
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className='Navbar' style={{ backgroundColor: "#f5f5f7" }}>
          <div className="Nav">
            <Navbar className='Navs'  >
              <div className='Nav-Container'>
                <NavLink>
                  <img src={Logo} alt="" width={17} />
                </NavLink>
                <NavLink to="/Store">  <h2>Store</h2></NavLink>
                <NavLink>  <h2>Mac</h2></NavLink>
                <NavLink>  <h2>ipad</h2></NavLink>
                <NavLink>  <h2>iPhoone</h2></NavLink>
                <NavLink>  <h2>Watch</h2></NavLink>
                <NavLink>  <h2>AirPods</h2></NavLink>
                <NavLink>  <h2>TV & Home</h2></NavLink>
                <NavLink>  <h2>Entertainment</h2></NavLink>
                <NavLink>  <h2>Accessories</h2></NavLink>
                <NavLink>  <h2>Support</h2></NavLink>
                <NavLink>  <i class="bi bi-search"></i>
                </NavLink>
                <NavLink>  <i class="bi bi-bag"></i>
                </NavLink>
              </div>
            </Navbar>
          </div>
        </div>

        <div>
          <div className='Navbar-media' style={{ backgroundColor: "   rgba(255, 255, 255, .8);" }}>
            <div className="Nav">
              <Navbar className='Navs'  >
                <div className='Nav-Container'>
                  <NavLink>
                    <img src={Logo} alt="" width={17} />
                  </NavLink>
                  <div className='Media-Icon'>
                    <NavLink className="icon-1">  <i class="bi bi-search"></i>
                    </NavLink>
                    <NavLink className="icon-2" onClick={SetShow} >  <i class="bi bi-bag"></i> <span className={ShowData ? "Span-Data" : "Span-Data-Hide"}>{Data.length}</span>
                    </NavLink>
                    <NavLink className="icon-3" onClick={() => setmedidata(true)} >
                      <i class="bi bi-list" style={{ fontSize: "22px" }}></i>
                    </NavLink>
                  </div>
                </div>
              </Navbar>
            </div>
          </div>
          {
            show ?
              <div className="Signup">
                <div className="Signup-Bag">
                  {
                    ShowData ?
                      <div className='Cart-Main'>
                        <div className='Cart-Head'><h2>Bag</h2>
                          <Link to="/Bag">
                            <button className='btn btn-primary'>Review Bag</button></Link>
                        </div>
                        <div className={Data.length > 3 ? "Cart-Data-Main" : "Cart-Data"}>
                          {
                            Data.map((el) => {
                              return (
                                <div key={el.id} className="Bag-Container">
                                  <img src={el.image} alt="" width={64} height={64} />
                                  <h2>{el.name}</h2>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                      :
                      <div className="Non-Signup-Data">
                        <h1>Your Bag is empty</h1>
                        <span><Link to={"/Signup"}>Sign in</Link>
                          to see if you have any saved items
                        </span>
                      </div>
                  }
                  <div className="Signup-Profile" style={{ paddingTop: "10px" }}>
                    <p>My Profile</p>
                    <span><i class="bi bi-box-seam"></i>Orders</span> <br />
                    <span><i class="bi bi-bookmark"></i>Your Saves</span> <br />
                    <span><i class="bi bi-person-fill-gear"></i>Account</span> <br />
                    <span>
                      <i class="bi bi-person-circle"></i>Sign in
                    </span>
                  </div>
                </div>
              </div> : ""
          }

          {medidata ? <div className="Navbar-media-Main">
            <Link onClick={() => setmedidata(false)}><i class="bi bi-x-lg"></i></Link>
            <NavLink to="/Store">  <h2>Store</h2></NavLink>
            <NavLink to="/Accesories">  <h2>Accessories</h2></NavLink>

            <NavLink to="/Mac">  <h2>Mac</h2></NavLink>
            <NavLink to="/Ipad">  <h2>ipad</h2></NavLink>
            <NavLink onClick={Click} >  <h2>iPhone</h2></NavLink>
            <NavLink onClick={Click}>  <h2>Watch</h2></NavLink>
            <NavLink onClick={Click}>  <h2>AirPods</h2></NavLink>
            <NavLink onClick={Click}>  <h2>TV & Home</h2></NavLink>
            <NavLink onClick={Click}>  <h2>Entertainment</h2></NavLink>
            <NavLink onClick={Click}>  <h2>Support</h2></NavLink>
          </div> : ""
          }
        </div>




      </div>

      <div className="Store-sect">
        <div className="store-section-1">

          <p className='Banner'>
            Get iPhone 15 Pro from ₹5408.00/mo. for 24 months with No Cost EMI from most leading banks.
            <Link>
              Buy now <i class="bi bi-chevron-right"></i>
            </Link>{" "}
          </p>

        </div>
        <div className="Store-Section-Main-body">
          <div className="Store-Section-Main">
            <div className="Store-Section-2">
              <div className="Store-Section-text">
                <h1 className='Store-SECT-1-Head'><span style={{ color: "#1d1d1f" }}>Store</span>. The best way to buy the <br /> products you love.</h1>
                <div className="Icon-Logos">
                  <div className="I-1">
                    <div className="I-1-img"><img src={ILogo} alt="" /></div>
                    <div className="I-1-text">
                      <p>Need shopping help?</p>
                      <Link>
                        Ask a Specialist <i class="bi bi-arrow-up-right"></i> </Link>
                    </div>
                  </div>
                  <div className="I-2">
                    <div className="I-2-img"><img src={Applelog} alt="" width={26} /></div>
                    <div className="I-2-text">
                      <p>Visit an Apple Store</p>
                      <Link>
                        Find one near you <i class="bi bi-chevron-right"></i></Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="Store-Section-3">
              <Swiper
                {...sliderParams}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className='Sliderimg'>
                    <img src={Sliderimg1} alt="" />
                    <h3>Mac</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='Sliderimg'>
                    <img src={Sliderimg2} alt="" />
                    <h3>IPhone</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='Sliderimg'>
                    <img src={Sliderimg3} alt="" />
                    <h3>IPad</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='Sliderimg'>
                    <img src={Sliderimg4} alt="" />
                    <h3>Apple Watch</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='Sliderimg'>
                    <img src={Sliderimg5} alt="" />
                    <h3>AirPods</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='Sliderimg'>
                    <img src={Sliderimg9} alt="" />
                    <h3>AirTag</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='Sliderimg'>
                    <img src={Sliderimg6} alt="" />
                    <h3>Apple TV 4K</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide><div className='Sliderimg'>
                  <img src={Sliderimg7} alt="" />
                  <h3>HomePod</h3>
                </div></SwiperSlide>
                <SwiperSlide><div className='Sliderimg'>
                  <img src={Sliderimg8} alt="" />
                  <h3>Accessories</h3>
                </div></SwiperSlide>
              </Swiper>
            </div>
            <div className="Store-Section-4">
              <div className="Store-section-Text">
                <h2> <span> The latest.</span> Take a look at what’s new right now.</h2>
              </div>
              <div className="Store-Section-Content">
                <Swiper
                  {...sliderParams1}
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  loop={true}

                  modules={[Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={Iphoen1} alt="" />
                      <div className="text">
                        <p className='Head-Para'>IPHONE 15 PRO </p>
                        <h2><Link>Titanium  </Link></h2>
                        <p className='Last-Para'>From ₹5408.00/mo. for 24 mo. with  <br /> No Cost EMI  or ₹129800.00‡</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={Ipad1} alt="" />
                      <div className="text">
                        <p className='Head-Para'>IPAD PRO  </p>
                        <h2><Link>Thinpossible.    </Link></h2>
                        <p className='Last-Para'>From ₹99900.00‡</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={Mac} alt="" />
                      <div className="text">
                        <p className='Head-Para-W'>LIMITED-TIME OFFER </p>
                        <h2 className='Head-link'><Link> Save on Mac or iPad for  <br />university.   </Link></h2>
                        <p className='Last-Para-W'>
                          Plus get AirPods with Mac,◊◊◊  <br />
                          Apple Pencil with iPad, <br />
                          20% off AppleCare+,°°° and more.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={Iphone15} alt="" />
                      <div className="text">
                        <p className='Head-Para-G'>IPHONE 15  </p>
                        <h2 className='Head-link'><Link> Newphoria  </Link></h2>
                        <p className='Last-Para-W'>
                          From ₹3317.00/mo. for 24 mo. with <br /> No Cost EMI
                          or ₹79600.00‡
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={Air} alt="" />
                      <div className="text">
                        <p className='Head-Para-G'>IPAD AIR   </p>
                        <h2 className='Head-link'><Link> Fresh Air.   </Link></h2>
                        <p className='Last-Para-W'>
                          From ₹59900.00‡
                        </p>
                      </div>
                    </div>

                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={Ipadpencil} alt="" />
                      <div className="text">
                        <p className='Head-Para'>APPLE PENCIL PRO   </p>
                        <h2><Link>Engineered for <br /> limitless creativity.  </Link></h2>
                        <p className='Last-Para'> ₹11900.00</p> </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={StoreCard} alt="" />
                      <div className="text">
                        <p className='Head-Para'>APPLE WATCH SERIES 9   </p>
                        <h2><Link>Smarter. Brighter. Mightier.   </Link></h2>
                        <p className='Last-Para'>From ₹41900.00‡
                        </p> </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={StoreLaptop} alt="" />
                      <div className="text">
                        <p className='Head-Para-G'>MACBOOK AIR  </p>
                        <h2 className='Head-link'><Link> Designed to go places.  </Link></h2>
                        <p className='Last-Para-W'>From ₹99900.00‡
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={StoreWatch} alt="" />
                      <div className="text">
                        <p className='Head-Para-G'>APPLE WATCH ULTRA 2 </p>
                        <h2 className='Head-link'><Link> Next-level adventure.  </Link></h2>
                        <p className='Last-Para-W'>From ₹89900.00‡
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={StoreMac} alt="" />
                      <div className="text">
                        <p className='Head-Para-G'>MACBOOK PRO   </p>
                        <h2 className='Head-link'><Link> Mind-blowing.  <br />Head-turning.    </Link></h2>
                        <p className='Last-Para-W'>From ₹169900.00‡
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Phone'>
                      <img src={twowatches} alt="" />
                      <div className="text">
                        <p className='Head-Para-G'>APPLE WATCH SE   </p>
                        <h2 className='Head-link'><Link> A great deal to love.     </Link></h2>
                        <p className='Last-Para-W'>From ₹29900.00‡
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="Store-Section-5">
              <div className="Help-section-Text">
                <h2> <span> Help is here.</span> Whenever and however you need it.</h2>
              </div>
              <div className='Help-Section-Content '>

                <Swiper     {...sliderParams2}
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  loop={true}

                  modules={[Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                    <div className='Slider-Help-1'>
                      <img src={Help1} alt="" />
                      <div className="text">
                        <p className='Head-Para'>APPLE SPECIALIST  </p>
                        <h2><Link>Shop one on one with a Specialist online. </Link></h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Help-2'>
                      <img src={Help2} alt="" />
                      <div className="text">
                        <p className='Head-Para'>BUSINESS   </p>
                        <h2><Link>From enterprise to small business, we’ll work with you.<span>1</span></Link></h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Help-3'>
                      <img src={Help3} alt="" />
                      <div className="text">
                        <p className='Head-Para'>TODAY AT APPLE  </p>
                        <h2><Link>Gear up for university.   </Link></h2>
                        <p className='Last-Para'>Go back to school with Mac and iPad. Join <br /> free sessions at the Apple Store.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Help-4'>
                      <img src={Help4} alt="" />
                      <div className="text">

                        <h2><Link>Get help setting up your new <br /> device in a free Online Personal Session.  </Link></h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Help-5'>
                      <img src={Help5} alt="" />
                      <div className="text">
                        <p className='Head-Para'>WATCH AND LEARN </p>
                        <h2><Link>Need support? Our teams  <br />are here for you.</Link></h2>
                      </div>
                      <div className="Apple-Help">
                        <span>
                          Get a quick overview from Pritesh on the Apple Support <br /> App.
                          <p>
                            <Link to="/Apple-Support-App">
                              <i class="bi bi-play-fill"></i></Link>
                          </p>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="Store-Section-6">
              <div className="Apple-section-Text">
                <h2> <span> The Apple Store difference.</span> Even more reasons to shop with us. </h2>
              </div>
              <div className='Apple-Section-Content '>

                <Swiper  {...sliderParams3}
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}

                  modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <div className='Slider-Apple-1'>
                      <div className="Slider-Apple">
                        <img src={Apple1} alt="" />

                      </div>
                      <div className="text">
                        <h2><Link><span>Exchange your <br />smartphone,</span>get ₹16000.00 – <br />₹61045.00 in credit <br /> towards a new one.*
                        </Link></h2>

                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Apple-2'>
                      <i class="bi bi-apple"></i>
                      <div className="text">
                        <h2><Link>Customise your Mac.
                        </Link></h2>

                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Apple-3'>
                      <i class="bi bi-emoji-smile"></i>
                      <div className="text">
                        <h2><Link><span>Make them yours. </span>
                          Engrave a mix of emoji, names and numbers for free.
                        </Link></h2>

                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Apple-4'>
                      <i class="bi bi-credit-card"></i>
                      <div className="text">
                        <h2><Link><span>Flexible ways to pay.</span> Plus No Cost EMI.<span className='Sigmbol'>§</span>
                        </Link></h2>

                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Apple-4 apple-4' >
                      <i class="bi bi-truck"></i>
                      <div className="text">
                        <h2><Link><span>Enjoy free delivery, or easy pickup.</span>  from an Apple Store.
                        </Link></h2>

                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-Apple-1  apple-1'>
                      <div className="Slider-Apple">
                        <img src={Apple1} alt="" />
                      </div>
                      <div className="text">
                        <h2><Link><span>Trade in your eligible Mac, Apple Watch or iPad for instant credit.*<br />smartphone,</span> In-store only.
                        </Link></h2>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>

            <div className="Store-Section-7">
              <div className="Accessories-section-Text">
                <h2> <span> Accessories.</span>Essentials that pair perfectly with your favourite devices. </h2>
              </div>
              <div className='Accessories-Section-Content '>

                <Swiper {...sliderParams4}
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper">
                  <SwiperSlide className='Margin-Store'  >
                    <div className='Slider-Accessories-1 '  >
                      <img src={Accessories1} alt="" />

                      <div className="text">
                        <h2><Link>Titanium  </Link></h2>
                        <p className='Last-Para'>From ₹5408.00/mo. for 24 mo. with  <br /> No Cost EMI  or ₹129800.00‡</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {

                    storedata.map((el) => (
                      <SwiperSlide key={el.id} >
                        <div key={el.id}>
                          <div className='Store-Section-Data' key={el.id}>
                            <div className="Store-Section-Card" key={el.id}  >
                              <img src={el.image_url} alt="" />
                              <div className="Text">
                                <p className='Head-Para'>
                                  NEW
                                </p>
                                <h2>
                                  {el.name}
                                </h2>
                                <p className='Last-para'>
                                  MRP {el.price} (Incl. of all taxes)
                                </p>
                              </div>
                            </div>

                          </div>
                        </div></SwiperSlide>

                    ))

                  }

                </Swiper>
              </div>
            </div>
            <div className="Store-Section-8">
              <div className="Product-section-Text">
                <h2> <span> Loud and clear..</span>Unparalleled choices for rich, high-quality sound. </h2>
              </div>
              <div className='Product-Section-Content '>

                <Swiper
                  {...sliderParams5}
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  slidesPerView={3.2}
                  spaceBetween={20}
                  modules={[Navigation]} className="mySwiper">
                  <SwiperSlide style={{ marginRight: "128px" }}>
                    <div className='Slider-Product-1'>
                      <img src={Product1} alt="" />

                      <div className="text">
                        <h2><Link>Get 3 months of  <br /> Apple Music free.    </Link></h2>
                        <p className='Last-Para'>Included with the purchase of selected <br /> Apple devices.⁺</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {
                    data.map((el) => (
                      <SwiperSlide >
                        <div key={el.id}>
                          <div className='Store-Section-Data' key={el.id}>
                            <div className="Store-Section-Card" key={el.id}  >
                              <img src={el.image_url} alt="" />
                              <div className="Text">
                                <p className='Head-Para'>
                                  {el.model}
                                </p>
                                <h2>
                                  {el.name}
                                </h2>
                                <p className='Last-para'>
                                  MRP {el.price} (Incl. of all taxes)
                                </p>
                              </div>
                            </div>

                          </div>
                        </div></SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>

            <div className="Store-Section-9">
              <div className="experience-section-Text">
                <h2> <span> The Apple experience.</span>Do even more with Apple products and services. </h2>
              </div>
              <div className='experience-Section-Content '>

                <Swiper
                  {...sliderParams6} pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  slidesPerView={2.1}
                  spaceBetween={20}
                  modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <div className='Slider-experience-1'>
                      <img src={experience1} alt="" />

                      <div className="text">
                        <p className='Head-Para'>APPLE TV+ </p>
                        <h2><Link>Watch new Apple Originals every month.°  </Link></h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-experience-2'>
                      <img src={experience2} alt="" />

                      <div className="text">
                        <h2><Link>Four Apple services. One easy subscription.   </Link></h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-experience-3'>
                      <img src={experience3} alt="" />

                      <div className="text">
                        <h2><Link>We’ve got you covered.    </Link></h2>
                        <p className='Last-Para'>AppleCare+ now comes with unlimited <br /> repairs  for accidental damage protection.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='Slider-experience-4'>
                      <img src={experience4} alt="" />

                      <div className="text">
                        <p className='Head-Para'>HOME</p>
                        <h2><Link>Watch new Apple Originals every month. </Link></h2>

                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>


            <div className="Store-Section-10">
              <div className="Product-section-Text">
                <h2> <span> Special stores.</span>Exclusive savings for students and educators. </h2>
              </div>
              <div className='Product-Section-Content '>

                <Swiper pagination={{
                  type: 'fraction',
                }}
                  navigation={true}
                  centeredSlides={true}
                  modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <div className='Slider-Product-1'>
                      <img src={storelastimg1} alt="" />

                      <div className="text">
                        <p className='Head-Para'>EDUCATION</p>
                        <h2><Link>Buy a new Mac or iPad with <br />education savings.   </Link></h2>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="Store-Section-11">
              <div className="Store-Section-11-text">
                <h2>Quick Links</h2>
                <div className="BUTTONS">
                  <button className='btn btn-outline-dark'>Order Status</button>
                  <button className='btn btn-outline-dark'>Shopping Help</button>
                  <button className='btn btn-outline-dark'>Your Saves</button>
                </div>
              </div>
              <div className="Store-Section-Content">
                <div className="Footer-section">
                  <div className="Footer-section1">
                    <div className="Footer-section-para">
                      <p>◊◊◊ Qualified Purchasers can receive Promotion Savings when they purchase an Eligible Product with Promotion Product at a Qualifying Location. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. Subject to terms and conditions <Link>here</Link>
                      </p>
                      <p>°°° The promotional Apple Education Pricing on AppleCare+ is available for eligible products only when the eligible product and AppleCare+ are purchased directly from an Apple Store or concurrently from the online Apple Store for Education during the promotional period and cannot be combined with non-promotional Apple Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible for this promotional rate.

                      </p>
                      <p>Apple Education Pricing is available to current and newly accepted university students and their parents, as well as teachers and staff at all levels. Quantity limits apply.
                        During the promotional period only and cannot be combined with non-promotional Apple Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible for this promotional rate.</p>
                      <p>
                        Apple Education Pricing is available to current and newly accepted university students and their parents, as well as teachers and staff at all levels. Quantity limits apply.
                      </p>
                      <p>  <span>◊◊</span>
                        Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 24 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.
                      </p>

                      <p> Representative example: <br />
                        Based on purchase of ₹79900.00. Total amount payable ₹92978.00 paid over 24 months as 24 monthly payments of ₹3874.00 at an interest rate of 15% pa. Total interest paid to bank: ₹13078.00.
                      </p>
                      <p><span>§</span>  No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3 or 6 month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3, 6, 9, 12, 18, 24 month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank's terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. </p>
                      <p>Representative examples: <br />

                        Based on a 6 month tenure. ₹79600.00 total cost includes 15% pa and No Cost EMI savings of ₹3370.00, paid over 6 months as 6 monthly payments of ₹13267.00.
                      </p>
                      <p>* Mac, iPad, and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad, and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                      <p>° Subscription required for Apple TV+.</p>
                      <p>1. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.</p>
                      <p>⁺ New subscribers only. ₹99/month after trial. Offer is available for new Apple Music subscribers with a new eligible device for a limited time only. Offer redemption for eligible audio devices requires connecting or pairing to an Apple device running the latest iOS or iPadOS. Offer redemption for Apple Watch requires connecting or pairing to an iPhone running the latest iOS. Offer good for three months after eligible device activation. Only one offer per Apple ID, regardless of the number of eligible devices you purchase. Plan automatically renews until cancelled. Restrictions and other </p>
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

export default Store
