import React, { useState } from 'react'
import Header from '../Component/Navbar'
import svg1 from "../assets/svg1.png"
import svg2 from "../assets/svg2.png"
import svg3 from "../assets/svg3.png"
import svg4 from "../assets/svg4.png"
import svg5 from "../assets/sv5.png"
import svg6 from "../assets/svg6.png"
import svg7 from "../assets/svg7.png"
import svg8 from "../assets/svg8.png"
import svg9 from "../assets/svg9.png"
import { Link } from 'react-router-dom'
import Video1 from "../assets/Ipad.mp4"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import ipad1 from "../assets/ipad_1.jpg"
import ipad2 from "../assets/ipad_2.jpg"
import { Accordion } from 'react-bootstrap'
import ipad3 from "../assets/ipad_3.jpg"
import ipad4 from "../assets/ipad_4.jpg"
import ipad5 from "../assets/ipad_5.jpg"
import ipad6 from "../assets/ipad_6.jpg"
import imag_12 from "../assets/image_12.png"
import ipad_icon_1 from "../assets/ipad_icon_1.png"
import ipad_icon_2 from "../assets/ipadpro13_gen7_camera__dgh2hv5gfrqu_large.png"
import ipad_icon_3 from "../assets/ipad_front_camera_landscape__dl3oc157n50m_large.png"
import ipad_icon_4 from "../assets/applepencil_vertical_gen4_gen3__d7b45g01744m_large.png"
import ipad_icon_5 from "../assets/magickeyboard_m4_ipad__ef4asgi8mvyq_large.png"
import ipad_icon_6 from "../assets/pt_ipad_air__cr381zljqdiu_large.png"
import Ipad_icon_11 from "../assets/icon_chip_m2__7lsu9mg7n2aa_large.png"
import Ipad_icon_12 from "../assets/ipadair13_gen6_camera__f3tksk5vlmq2_large.png"
import Ipad_head_3 from "../assets/pt_ipad_10th_gen__ej5p5x6yf2gm_large.png"
import Icon_31 from "../assets/icon_chip_a14__ew6phnozfs4m_large.png"
import Icon_Head_21 from "../assets/pt_ipad_mini__f3iy3qb50gia_large.png"
import Icon_Head_Icon_1 from "../assets/icon_chip_a15__dsg22feqeiuu_large.png"
import Icon_Head_12 from "../assets/ipadmini_gen6_camera__cwk7mc82wzma_large.png"
import Icon_21 from "../assets/ipad_front_camera__dan9au5hbu0y_large.png"
import icon_4_1 from "../assets/magickeyboard__bn0eizfdbgly_large.png"
import Ipad_2 from "../assets/bc_pencil__b1ze600aojyq_large.png"
import Ipad3_Headimg from "../assets/bc_keyboard__b2j4vh67cw76_large.png"

import Slider_icon_2 from"../assets/icon_apple_card__fa68csvawtei_large.png"
import Slider_image_2 from "../assets/icon_trade_in__ca5f20mux4b6_large.png"
import Slider_image_3 from "../assets/icon_graduationcap__b9071v3felma_large.png"
import Slider_image_4 from "../assets/icon_delivery__fyzranm9416y_large.png"
import Slider_image_5 from "../assets/icon_person__bayst2x5jyya_large.png"
import Sider_icon_1 from "../assets/icon_emoji_face_grinning__c13dz0261e6a_large.png"
import Accordian_1img from "../assets/ia_ipad_iphone__cycr5ovszwmu_large.jpg"
import Accordian_img_1 from "../assets/ia_ipad_mac__m9atjxkwpwyq_large.jpg"
import Accordian_img_3 from "../assets/world_mac_watch__dckn1orrpkqe_large.jpg"
import Footer from '../Component/Footer'
const Ipad = () => {
    const [Accor, setAccor] = useState(1);
    const sliderParams1 = {
      slidesPerView:3.1,
      centeredSlides: false,
      spaceBetween:10,
      loop:true,
      breakpoints: {
        340: {
          slidesPerView: 1,
          spaceBetween: 10
        },

        480:{
          slidesPerView:1.4,
          spaceBetween:10
        },
        510:{
          slidesPerView:1.5,
          spaceBetween:10
        },
        560:{
          slidesPerView:1.6,
          spaceBetween:0
        },
        610:{
          slidesPerView:1.7,
          spaceBetween:0
        },
        660:{
          slidesPerView:1.9,
          spaceBetween:0
        },
        690:{
          slidesPerView:2,
          spaceBetween:0
        },
        700:{
          slideperview:2.4,
          spaceBetween:10
        },
        730:{
          slidesPerView:1.6,
          spaceBetween:10
        },
        770:{
          slidesPerView:1.7,
          spaceBetween:10
        },
        815:{
          slidesPerView:1.8,
          spaceBetween:10
        },  840:{
          slidesPerView:1.9
        },
        880:{
          slidesPerView:2
        },
        920:{
          slidesPerView:2.1
        },
        960:{
          slidesPerView:2.17
        },
        990:{
          slidesPerView:2.2
        },
        1020:{
          slideperview:2.27
        },
        1040:{
          slidesPerView:2.3
        },
        1060:{
          slidesPerView:2.3
        },
        1080:{
          slidesPerView:2.33
        },
        1100:{
          slidesPerView:2.4
        },
        1120:{
          slidesPerView:2.43
        },
        1140:{
          slidesPerView:2.45
        },
        1160:{
          slidesPerView:2.53
        },
        1160:{
          slidesPerView:2.56
        }
        
      }
    };
    const sliderParams2 = {
      slideToClickedSlide: true,
      slidesPerView:3.1,
      centeredSlides: false,
      spaceBetween:10,
      loop:true,
      mousewheel: {
      forceToAxis: true,
       },
      breakpoints: {
        340: {
          slidesPerView: "auto",
          spaceBetween: 0
        },

        480:{
          slidesPerView:1.4,
          spaceBetween:10
        },
        500:{
          slidesPerView:1.5,
          spaceBetween:10
        },
        540:{
          slidesPerView:1.5,
          spaceBetween:10
        },
        570:{
          slidesPerView:1.6,
          spaceBetween:10
        },
        620:{
          slidesPerView:1.7,
          spaceBetween:10
        },
        670:{
          slidesPerView:1.8,
          spaceBetween:10
        },
        730:{
          slidesPerView:1.5,
          spaceBetween:10
        },
        750:{
          slidesPerView:1.6,
          spaceBetween:10
        },
        790:{
          slidesPerView:1.7,
          spaceBetween:10
        },
        1020:{
          slidesPerView:2.15
        },
        1040:{
          slidesPerView:2.19
        },
        1080:{
          slidesPerView:2.2
        },
        1100:{
          slidesPerView:2.23
        },
        1120:{
          slidesPerView:2.26
        },
        1140:{
          slidesPerView:2.32
        },
        1160:{
          slidesPerView:2.34
        },
        1180:{
          slidesPerView:2.39
        },
        1200:{
          slidesPerView:2.44
        },1220:{
          slidesPerView:2.48
        }
        ,1240:{
          slidesPerView:2.6
        },
        1260:{
          slidesPerView:2.7
        },
        1280:{
          slidesPerView:2.8
        }
      }
    };

  return (
    <div>
      <div className="IPad-Main">
        <div className="IPad-Header">
          <Header />
          <div style={{overflow:"scroll",width:"100%"}}>
          <div className="MAC-Icons">
            <div className="Mac-Icons-1">
              <img src={svg1} alt="" />
              <p className='Upper'>
                iPad Pro
              </p>
              <p className='Upper-Last'>
                New
              </p>
            </div>
            <div className="Mac-Icons-1">
              <img src={svg1} alt="" />
              <p className='Upper'>
                iPad Air
              </p>
              <p className='Upper-Last'>
                New
              </p>
            </div>
            <div className="Mac-Icons-1">
              <img src={svg2} alt="" />
              <p className='Upper'>
                iPad
              </p>
              <p className='Upper-Last'>
                New
              </p>

            </div>
            <div className="Mac-Icons-1">
              <img src={svg3} alt="" />
              <p className='Upper'>
                iPad mini

              </p>

            </div>
            <div className="Mac-Icons-1" >
              <img src={svg4} alt="" />
              <p className='Upper'>
                Compare
              </p>
            </div>
            <div className="Mac-Icons-1">
              <img src={svg5} alt="" />
              <p className='Upper'>
                Apple Pencil
              </p>
              <p className='Upper-Last'>
                New
              </p>

            </div>
            <div className="Mac-Icons-1">
              <img src={svg6} alt="" />
              <p className='Upper'>
                Keyboards
              </p>
              <p className='Upper-Last'>
                New
              </p>

            </div>
            <div className="Mac-Icons-1">
              <img src={svg7} alt="" />
              <p className='Upper'>
                Accessories
              </p>

            </div>
            <div className="Mac-Icons-1">
              <img src={svg8} alt="" />
              <p className='Upper'>
                iPadOS 18
              </p>
              <p className='Upper-Last'>
                Preview
              </p>


            </div>
            <div className="Mac-Icons-1">
              <img src={svg9

              } alt="" />
              <p className='Upper'>
                Shop iPad
              </p>

            </div>

          </div>
          </div>
          <div className="store-section-1">

            <p className='Banner'>
              Buy Mac or iPad with education savings. And now up to 30 Sep, get AirPods with Mac and Apple Pencil with iPad.<span>◊</span>
              <Link>
                Shop  iCE <i class="bi bi-justify"></i>
              </Link>{" "}
            </p>

          </div>

        </div>
        <div className="Ipad-Content">
          <div className="Mac-Main-Section-1">
            <div className='Mac-Main-Section-1-text'>
              <h1>iPad</h1>
              <p>
                Touch, draw and type <br />
                on one magical device.

              </p>
            </div>
            <div className='Mac-Main-Section-1-Content'>
              <video src={Video1} autoPlay={true} muted loop></video>
            </div>
          </div>
          <div className='Mac-Main-Section-3 content-Ipad'>
            <div className='Mac-Main-Section-3-text'>
              <h1>Get to know Mac.</h1>

            </div>
            <div className='Mac-Main-Section-3-Content'>
              <Swiper {...sliderParams1}
               pagination={{
                type: 'fraction',
              }}
                navigation={true}
                slidesPerView={1}
                spaceBetween={20}
                modules={[Navigation]} className="mySwiper">
                <SwiperSlide style={{ marginRight: "128px" }}>
                  <div className='Slider-Product-1'>
                    <img src={ipad1} alt="" />

                    <div className="text">
                      <h2><Link>Productivity </Link></h2>
                      <p className='Last-Para'>Your workplace <br />can be any place. </p>
                    </div>
                    <div className="icons">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{ marginRight: "128px" }}>
                  <div className='Slider-Product-1'>
                    <img src={ipad2} alt="" />

                    <div className="text">
                      <h2><Link>Creativity </Link></h2>
                      <p className='Last-Para'>Take your inner artist <br />out and about.   .</p>
                    </div>
                    <div className="icons">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{ marginRight: "128px" }}>
                  <div className='Slider-Product-1'>
                    <img src={ipad3} alt="" />

                    <div className=" text ">
                      <h2><Link>Learning</Link></h2>
                      <p className='Last-Para'>Your classroom <br />can be anywhere. </p>
                    </div>
                    <div className="icons">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{ marginRight: "128px" }}>
                  <div className='Slider-Product-1'>
                    <img src={ipad4} alt="" />

                    <div className="text">
                      <h2><Link>Entertainment</Link></h2>
                      <p className='Last-Para'>Kick back. Tune in. <br /> Game on. </p>
                    </div>
                    <div className="icons">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{ marginRight: "128px" }}>
                  <div className='Slider-Product-1'>
                    <img src={ipad5} alt="" />

                    <div className="text">
                      <h2><Link>Apple Pencil</Link></h2>
                      <p className='Last-Para'>Dream it up. <br /> Jot it down. </p>
                    </div>
                    <div className="icons">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide style={{ marginRight: "128px" }}>
                  <div className='Slider-Product-1'>
                    <img src={ipad6} alt="" />

                    <div className="text">
                      <h2><Link>iPadOS + Apps</Link></h2>
                      <p className='Last-Para'>Everyday superpowers. <br /> Built right in.</p>
                    </div>
                    <div className="icons">
                      <i class="bi bi-plus-lg"></i>
                    </div>
                  </div>

                </SwiperSlide>

              </Swiper>
            </div>
          </div>


          <div className='Mac-Main-Content'>
            <div className='Mac-Main-Section-3'>
              <div className='Mac-Main-Section-3-text'>
                <h1>Explore the line-up.</h1>

              </div>
              <div className='Mac-Main-Section-3-Content'>
                <Swiper {...sliderParams1}
                 pagination={{
                  type: 'fraction',
                }}
                  navigation={true}
                  slidesPerView={3}
                  spaceBetween={20}
                  modules={[Navigation]} className="mySwiper">
                  <SwiperSlide style={{ marginRight: "" }}>
                    <div className="Navs-Content-Main">
                      <div className='Navs-Content-Main-1'>
                        <img src={imag_12} alt="" className='Uper1' />
                        <div className="Navs-Content-Main-1-Text">
                          <p className='Upper-Para'>New </p>
                          <h2 className='Upper-Title'>iPad Pro</h2>
                          <p className='Border-Uper-para' style={{ paddingTop: "10px" }}>The ultimate iPad experience with the most advanced technology.</p>
                          <h3 className='Border-Uper-head'>From ₹99900.00*</h3>
                          <div className="Btns">
                            <button className='btn btn-primary'>Learn more</button>
                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                          </div>
                          <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                            33.02 cm or 28.22 cm
                          </h2>
                          <p className='Upper-Para-Border'>(13″ or 11″) Ultra Retina XDR display <span>
                            3</span>
                            <br />ProMotion technology <br />P3 wide colour <br />
                            Nano-texture display glass option <br />
                            on 1TB and 2TB models
                          </p>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_1} style={{height:"56px",width:"36px"}} alt="" />
                            <p>M4 chip</p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_2}   style={{height:"56px",width:"36px"}}  alt="" />
                            <p>12MP Wide camera <br />
                            4K video, ProRes
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_3}   style={{height:"56px",width:"42px"}}  alt="" />
                            <p>Landscape 12MP Ultra Wide front camera <br /> TrueDepth camera system
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_4}   style={{height:"56px",width:"15px"}}  alt="" />
                            <p>Supports Apple Pencil Pro <br /> Supports Apple Pencil (USB‑C)
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_5}   style={{height:"56px",width:"54px"}}  alt="" />
                            <p>Supports Magic Keyboard for iPad Pro (M4)
                            </p>
                          </div>



                        </div>
                      </div>

                    </div>

                  </SwiperSlide>
                  <SwiperSlide style={{ marginRight: "" }}>
                    <div className="Navs-Content-Main">
                      <div className='Navs-Content-Main-1'>
                        <img src={ipad_icon_6} alt=""  className='Uper2' />
                        <div className="Navs-Content-Main-1-Text">
                          <p className='Upper-Para'>New </p>
                          <h2 className='Upper-Title'> iPad Air</h2>
                          <p className='Border-Uper-para' style={{ paddingTop: "10px" }}>Serious performance in a thin and  <br />light design.</p>
                          <h3 className='Border-Uper-head'>From ₹59900.00*</h3>
                          <div className="Btns">
                            <button className='btn btn-primary'>Learn more</button>
                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                          </div>
                          <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                          32.78 cm or 27.59 cm
                          </h2>
                          <p className='Upper-Para-Border'>(13″ or 11″) Liquid Retina display <span>
                            3</span>
                           <p className='Upper-Para-Border'>  P3 wide colour </p>
                           <p className='Upper-Para-Border' style={{color:"#6e6e73"}}>When measured diagonally as a rectangle, the 13″ iPad Air is  <br /> 32.78 cm (12.9″) and the 11″ iPad Air is 27.59 cm (10.86″). Actual viewable area is less.</p>
                          </p>
                          <div className="Mac-Border-in-1">
                            <img src={Ipad_icon_11} style={{height:"56px",width:"36px"}} alt="" />
                            <p>M4 chip</p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={Ipad_icon_12}   style={{height:"56px",width:"36px"}}  alt="" />
                            <p>12MP Wide camera <br />
                            4K video, ProRes
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_3}   style={{height:"56px",width:"42px"}}  alt="" />
                            <p>Landscape 12MP Ultra Wide front camera <br /> TrueDepth camera system
                            </p>
                          </div>
                          <div className="Mac-Border-in-1" style={{marginTop:"-15px"}}>
                            <img src={ipad_icon_4} className='ipad1image'   style={{height:"56px",width:"15px"}}  alt="" />
                            <p>Supports Apple Pencil Pro <br /> Supports Apple Pencil (USB‑C)
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_5}   style={{height:"56px",width:"54px"}}  alt="" />
                            <p>Supports Magic Keyboard
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ marginRight: "" }}>
                    <div className="Navs-Content-Main">
                      <div className='Navs-Content-Main-1'>
                        <img src={Ipad_head_3} alt="" className='Uper3' />
                        <div className="Navs-Content-Main-1-Text">
                          <p className='Upper-Para'>New Price </p>
                          <h2 className='Upper-Title'> iPad</h2>
                          <p className='Border-Uper-para' style={{ paddingTop: "10px" }}>The colourful, all‑screen iPad for the things you do every day.</p>
                          <h3 className='Border-Uper-head'>From ₹34900.00*</h3>
                          <div className="Btns">
                            <button className='btn btn-primary'>Learn more</button>
                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                          </div>
                          <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                          27.69 cm

                          </h2>
                          <p className='Upper-Para-Border'>(13″ or 11″) Liquid Retina display <span>
                            3</span>
                           <p className='Upper-Para-Border'>  sRGB colour </p>
                           <p className='Upper-Para-Border' style={{color:"#6e6e73",opacity:"0"}}>When measured diagonally as a rectangle, the 13″ iPad Air is  <br /> 32.78 cm (12.9″) and the 11″ iPad Air is 27.59 cm (10.86″). Actual viewable area is less.</p>
                          </p>
                          <div className="Mac-Border-in-1">
                            <img src={Icon_31} style={{height:"56px",width:"36px"}} alt="" />
                            <p>A14 Bionic chip</p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={Ipad_icon_12}   style={{height:"56px",width:"36px"}}  alt="" />
                            <p>12MP Wide camera <br />
                            4K video
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_3}   style={{height:"56px",width:"42px"}}  alt="" />
                            <p>Landscape 12MP Ultra Wide front camera
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_4}   className='ipad1image' style={{height:"56px",width:"15px"}}  alt="" />
                            <p>Supports Apple Pencil (USB‑C) <br />Supports Apple Pencil (1st generation) <span>4</span>
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_5}   style={{height:"56px",width:"54px"}}  alt="" />
                            <p>Supports Magic Keyboard FolioM4
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                    <div className="Navs-Content-Main">
                      <div className='Navs-Content-Main-1'>
                        <img src={Icon_Head_21} alt=""  className='Uper4' />
                        <div className="Navs-Content-Main-1-Text">
                          <p className='Upper-Para' style={{opacity:"0"}}>New Price </p>
                          <h2 className='Upper-Title'> iPad mini</h2>
                          <p className='Border-Uper-para' style={{ paddingTop: "10px" }}>The full iPad experience in an <br /> ultra-portable design.</p>
                          <h3 className='Border-Uper-head'>
                          From ₹49900.00*</h3>
                          <div className="Btns">
                            <button className='btn btn-primary'>Learn more</button>
                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                          </div>
                          <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                          21.08 cm
                          </h2>
                          <p className='Upper-Para-Border'>(8.3″) Liquid Retina display3 <span>
                            3</span>
                           <p className='Upper-Para-Border'>  P3 wide colour </p>
                           <p className='Upper-Para-Border' style={{color:"#6e6e73",opacity:"0"}}>When measured diagonally as a rectangle, the 13″ iPad Air is  <br /> 32.78 cm (12.9″) and the 11″ iPad Air is 27.59 cm (10.86″). Actual viewable area is less.</p>
                          </p>
                          <div className="Mac-Border-in-1">
                            <img src={Icon_Head_Icon_1} style={{height:"56px",width:"36px"}} alt="" />
                            <p>A15 Bionic chip</p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={Icon_Head_12}   style={{height:"56px",width:"36px"}}  alt="" />
                            <p>12MP Wide camera <br />
                            4K video
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={Icon_21}   style={{height:"56px",width:"30px"}}  alt="" />
                            <p>12MP Ultra Wide front camera
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={ipad_icon_4}   style={{height:"56px",width:"15px"}}  alt="" />
                            <p>Supports Apple Pencil (2nd generation) <br />  Supports Apple Pencil (USB‑C) <span>4</span>
                            </p>
                          </div>
                          <div className="Mac-Border-in-1">
                            <img src={icon_4_1}   style={{height:"56px",width:"47px"}}  alt="" />
                            <p>Supports Bluetooth keyboards
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                </Swiper>
              </div>
            </div>
            <div className="Mac-Main-Section-7">
            <div className="Mac-Main-Text">
                <h1>
                iPad essentials.
                </h1>
            </div>
            <div style={{width:"100%",overflow:'scroll'}}>
            <div className='Mac-Main-Section-7-Content'>
                <div className='Mac-Product-1' >
                <div className='Mac-Product-1-Text'>
                  <p className='Upper-Para'>New</p>
                        <h2 style={{marginTop:"-6px"}}> Apple Pencil</h2>
                        <p>Dream it up. Jot it down.</p>
                        <Link>Learn more<i class="bi bi-chevron-right"></i></Link>
                    </div>
                    <div className="Mac-Product-1-Image">
                        <img src={Ipad_2} alt=""  className='ipad-2'/>
                    </div>
                </div>
                <div className='Mac-Product-1' >
                <div className="Mac-Product-1-Image">
                        <img src={Ipad3_Headimg} alt=""  className='ipad3' />
                    </div>
                    <div className='Mac-Product-1-Text  text-ipad-1'>
                  <p className='Upper-Para'>New</p>
                        <h2 style={{marginTop:"-6px"}}>  Keyboards for iPad</h2>
                        <p>Type it out. Take it with you</p>
                        <Link>Learn more<i class="bi bi-chevron-right"></i></Link>
                    </div>
                    
                    

                </div>
            
            </div>
            </div>
         </div>
         <div className='Mac-Main-Section-5' style={{backgroundColor:"transparent"}}>
              <div className='Mac-Main-Section-5-text' style={{paddingTop:"100px"}}>
                <h1>Why Apple is the best <br />
                place to buy iPad.</h1>
                <Link>Shop iPad <i class="bi bi-chevron-right"></i></Link>
                
            </div>
<div className='Mac-Main-Section-5-Content'>
    
            <Swiper  {...sliderParams2}
             pagination={{
          type: 'fraction',
        }}
        navigation={true}
        slidesPerView={2.7}
        spaceBetween={20}
        modules={[ Navigation]}className="mySwiper">
                   <SwiperSlide style={{marginRight:"128px"}}>
                     <div className='Slider-Product-1'>
                        <img src={Slider_icon_2} alt="" style={{height:'39px',width:"48px"}} />
                        
                        
                        <div className="text">
                            <h2><Link>Monthly payment options available. </Link></h2>
                            <p className='Last-Para'>Choose the easy way to finance <br /> with convenient monthly payment options.</p>
                        </div>
                        <div className="icons">
                        <i class="bi bi-plus-lg"></i>
                        </div>
                     </div>
                     
                   </SwiperSlide>  
                   <SwiperSlide className='Product-1-Slier' style={{marginLeft:"-20px"}}>
                     <div className='Slider-Product-1'>
                        <img src={Slider_image_2} alt="" style={{height:'39px',width:"42px"}} />
                        
                        
                        <div className="text">
                            <h2><Link>Save with <br /> Apple Trade In. </Link></h2>
                            <p className='Last-Para'>Get credit towards your next Mac <br /> when you trade in an eligible <br /> device at an Apple Store.</p>
                        </div>
                        <div className="icons">
                        <i class="bi bi-plus-lg"></i>
                        </div>
                     </div>
                     
                   </SwiperSlide>  
                   <SwiperSlide className='Product-1-Slier'>
                     <div className='Slider-Product-1'>
                        <img src={Slider_image_3} alt="" style={{height:'56px',width:"46px",marginTop:"-7px",marginBottom:"-10px"}} />
                        
                        
                        <div className="text">
                            <h2><Link>Save on a <br /> new iPad with <br /> education pricing..</Link></h2>
                            <p className='Last-Para'>Available to university students <br /> and educators.</p>
                        </div>
                        <div className="icons">
                        <i class="bi bi-plus-lg"></i>
                        </div>
                     </div>
                     
                   </SwiperSlide>  
                   <SwiperSlide className='Product-1-Slier'>
                     <div className='Slider-Product-1'>
                        <img src={Slider_image_4 } alt="" style={{height:'39px',width:"51px"}} />
                        
                        
                        <div className="text">
                            <h2><Link>Get flexible delivery <br /> and easy pickup.</Link></h2>
                            <p className='Last-Para'>Get free delivery or pickup at your <br /> Apple Store.</p>
                        </div>
                        <div className="icons">
                        <i class="bi bi-plus-lg"></i>
                        </div>
                     </div>
                     
                   </SwiperSlide>  

                   <SwiperSlide className='Product-1-Slier'>
                     <div className='Slider-Product-1'>
                        <img src={Sider_icon_1} alt="" style={{height:'56px',width:"40px"}} />
                        
                        
                        <div className="text">
                            <h2><Link>Get to know your <br /> new Mac.</Link></h2>
                            <p className='Last-Para'>Learn how to get the most out of <br /> your new Mac with a free one-on- <br />one Personal Session..</p>
                        </div>
                        <div className="icons">
                        <i class="bi bi-plus-lg"></i>
                        </div>
                     </div>
                     
                   </SwiperSlide>  
 
                  </Swiper>             
               </div>
         </div>
         <div className="Mac-Main-Section-6" style={{backgroundColor:"rgb(255,255,255)"}}>
                    <div className="Mac-Main-Text">
                        <h1>
                            Significant others.
                        </h1>
                    </div>
                    <div className='Mac-Main-Section-6-Content' style={{backgroundColor:"rgb(245,245,247)"}}>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0" onClick={() => setAccor(1)}>
                                <Accordion.Header>iPad and iPhone</Accordion.Header>
                                <Accordion.Body>
                                iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" onClick={() => setAccor(2)}>
                                <Accordion.Header>iPad and Mac</Accordion.Header>
                                <Accordion.Body>
                                iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className='Img-Accordian'>

                            <img src={Accordian_1img} alt=""   className={Accor === 1 ? "imagipad2" : "image_Accordian"} />
                            <img src={Accordian_img_1} alt="" className={Accor === 2 ? "imag2" : "image_Accordian"} />
                            <img src={Accordian_img_3} alt="" className={Accor === 3 ? "imag3" : "image_Accordian"} />

                        </div>
                    </div>
                </div>
                
          </div>

        </div>
        <div className='Mac-Main-Section-8'>
                    <div className="text-Head">
                        <h1>iPad</h1>
                    </div>
                    <div className='Text-Content'>
                        <div className="Text-Content-1" style={{ marginRight: "50px" }}>
                            <p className='Uper-Para'>Explore iPad</p>
                            <h2>Explore All iPad</h2>
                            <h2>
                            iPad Pro</h2>
                            <h2>iPad Air</h2>
                            <h2>iPad</h2>
                            <h2>iPad mini</h2>
                            <h2>Apple Pencil</h2>
                            <h2>Keyboards</h2>
                            
                            <p className='Last-Para' style={{ paddingTop: "15px" }}>Compare iPad</p>
                            <p className='Last-Para'>Why iPad</p>

                        </div>
                        <div className="Text-Content-1">
                            <p className='Uper-Para'>Shop iPad</p>

                            <p className='Last-Para' style={{ paddingTop: "5px" }}>Shop iPad</p>
                            <p className='Last-Para'>
                            iPad Accessories</p>
                            <p className='Last-Para'>Apple Trade In  </p>
                        </div>
                        <div className="Text-Content-1">
                            <p className='Uper-Para'>More from iPad</p>

                            <p className='Last-Para' style={{ paddingTop: "5px" }}>iPad Support</p>
                            <p className='Last-Para'>AppleCare+ for iPad</p>
                            <p className='Last-Para'>iPadOS 18 Preview</p>
                            <p className='Las-Para'>Apple Intelligence</p>
                            <p className='Las-Para'>Apps by Apple</p>
                            <p className='Las-Para'>Continuity</p>
                            <p className='Las-Para'>iCloud+</p>
                            <p className='Las-Para'>Mac for Business</p>
                            <p className='Las-Para'>Education</p>


                        </div>


                    </div>
                </div>
                <div className="Footer-Section-9">
                    <div className="Footer-Section-9-1">
                        <div className="Footer-section-para">
                            <p>*Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
                            <p style={{ marginTop: "-8px" }}>
                                ‡No Cost EMI is available with the purchase of an <Link> eligible product </Link> made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. <Link>Additional terms apply.</Link>
                            </p>
                            <p>Representative example:
                            </p>
                            <p>Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.</p>
                            <p>◊Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions <Link>herein.</Link>
                            </p>
                            <p>1. Software and content may be sold separately. Title availability is subject to change
                            </p>
                            <p>2. SMS requires an iPhone or iPad with iOS 8.1 or later or iPadOS. iPhone calls require an iPhone with iOS 8 or later.
                            </p>
                            <p>3. Handoff requires an iPhone or iPad with iOS 8 or later or iPadOS.</p>
                            <p>4. Mac, iPad and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its <Link> trade‑in partners</Link> reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                            <p>5. Screen size is measured diagonally. The displays on the 13″ MacBook Air and 15″ MacBook Air and the 14″ MacBook Pro and 16″ MacBook Pro have rounded corners at the top. When measured as a standard rectangular shape, the screens are 34.46 cm (13.6″), 38.91 cm (15.3″), 35.97 cm (14.2″) and 41.05 cm (16.2″) diagonally (actual viewable area is less).</p>
                            <p>6. Testing conducted by Apple in January 2024 using pre-production 15″ MacBook Air systems with Apple M3, 8‑core CPU and 10‑core GPU; and pre-production 13″ MacBook Air systems with Apple M3, 8‑core CPU and 8‑core GPU, all configured with 8GB of RAM and 256GB SSD. Testing conducted by Apple in May 2022 using pre-production 13″ MacBook Air systems with Apple M2, 8‑core CPU, 8‑core GPU, 8GB of RAM and 256GB SSD. The wireless web test measures battery life by wirelessly browsing 25 popular websites with display brightness set to 8 clicks from the bottom. The Apple TV app movie playback test measures battery life by playing back HD 1080p content with display brightness set to 8 clicks from the bottom. Battery life varies by use and configuration. See <Link>apple.com/in/batteries </Link> for more information.</p>
                            <p>7. Testing conducted by Apple in September and October 2023 using pre-production 16″ MacBook Pro systems with Apple M3 Pro, 12-core CPU, 18-core GPU, 36GB of RAM and 512GB SSD. The Apple TV app movie playback test measures battery life by playing back HD 1080p content with display brightness set to 8 clicks from the bottom. Battery life varies by use and configuration. See  <Link> apple.com/in/batteries  </Link>for more information</p>
                            <p>8. Actual diagonal screen size is 59.69 cm (23.5″).</p>
                            <p>9. Screen size is measured diagonally.</p>
                            <p>Some features may not be available in all regions or all languages.</p>
                            <p>Some features require an Apple ID, compatible hardware and compatible Internet access or cellular network; additional fees and terms may apply.</p>
                            <p>Some features require specific hardware and software. For more information, see “Feature Requirements” at <Link> support.apple.com/en-in/macos/upgrade. </Link></p>
                            <p>Lies of P © NEOWIZ. All rights reserved.</p>
                        </div>
                        <Footer />
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Ipad
