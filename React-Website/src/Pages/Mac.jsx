import React, { useState } from 'react'
import Header from '../Component/Navbar'
import I1 from "../assets/macbookair_light__dfypt7o3xfgy_large.png"
import I2 from "../assets/macbook_pro_light__bvnmtmeikj1e_large (1).png"
import I3 from "../assets/imac_light__cx5ex9nbqxme_large.png"
import I4 from "../assets/mac_mini_light__e7ojhup2ezau_large.png"
import I5 from "../assets/mac_studio_light__fcr3455qk0i2_large.png"
import I6 from "../assets/mac_pro_light__bly2b0ua4seq_large.png"
import I7 from "../assets/mac_compare_light__capy8s4wrbhy_large.png"
import I8 from "../assets/mac_accessories_light__esnwbnk4bxqq_large.png"
import I9 from "../assets/displays_light__d67yrnk0qsa6_large.png"
import I10 from "../assets/mac_os_light__6mb5pqhztcie_large.png"
import I11 from "../assets/mac_shop_light__f0m72gc7jguq_large.png"
import I12 from "../assets/mac_accessories_light__esnwbnk4bxqq_large.png"
import { Link } from 'react-router-dom'
import Section1 from "../assets/hero__ebxx5f9ked8i_large_2x.jpg"
import Video1 from "../assets/large.mp4"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import Nav from 'react-bootstrap/Nav';
import MacSlider1 from "../assets/Mac_slider_1.jpg"
import MacSlider2 from "../assets/Mac_slider_2.jpg"
import MacSlider3 from "../assets/Mac_slider_3.jpg"
import MacSlider4 from "../assets/Mac_slider_4.jpg"
import MacSlider5 from "../assets/Mac_slider_5.jpg"
import MacSlider6 from "../assets/Mac_slider_6.jpg"
import MacSlider7 from "../assets/Mac_slider_7.jpg"
import icon1 from "../assets/Mac_Icon-2.png"
import tabs1 from "../assets/TABS_NAV-1.png"
import tabs2 from "../assets/TABS_NAV_2.png"
import tabs2img1 from "../assets/Tabs_2_Nav_1.png"
import tabs2img3 from "../assets/Tabs_2_Nav_3.png"
import tabs2img2 from "../assets/TABS-1.png"
import tabs2img4 from "../assets/Tabs_2_Nav_4.png"
import tab1icon from "../assets/Navs_Icon_1.png"
import tab2icon3 from "../assets/product_tile_icon_m3__geq4mv9q8qeu_large.png"
import tab2icon4 from "../assets/product_tile_icon_m2_pro__c5ftjeskmwuq_large.png"
import tab2icon5 from "../assets/product_tile_icon_m2_ultra__4mmsok50gvmu_large.png"
import tab2icon6 from "../assets/product_tile_studio_display__c0gbtkgtsx0m_large.png"
import Product_title_icon_1 from "../assets/Product_title_icon_1.png"
import product_1icon_2 from "../assets/product_1icon_2.png"
import product_image_1 from "../assets/product_tile_pro_display__duklzyfwl92e_large.png"

import Slider_icon_2 from "../assets/icon_apple_card__fa68csvawtei_large.png"
import Slider_image_2 from "../assets/icon_trade_in__ca5f20mux4b6_large.png"
import Slider_image_3 from "../assets/icon_customize__b6w4i5ax89py_large.png"
import Slider_image_4 from "../assets/icon_delivery__fyzranm9416y_large.png"
import Slider_image_5 from "../assets/icon_person__bayst2x5jyya_large.png"
import { Accordion } from 'react-bootstrap'
import Accordian_1img from "../assets/world_mac_iphone__mr1xfuchl56e_large.jpg"
import Accordian_img_1 from "../assets/world_mac_ipad__d9mjiijkul0m_large.jpg"
import Accordian_img_3 from "../assets/world_mac_watch__dckn1orrpkqe_large.jpg"
import Mac_Product_1 from "../assets/essentials_accessories__dglhsic54owi_large.jpg"
import Mac_Product_2 from "../assets/essentials_display__bk3i351qm0c2_large.jpg"
import Footer from '../Component/Footer'
const Mac = () => {
    const [toggle, settoggle] = useState(1)

    const [Accor, setAccor] = useState(1)
  const sliderParams1 = {
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
        slidesPerView: 'auto',
        spaceBetween: 20
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
      630:{
        slidesPerView:1.8,
        spaceBetween:10
      },
      670:{
        slidesPerView:1.9,  
        spaceBetween:10
      },
      700:{
        slidesPerView:2,
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
      800:{
        slidesPerView:1.8,
        spaceBetween:10
      },
      840:{
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
        slidesPerView:2.25
      },
      1040:{
        slidesPerView:2.29
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
        slidesPerView:2.44
      },
      1140:{
        slidesPerView:2.47
      },
      1160:{
        slidesPerView:2.57
      },
      1160:{
        slidesPerView:2.61
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
        slidesPerView: 'auto',
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
      840:{
        slidesPerView:2
      },
      940:{
        slidesPerView:2.3
      } ,
      1040:{
        slidesPerView:2.4
      },

    }
  };
  const sliderParams3 = {
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
        slidesPerView: 1.2,
        spaceBetween: 10
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
        slidesPerView:1.6,
        spaceBetween:10
      },
      570:{
        slidesPerView:1.7,
        spaceBetween:10
      },
      730:{
        slidesPerView:1.5,
        spaceBetween:10
      },
      750:{
        slidesPerView:1.6,
        spaceBetween:10
      } ,
      790:{
        slidesPerView:1.7,
        spaceBetween:10
      },
      840:{
        slidesPerView:1.8
      },
      860:{
        slidesPerView:1.85
      },
      880:{
        slidesPerView:1.9
      },
      920:{
        slidesPerView:2
      },
      970:{
        slidesPerView:2.1
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
            <div className="Mac-main">
                <Header />
                <div className="MAC-MAIN1">
                    <div className="MAC-Icons">
                        <div className="Mac-Icons-1">
                            <img src={I1} alt="" />
                            <p className='Upper'>
                                MacBook Air
                            </p>
                            <p className='Upper-Last'>
                                New
                            </p>
                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I2} alt="" />
                            <p className='Upper'>
                                MacBook Pro
                            </p>

                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I3} alt="" />
                            <p className='Upper'>
                                iMac
                            </p>

                        </div>
                        <div className="Mac-Icons-1" >
                            <img src={I4} alt="" height={60} width={30} style={{ marginTop: "-5px" }} />
                            <p className='Upper'>
                                Mac mini
                            </p>
                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I5} alt="" />
                            <p className='Upper'>
                                Mac Studio
                            </p>

                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I6} alt="" />
                            <p className='Upper'>
                                Mac Pro
                            </p>

                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I7} alt="" />
                            <p className='Upper'>
                                Compare
                            </p>

                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I9} alt="" />
                            <p className='Upper'>
                                Displays
                            </p>

                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I12} alt="" />
                            <p className='Upper'>
                                Accessories
                            </p>

                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I10} alt="" />
                            <p className='Upper'>
                                Sequoia
                            </p>

                        </div>
                        <div className="Mac-Icons-1">
                            <img src={I11} alt="" />
                            <p className='Upper'>
                                Shop Mac
                            </p>

                        </div>
                    </div>
                </div>
                <div className="store-section-1">

                    <p className='Banner'>


                        Buy Mac or iPad with education savings. And now up to 30 Sep, get AirPods with Mac and Apple Pencil with iPad.
                        <span>◊</span>
                        <Link>
                            Shop <i class="bi bi-chevron-right"></i>
                        </Link>{" "}
                    </p>

                </div>
                <div className="Mac-Main-Section-1">
                    <div className='Mac-Main-Section-1-text'>
                        <h1>Mac</h1>
                        <p>If you can dream it, <br />
                            Mac can do it.</p>
                    </div>
                    <div className='Mac-Main-Section-1-Content'>
                        <video src={Video1} autoPlay={true} loop muted></video>
                    </div>
                </div>
                <div className='Mac-Main-Section-2'>
                    <div className='Mac-Main-Section-2-text'>
                        <h1>Go further with Mac.</h1>

                    </div>
                    <div className='Mac-Main-Section-2-Content'>
                        {/* <img src={Section1} alt="" /> */}
                        <div className="Mac-Main-Text">
                            <h1> Supercharge your studies.</h1>
                            <div className="btns">
                                <button className='btn btn1'>Watch the film</button>
                                <button className='btn btn-primary'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Mac-Main-Section-3'>
                    <div className='Mac-Main-Section-3-text'>
                        <h1>Get to know Mac.</h1>

                    </div>
                    <div className='Mac-Main-Section-3-Content'>
                        <Swiper 
                        {...sliderParams1}
                        pagination={{
                            type: 'fraction',
                        }}
                            navigation={true}
                            slidesPerView={3}
                            spaceBetween={20}
                            modules={[Navigation]} className="mySwiper">
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={MacSlider1} alt="" />

                                    <div className="text">
                                        <h2><Link>Getting Started </Link></h2>
                                        <p className='Last-Para'>Easy to use. Easy to love. </p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={MacSlider2} alt="" />

                                    <div className="text">
                                        <h2><Link>Performance and Battery Life </Link></h2>
                                        <p className='Last-Para'>Go fast. Go far.</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={MacSlider3} alt="" />

                                    <div className=" text-black ">
                                        <h2><Link>Mac and iPhone</Link></h2>
                                        <p className='Last-Para'>Dream team. </p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={MacSlider4} alt="" />

                                    <div className="text-black">
                                        <h2><Link>Compatibility </Link></h2>
                                        <p className='Last-Para'>Mac runs your  <br />favourite apps. </p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={MacSlider5} alt="" />

                                    <div className="text">
                                        <h2><Link>Privacy and Security</Link></h2>
                                        <p className='Last-Para'>Your business <br /> is nobody else’s.</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={MacSlider6} alt="" />

                                    <div className="text-black">
                                        <h2><Link>Durability</Link></h2>
                                        <p className='Last-Para'>Built to stand <br /> the test of time..</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={MacSlider7} alt="" />

                                    <div className="text-black">
                                        <h2><Link>Apple Values</Link></h2>
                                        <p className='Last-Para'>Our values drive everything we do.</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='Mac-Main-Section-4'>
                    <div className='Mac-Main-Section-3-text'>
                        <h1>Explore the line-up.</h1>

                    </div>
                    <div className='Mac-Main-Section-3-Content'>
                        <div className="Nav-tabs-Sect-4">
                            <ul className='Navs-ul'>
                                <li><button className={toggle === 1 ? "active" : "btn"} onClick={() => settoggle(1)}>Laptop</button></li>
                                <li><button className={toggle === 2 ? "active" : undefined} onClick={() => settoggle(2)}>Desktop</button></li>
                                <li><button className={toggle === 3 ? "active" : undefined} onClick={() => settoggle(3)}>Display</button></li>
                            </ul>
                        </div>
                        <div className={toggle === 1 ? "Show-Content" : "Contact"}>
                            <div className="Navs-Content-Main">
                                <div className='Navs-Content-Main-1'>
                                    <img src={tabs1} alt="" className='Uper' />
                                    <div className="Navs-Content-Main-1-Text">
                                        <p className='Upper-Para'>New M3 models</p>
                                        <h2 className='Upper-Title'>MacBook Air 13” and 15”</h2>
                                        <p className='Upper-Head-1'>M2 or M3 chip</p>
                                        <p className='Border-Uper-para'>Strikingly thin and fast so you can  <br />work, play or create anywhere.</p>
                                        <h3 className='Border-Uper-head'>From ₹99900.00*</h3>
                                        <div className="Btns">
                                            <button className='btn btn-primary'>Learn more</button>
                                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                                        </div>
                                        <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                                            34.46 cm or 38.91 cm
                                        </h2>
                                        <p className='Upper-Para-Border'>(13.6″ or 15.3″) Liquid Retina display with <br /> 500 nits of brightness and support for <br /> 1 billion colours   <span>
                                            5</span></p>
                                        <div className="Mac-Border-in-1">
                                            <img src={icon1} alt=""  style={{height:"56px",width:"80px"}}/>
                                            <p>Apple M2 or M3 chip</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <p>Up to</p>
                                            <h2 className='Upper-Title'>18 hours</h2>
                                            <p>battery life <span>6</span></p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title'>4 ports</h2>
                                            <p>
                                                2x Thunderbolt / USB 4, <br /> headphone jack, MagSafe</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title'>1.24 kg or 1.51 kg <br />
                                                (2.7 lb. or 3.3 lb.)</h2>
                                            <p>Weight</p>
                                        </div>



                                    </div>
                                </div>
                                <div className='Navs-Content-Main-1'>
                                    <img src={tabs2} alt="" />
                                    <div className="Navs-Content-Main-1-Text">
                                        <p className='Upper-Para' style={{ opacity: "0" }}>New M3 models</p>
                                        <h2 className='Upper-Title'>MacBook Pro 14” and 16”</h2>
                                        <p className='Upper-Head-1'>M3, M3 Pro or M3 Max chip</p>
                                        <p className='Border-Uper-para'>The most advanced Mac laptops <br /> for demanding workflows.</p>
                                        <h3 className='Border-Uper-head   media-text'>
                                            From ₹169900.00*</h3>
                                        <div className="Btns tabs-padding" >
                                            <button className='btn btn-primary'>Learn more</button>
                                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                                        </div>
                                        <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                                            35.97 cm or 41.05 cm
                                        </h2>
                                        <p className='Upper-Para-Border'>(14.2″ or 16.2″) Liquid Retina XDR display <br /> with 1,000 nits of HDR and 600 nits  of <br /> SDR brightness, and <br /> up to 120Hz refresh rates <span>5</span>


                                        </p>
                                        <div className="Mac-Border-in-1 border-mac-1" >
                                            <img src={tab1icon} alt=""  style={{height:"56px",width:"122px"}}  className='Img-Media-icon'  />
                                            <p>Apple M3, M3 Pro or M3 Max chip</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <p>Up to</p>
                                            <h2 className='Upper-Title'>22 hours</h2>
                                            <p>battery life <span>7</span></p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title'>7 ports</h2>
                                            <p>
                                                2x Thunderbolt / USB 4 or <br /> 3x Thunderbolt 4, HDMI, SDXC,  <br />headphone jack, MagSafe</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title media-H1'>1.55 kg or 2.14 kg <br />
                                                (3.41 lb. or 4.71 lb.)
                                            </h2>
                                            <p>Weight</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggle === 2 ? "Show-Content" : "Contact"}>
                            <div className="Navs-Content-Main">
                                <Swiper
                                {...sliderParams2} pagination={{
                                    type: 'fraction',
                                }}
                                    navigation={true}
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide style={{ marginRight: "128px" }}>
                                        <div className='Navs-Content-Main-1'>
                                            <img src={tabs2img1} alt=""  className='img-media' />
                                            <div className="Navs-Content-Main-1-Text">
                                                <p className='Upper-Para'>New M3 models</p>
                                                <h2 className='Upper-Title'>iMac</h2>
                                                <p className='Upper-Head-1'>
                                                    M3 chip</p>
                                                <p className='Border-Uper-para'>A stunning all-in-one desktop for <br /> creativity and productivity.</p>
                                                <h3 className='Border-Uper-head'>From ₹134900.00*</h3>
                                                <div className="Btns" style={{ paddingTop: "28px" }}>
                                                    <button className='btn btn-primary'>Learn more</button>
                                                    <Link> Buy <i class="bi bi-chevron-right"></i> </Link>
                                                </div>
                                                <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                                                    60.96 cm
                                                </h2>
                                                <p className='Upper-Para-Border'>(24″) 4.5K Retina display with 500 nits of brightness <br /> delivers sharp and vibrant detail   <span>8
                                                    5</span></p>
                                                <div className="Mac-Border-in-1" style={{ paddingTop: "55px" }}>
                                                    <img src={tab2icon3} alt="" style={{ height: "56px", width: "38px" }} />
                                                    <p>Apple M2 or M3 chip</p>
                                                </div>
                                                <div className="Mac-Border-in-1 Slash-Space" style={{ height: "149px" }}>

                                                </div>
                                                <div className="Mac-Border-in-1" >
                                                    <p>Up to</p>
                                                    <h2 className='Upper-Title'>6 ports</h2>
                                                    <p>
                                                        2x Thunderbolt / USB 4, up to 2x USB 3, Gigabit Ethernet, <br /> headphone jack</p>
                                                </div>




                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ marginRight: "128px" }}>
                                        <div className='Navs-Content-Main-1'>
                                            <img src={tabs2img2} alt="" className='img-meida1'  />
                                            <div className="Navs-Content-Main-1-Text">
                                                <p className='Upper-Para'>New M3 models</p>
                                                <h2 className='Upper-Title'>Mac mini</h2>
                                                <p className='Upper-Head-1'>M2 or M2 Pro chip</p>
                                                <p className='Border-Uper-para'>The most affordable Mac desktop <br /> with outsized performance.</p>
                                                <h3 className='Border-Uper-head'>
                                                    From ₹59900.00*</h3>
                                                <div className="Btns">
                                                    <button className='btn btn-primary'>Learn more</button>
                                                    <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                                                </div>
                                                <div style={{ height: "159px" }} className='  Slash-Space'>
                                                </div>
                                                <div className="Mac-Border-in-1">
                                                    <img src={tab2icon4} alt="" className='IconImg' />
                                                    <p>Apple M2 or M3 chip</p>
                                                </div>
                                                <div className="Mac-Border-in-1 Slash-Space" style={{ height: "149px" }}>

                                                </div>
                                                <div className="Mac-Border-in-1">
                                                    <p>UP To</p>
                                                    <h2 className='Upper-Title'>9 ports</h2>
                                                    <p>
                                                        Up to 4x Thunderbolt 4, 2x USB‑A, HDMI, Gigabit Ethernet, headphone jack
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ marginRight: "128px" }}>
                                        <div className='Navs-Content-Main-1'>
                                            <img src={tabs2img3} alt="" className='tabs2image' />
                                            <div className="Navs-Content-Main-1-Text">
                                                <p className='Upper-Para'>New M3 models</p>
                                                <h2 className='Upper-Title'>Mac Studio</h2>
                                                <p className='Upper-Head-1'>
                                                    M2 Max or M2 Ultra chip</p>
                                                <p className='Border-Uper-para'>Powerful performance and extensive <br /> connectivity for pro workflows.</p>
                                                <h3 className='Border-Uper-head'>From ₹209900.00*</h3>
                                                <div className="Btns">
                                                    <button className='btn btn-primary'>Learn more</button>
                                                    <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                                                </div>
                                                <div className='Slash-Space' style={{ height: "159px" }}>

                                                </div>
                                                <div className="Mac-Border-in-1">
                                                    <img src={icon1} alt="" className='IconImg' />
                                                    <p>Apple M2 or M3 chip</p>
                                                </div>
                                                <div className="Mac-Border-in-1 Slash-Space" style={{ height: "150px" }}>

                                                </div>
                                                <div className="Mac-Border-in-1">
                                                    <p>UP To</p>
                                                    <h2 className='Upper-Title'>4 ports</h2>
                                                    <p>
                                                        2x Thunderbolt / USB 4, <br /> headphone jack, MagSafe</p>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide style={{ marginRight: "128px" }}>
                                        <div className='Navs-Content-Main-1'>
                                            <img src={tabs2img4} alt=""  className='img-media2' />
                                            <div className="Navs-Content-Main-1-Text">
                                                <p className='Upper-Para'>New M3 models</p>
                                                <h2 className='Upper-Title'>Mac Pro</h2>
                                                <p className='Upper-Head-1'>M2 Ultra chip</p>
                                                <p className='Border-Uper-para'>A pro workstation with PCIe expansion <br /> for demanding workflows.</p>
                                                <h3 className='Border-Uper-head'>From ₹729900.00*</h3>
                                                <div className="Btns">
                                                    <button className='btn btn-primary'>Learn more</button>
                                                    <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                                                </div>
                                                <div className='Slash-Space' style={{ height: "155px" }}>

                                                </div>
                                                <div className="Mac-Border-in-1">
                                                    <img src={tab2icon5} alt="" style={{ height: "56px", width: "38px" }} />
                                                    <p>Apple M2 or M3 chip</p>
                                                </div>
                                                <div className="Mac-Border-in-1">
                                                    <h2 className='Upper-Title'>PCIe</h2>
                                                    <p>Features seven expansion slots, six of which are PCle gen 4</p>
                                                </div>
                                                <div className="Mac-Border-in-1" style={{ paddingTop: "83px" }}>
                                                    <p>UP To</p>
                                                    <h2 className='Upper-Title'>4 ports</h2>
                                                    <p>
                                                        2x Thunderbolt / USB 4, <br /> headphone jack, MagSafe</p>
                                                </div>

                                            </div>
                                        </div>

                                    </SwiperSlide>

                                </Swiper>


                            </div>
                        </div>
                        <div className={toggle === 3 ? "Show-Content" : "Contact"}>
                            <div className="Navs-Content-Main">
                                <div className='Navs-Content-Main-1'>
                                    <img src={tab2icon6} alt="" className=' uper-media'  />
                                    <div className="Navs-Content-Main-1-Text">
                                        <h2 className='Upper-Title media-margin'>Studio Display</h2>
                                        {/* <p className='Upper-Head-1'>M2 or M3 chip</p> */}
                                        <p className='Border-Uper-para'>A 5K Retina display with stellar camera <br /> and audio.</p>
                                        <h3 className='Border-Uper-head'>From ₹159900.00*</h3>
                                        <div className="Btns">
                                            <button className='btn btn-primary'>Learn more</button>
                                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                                        </div>
                                        <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                                            68.29 cm
                                        </h2>
                                        <p className='Upper-Para-Border'>(27″) Retina display with 5120x2880 pixels <span>9</span> </p>
                                        <div className="Mac-Border-in-1">
                                            <p>Up to</p>
                                            <h2 className='Upper-Title'>5K</h2>
                                            <p>Retina display for gorgeous colour
                                                and spectacular detail</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title'>600 nits</h2>
                                            <p>
                                                brightness for brilliant colour</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <img src={Product_title_icon_1} alt=""  className='icon1media'/>
                                            <p>12MP Ultra Wide camera with Centre Stage for <br /> more natural video calls</p>
                                            <p>Weight</p>

                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <img src={product_1icon_2} alt="" className='iconmedia1' />
                                            <p>True Tone, anti-reflective coating and a nano-texture glass option for optimal viewing in any light</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title'>4 ports</h2>
                                            <p>Thunderbolt 3 (USB‑C), 3x USB‑C</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Navs-Content-Main-1'>
                                    <img src={product_image_1} alt="" className='Uper-media3'
                                     />
                                    <div className="Navs-Content-Main-1-Text">
                                        <h2 className='Upper-Title'>Pro Display XDR</h2>
                                        {/* <p className='Upper-Head-1'>M2 or M3 chip</p> */}
                                        <p className='Border-Uper-para'>An advanced 6K XDR display for <br /> pro workflows.</p>
                                        <h3 className='Border-Uper-head'>From ₹449900.00*</h3>
                                        <div className="Btns">
                                            <button className='btn btn-primary'>Learn more</button>
                                            <Link> Buy <i class="bi bi-chevron-right"></i> </Link>

                                        </div>
                                        <h2 className='Upper-Title' style={{ marginTop: "44px" }}>
                                            81.28 cm
                                        </h2>
                                        <p className='Upper-Para-Border'>(32″) Retina XDR display with 6016x3384 pixels <span> 9 </span></p>

                                        <div className="Mac-Border-in-1 one-border">
                                            <h2 className='Upper-Title'>6K</h2>
                                            <p>Retina XDR display for the most immersive <br />  viewing experience</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title'>1,000 nits</h2>
                                            <p>
                                                brightness for dazzling colour; <br />up to 1,600 nits peak brightness</p>
                                        </div>
                                        <div className="Slash-Space" style={{ height: "174px" }}>


                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <img src={product_1icon_2} alt="" className='iconmedia1' />
                                            <p>True Tone, anti-reflective coating and a nano-texture glass option for optimal viewing in any light</p>
                                        </div>
                                        <div className="Mac-Border-in-1">
                                            <h2 className='Upper-Title'>4 ports</h2>
                                            <p>Thunderbolt 3 (USB‑C), 3x USB‑C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='Mac-Main-Section-5'>
                    <div className='Mac-Main-Section-5-text'>
                        <h1>Why Apple is the best <br />
                            place to buy Mac.</h1>
                        <Link>Shop Mac iCE<i class="bi bi-justify"></i></Link>

                    </div>

                    <div className='Mac-Main-Section-5-Content'>

                        <Swiper 
                        {...sliderParams3}pagination={{
                            type: 'fraction',
                        }}
                            navigation={true}
                            slidesPerView={3}
                            spaceBetween={20}
                            modules={[Navigation]} className="mySwiper">
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={Slider_icon_2} alt="" style={{ height: '39px', width: "48px" }} />
                                    <div className="text">
                                        <h2><Link>Monthly payment options available. </Link></h2>
                                        <p className='Last-Para'>Choose the easy way to finance <br /> with convenient monthly payment options.</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={Slider_image_2} alt="" style={{ height: '39px', width: "42px" }} />


                                    <div className="text">
                                        <h2><Link>Save with <br /> Apple Trade In. </Link></h2>
                                        <p className='Last-Para'>Get credit towards your next Mac <br /> when you trade in an eligible <br /> device at an Apple Store.</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={Slider_image_3} alt="" style={{ height: '39px', width: "55px" }} />


                                    <div className="text">
                                        <h2><Link>Customise Your <br /> Mac.</Link></h2>
                                        <p className='Last-Para'>Choose your chip, memory, <br /> storage, even colour.</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={Slider_image_4} alt="" style={{ height: '39px', width: "51px" }} />


                                    <div className="text">
                                        <h2><Link>Get flexible delivery <br /> and easy pickup.</Link></h2>
                                        <p className='Last-Para'>Get free delivery or pickup at your Apple Store.</p>
                                    </div>
                                    <div className="icons">
                                        <i class="bi bi-plus-lg"></i>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide style={{ marginRight: "128px" }}>
                                <div className='Slider-Product-1'>
                                    <img src={Slider_image_5} alt="" style={{ height: '39px', width: "51px" }} />


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
                <div className="Mac-Main-Section-6">
                    <div className="Mac-Main-Text">
                        <h1>
                            Significant others.
                        </h1>
                    </div>
                    <div className='Mac-Main-Section-6-Content'>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0" onClick={() => setAccor(1)}>
                                <Accordion.Header>Mac and iPhone</Accordion.Header>
                                <Accordion.Body>
                                    You can answer calls or messages from your iPhone directly on your Mac. Copy images, video or text on your iPhone, then paste into another app on your nearby Mac. With iCloud, you can access your favourite files from either your iPhone or your Mac. And so much more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" onClick={() => setAccor(2)}>
                                <Accordion.Header>Mac and iPad</Accordion.Header>
                                <Accordion.Body>
                                    Mac and iPad
                                    Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" onClick={() => setAccor(3)}>
                                <Accordion.Header>Mac and Apple Watch</Accordion.Header>
                                <Accordion.Body>
                                    Automatically log in to your Mac when <br /> you’re wearing your Apple Watch with <br /> Auto Unlock. No password   <br />  typing required.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className='Img-Accordian'>

                            <img src={Accordian_1img} alt="" className={Accor === 1 ? "imag1" : "image_Accordian"} />
                            <img src={Accordian_img_1} alt="" className={Accor === 2 ? "imag2" : "image_Accordian"} />
                            <img src={Accordian_img_3} alt="" className={Accor === 3 ? "imag3" : "image_Accordian"} />

                        </div>
                    </div>
                </div>


                <div className="Mac-Main-Section-7">
                    <div className="Mac-Main-Text">
                        <h1>
                            Mac essentials.
                        </h1>
                        <Link>All Mac accessories<i class="bi bi-chevron-right"></i></Link>
                    </div>
                    <div style={{width:"100%",overflow:"scroll"}}>
                    <div className='Mac-Main-Section-7-Content'>
                        <div className='Mac-Product-1' >
                            <div className='Mac-Product-1-Text'>
                                <h2>Mac accessories</h2>
                                <p>Explore keyboards, mice and other essentials</p>
                                <Link>Shop Mac accessories <i class="bi bi-chevron-right"></i></Link>
                            </div>
                            <div className="Mac-Product-1-Image">
                                <img src={Mac_Product_1} alt="" />
                            </div>
                        </div>
                        <div className='Mac-Product-1' >
                            <div className='Mac-Product-1-Text'>
                                <h2>Studio Display</h2>
                                <p>The 68.29 cm (27″) 5K Retina display pairs beautifully with any Mac.</p>
                                <Link>Learn More<i class="bi bi-chevron-right"></i></Link>

                            </div>
                            <div className="Mac-Product-1-Image">
                                <img src={Mac_Product_2} alt="" />
                            </div>


                        </div>

                    </div>
                    </div>
                </div>
                <div className='Mac-Main-Section-8'>
                    <div className="text-Head">
                        <h1>Mac</h1>
                    </div>
                    <div className='Text-Content'>
                        <div className="Text-Content-1" style={{ marginRight: "50px" }}>
                            <p className='Uper-Para'>Explore Mac</p>
                            <h2>Explore All Mac</h2>
                            <h2>MacBook Air</h2>
                            <h2>MacBook Pro</h2>
                            <h2>iMac</h2>
                            <h2>Mac mini</h2>
                            <h2>Mac Studio</h2>
                            <h2>Mac Pro</h2>
                            <h2>Displays</h2>
                            <p className='Last-Para' style={{ paddingTop: "15px" }}>Compare Mac</p>
                            <p className='Last-Para'>Mac Does That</p>

                        </div>
                        <div className="Text-Content-1">
                            <p className='Uper-Para'>Explore Mac</p>

                            <p className='Last-Para' style={{ paddingTop: "5px" }}>Shop Mac</p>
                            <p className='Last-Para'>Mac Accessories</p>
                            <p className='Last-Para'>Apple Trade In  </p>
                        </div>
                        <div className="Text-Content-1">
                            <p className='Uper-Para'>More from Mac</p>

                            <p className='Last-Para' style={{ paddingTop: "5px" }}>Mac Support</p>
                            <p className='Last-Para'>AppleCare+ for Mac</p>
                            <p className='Last-Para'>macOS Sequoia Preview </p>
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

export default Mac
