import React from "react";
import Header from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import MacBookimg from "../assets/hero_macbook_air_m3__cp4t7pn8zqaa_large_2x.jpg";
import Iphoneimg from "../assets/hero_iphone15pro__i70z9oz3hj2i_large_2x.jpg";
import MovieImg from "../assets/promo_underdogs__bevfo01zejgy_large.jpg";
import MacImg from "../assets/promo_mac_does_that__ckozfqcs65w2_large_2x.jpg"
import Iwatch from "../assets/promo_apple_watch_series_9_order__b3u85rm9zf6u_large_2x.jpg"
import WatchHeadline from "../assets/promo_logo_apple_watch_series_9__ckz0hbex0yeu_large_2x.png"
import Appleimg from "../assets/promo_ai__couihqxznyvm_large_2x.jpg"
import Macbook from "../assets/PROMOTE-MACBOOK.jpg"
import MacHead from "../assets/promo_logo_ipadair__frwnnsqveeye_large_2x.png"
import PhoneHead from '../assets/promo_iphone_tradein__bugw15ka691e_large_2x.jpg'
import PhoneTitle from '../assets/logo_tradein__d1fpktgipvki_large_2x.png'
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from "../assets/Carasouel_1.jpg"
import Carousel2 from "../assets/Carasouel_2.jpg"
import Carousel3 from "../assets/Carasouel_3.jpg"
import Carousel4 from "../assets/Carasouel_4.jpg"
import Carousel5 from "../assets/Carasouel_5.jpg"
import Carousel6 from "../assets/Carasouel_6.jpg"
import Carousel7 from "../assets/Carasouel_7.jpg"
import Carousel8 from "../assets/Carasouel_8.jpg"
import Carousel9 from "../assets/Carasouel_9.jpg"
import Carousel10 from "../assets/Carasouel_10.jpg"
import Carousel11 from "../assets/Carasouel_11.jpg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../Media.css"
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import 'swiper/css';
import mediaiphoen from "../assets/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import slidrmedia from "../assets/media1.jpg"
import slidrmedia2 from "../assets/media2.jpg"
import slidrmedia3 from "../assets/media3.jpg"
import slidrmedia4 from "../assets/media4.jpg"
import slidrmedia5 from "../assets/media5.jpg"
import slidrmedia6 from "../assets/media6.jpg"
import slidrmedia7 from "../assets/media7.jpg"
import slidrmedia8 from "../assets/media8.jpg"
import slidrmedia9 from "../assets/media9.jpg"
import slidrmedia10 from "../assets/media10.jpg"
import slidrmedia11 from "../assets/media11.jpg"
import mediaimghome from "../assets/hero_iphone15pro__i70z9oz3hj2i_medium_2x.jpg"






;const Home = () => {
  
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Section-home">
        <p className="P-upper">
          Get iPhone 15 Pro from ₹5621.00/mo.‡ for 24 mo. with No Cost EMI from
          most leading banks.
          <Link>
            Buy now <i class="bi bi-chevron-right"></i>
          </Link>{" "}
        </p>
        {
          // education section not ready for the show
        }
        <div className="MacBook-section">
          <div className="Macbook-head">
            <h1 className="Head-Heading">MacBook Air</h1>
            <p className="Head-Para">Supercharged by M3.</p>
            <div className="Head-btn">
              <button className="btn btn-primary  Mac-btn1">Learn more</button>
              <button className="btn btn-outline-primary Mac-btn2">Buy</button>
            </div>
          </div>
          <div className="macbook-image">
            <img src={MacBookimg} alt="" className="imgmediahome" />
          </div>
        </div>

        <div className="Iphone-section">
          <div className="Iphone-head">
            <h1 className="Head-Heading">iPhone 15 Pro</h1>
            <p className="Head-Para">Titanium. So strong. So light. So Pro.</p>
            <div className="Head-btn">
              <button className="btn btn-primary  Mac-btn1">Learn more</button>
              <button className="btn btn-outline-primary Mac-btn2">Buy</button>
            </div>
          </div>
          <div className="Iphone-image">
            <img src={mediaimghome} className="Media-img-2" alt="" />
            <img src={mediaiphoen} alt=""  className="Media-1"/>
            <img src={Iphoneimg} alt=""  className="large-img" />
          </div>
        </div>
      <div className="Promot-Main">
        <div className="PROMOTE-SEC">
          <div className="PROMOT-row-1">
            <div className="promot-Movie">
              <div className="promot-movie-img">
                <div className="promot-movie-text">
                  <h1 className="Movie-Head">Out Of Office</h1>
                  <p className="Movie-Para">
                    Apple at Work works from anywhere.
                  </p>
                  <div className="Movie-btn">
                    <button className="btn    Promot-btn1">Learn more</button>
                    <button className="btn  Promot-btn2">Watch the film</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="PROMOT-row-2">
          <div className="promot-Mac">
            <div className="promot-text">
              <h1 className="Promot-Head">The best AI PC is <br /> a Mac.</h1>
            <button className="btn  btn-primary">Explore Mac for work</button>
             </div>
            {/* <img src={MacImg} alt="" /> */}
              
              
              
            </div>
          </div>
        </div>


        <div className="PROMOTE-SEC">
          <div className="PROMOT-row-3">
            <div className="promot-watch">
              <div className="promot-watch-img">
                <div className="promot-watch-text">
                    <div className="Watch-Headline">
                    <img src={WatchHeadline} alt="" width={10} />
                    </div>
                    <p className="Watch-Para">Smarter. Brighter. Mightier.</p>

                  <div className="watch-btn">
                    <button className="btn btn-primary   Promot-btn1">Learn more</button>
                    <button className="btn  btn-outline-primary Promot-btn2">Buy</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="PROMOT-row-4">
          <div className="promot-Iphone">
            <div className="promot-text">
              <h1 className="Promot-Head">Apple Intelligence</h1>
              <p className="Iphone-para-uper">AI for the rest of us.</p>
              <p className="Iphone-para-Down">Coming in beta in US English later this year</p>
              <div className="Iphone-btn">
                    <button className="btn btn-primary   Promot-btn1">Learn more</button>
                    <button className="btn  btn-outline-primary Promot-btn2">Watch the film</button>
                  </div>
            </div>
            </div>
          </div>
        </div>
        
        
        <div className="PROMOTE-SEC">
          <div className="PROMOT-row-5">
            <div className="promot-MAC">
              <div className="promot-MAC-img">
                <div className="promot-MAC-text">
                    <div className="MAC-Headline">
                    <img src={MacHead} alt="" width={10} />
                    </div>
                    <p className="MAC-Para">Two sizes. Faster chip. Does it all..</p>

                  <div className="MAC-btn">
                    <button className="btn btn-dark   Promot-btn1">Learn more</button>
                    <button className="btn  btn-outline-dark Promot-btn2">Buy</button>
                  </div>
                </div>
                <img src={Macbook} alt="" className="Haedline"/>
              </div>
            </div>

          </div>
          <div className="PROMOT-row-6">
          <div className="promot-Phone">
              <div className="promot-Phone-img">
                <div className="promot-Phone-text">
                    <div className="Phone-Headline">
                    <img src={PhoneTitle} alt=""  />
                    </div>
                    <p className="Phone-Para">Upgrade and save. It’s that easy.</p>
                  <div className="Phone-btn">
                    <button className="btn btn-primary   Promot-btn1">Get Your Estimate</button>

                  </div>
                </div>
                <img src={PhoneHead} alt="" className="Haedline"/>
              </div>
            </div>
          </div>
        </div>

        </div>
         <div className="Slider-sect">
         <Swiper
        slidesPerView={ 1.3}
        spaceBetween={-90}
        centeredSlides={true}
        slideShadows={true}
        scale={1}
        rotate={50}
        loop
        modifier={1}
        depth={100}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView:1,
            spaceBetween:10
          },
          
          481:{
            slidesPerView: 1.6,
            spaceBetween:0
          },
        550:{
          slidesPerView:1.8,
          spaceBetween:10
        },
        570:{
          slidesPerView:1.9,
          spaceBetween:10
        },
        620:{
          slidesPerView:2,
          spaceBetween:10
        },
        731:{
          slidesPerView:1.1,
          spaceBetween:10
        }
        ,900:{
          slidesPerView:1.2,
          spaceBetween:10
        },
        1100:{
          slidesPerView:1.3,
          spaceBetween:10
        },
        1210:{
          slidesPerView:1.2
        },
        1260:{
          slidesPerView:1.3
        },
        1300:{
          slidesPerView:1.34
        }
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            {(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                     <img src={slidrmedia} className="slidermedia" alt="" />
                  <img src={Carousel1} alt=""  className="Slider" />
                <div className="active-enable-text"><button>Stream now</button>
                <p><b>Crime· </b> Presume nothing.
                </p>
                </div>
                </div> : <div  className="Activeimg">
                <img src={slidrmedia} className="slidermedia" alt="" />
                  <img src={Carousel1} alt=""  className="Slider"/></div>}
                </div>
            ))}
            
            
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia2} className="slidermedia" alt="" />
                  <img src={Carousel2} alt=""  className="Slider" />
                <div className="active-enable-text"><button>Preview now</button>
                <p><b>Comedy ·</b>In cinemas now
                </p>
                </div>
                </div> : <div  className="Activeimg">
                <img src={slidrmedia2} className="slidermedia" alt="" />
                  <img src={Carousel2} alt="" className="Slider" />
                  </div>
                  }</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia3} className="slidermedia" alt="" />
                  <img src={Carousel3} alt=""  className="Slider"/>
                <div className="active-enable-text"><button>Stream now</button>
                <p><b>Sci-Fi·</b> One life. infinate possibilites
                </p>
                </div>
                </div> : <div  className="Activeimg">
                <img src={slidrmedia3} className="slidermedia" alt="" />

                  <img src={Carousel3} alt="" className="Slider" /></div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia4} className="slidermedia" alt="" />
                  <img src={Carousel4} alt="" className="Slider" />
                <div className="active-enable-text"><button>Stream now</button>
                <p><b>Thriller ·</b>  Emmy® nominee.
                </p>
                </div>
                </div> : <div  className="Activeimg">
                <img src={slidrmedia4} className="slidermedia" alt="" />
                  <img src={Carousel4} alt=""  className="Slider"  />
                  </div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia5} className="slidermedia" alt="" />
                  <img src={Carousel5} alt=""    className="Slider"/>
                <div className="active-enable-text"><button>Stream now</button>
                <p><b>Drama ·</b> Some men are a mystery.
                </p>
                </div>
                </div> : <div  className="Activeimg">
                <img src={slidrmedia5} className="slidermedia" alt="" />
                  <img src={Carousel5} alt=""   className="Slider" /></div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia6} className="slidermedia" alt="" />
                  <img src={Carousel6} alt="" className="Slider" />
                <div className="active-enable-text"><button>Stream now</button>
                <p><b>Comedy ·</b> Emmy® nominee.
                </p>
                </div>
                </div> : <div  className="Activeimg">
                <img src={slidrmedia6} className="slidermedia" alt="" />
                  <img src={Carousel6} alt="" className="Slider" /></div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia7} className="slidermedia" alt="" />
                  <img src={Carousel7} alt="" className="Slider" />
                  <div className="active-enable-text"><button>Stream now</button>
                <p><b>Comedy ·</b> Emmy® nominee.
                </p>
                </div>
                  </div> : 
                <div  className="Activeimg">
                  <img src={slidrmedia7} className="slidermedia" alt="" />
                  <img src={Carousel7} alt="" className="Slider" />
                  </div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia8} className="slidermedia" alt="" />
                  <img src={Carousel8} alt="" className="Slider" />
                  <div className="active-enable-text"><button>Stream now</button>
                <p><b>Thriller ·</b> Emmy® nominee.
                </p>
                </div>
                  </div> : <div  className="Activeimg">
                  <img src={slidrmedia8} className="slidermedia" alt="" />
                  <img src={Carousel8} alt="" className="Slider" />
                    </div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia9} className="slidermedia" alt="" />
                  <img src={Carousel9} alt="" className="Slider" />
                  <div className="active-enable-text"><button>Previous Now</button>
                <p><b>Comedy  ·</b> In Cinema now.
                </p>
                </div>
                  </div> 
                  : 
                  <div  className="Activeimg">
                    <img src={slidrmedia9} className="slidermedia" alt="" />
                  <img src={Carousel9} alt="" className="Slider" />
                    </div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? <div className="active-enable-img">
                  <img src={slidrmedia10} className="slidermedia" alt="" />
                  <img src={Carousel10} alt="" className="Slider" />
                  <div className="active-enable-text"><button>Stream Now</button>
                <p><b>Comedy </b>  in Cinema now
                </p>
                </div>
                  </div> : 
                  <div  className="Activeimg">
                      <img src={slidrmedia10} className="slidermedia" alt="" />
                      <img src={Carousel10} alt="" className="Slider" />
                    </div>}</div>

            ))}
            </SwiperSlide>
            <SwiperSlide>{(({isActive})=>(
                <div>{isActive ? 
                <div className="active-enable-img">
                                        <img src={slidrmedia11} className="slidermedia" alt="" />
                                        <img src={Carousel11} alt="" className="Slider" />
                                        <div className="active-enable-text"><button>Stream Now</button>
                <p><b>Drama </b> Four generations. One destiny.
                </p>
                </div>          
                  </div> : <div  className="Activeimg">
                  <img src={slidrmedia11} className="slidermedia" alt="" />
                  <img src={Carousel11} alt="" className="Slider" />
                    </div>}</div>

            ))}
            </SwiperSlide>
      </Swiper>

         </div>


         <div className="Footer-section">
          <div className="Footer-section1">
          <div className="Footer-section-para">
            <p>‡No Cost EMI is available with the purchase of an <Link> eligible product </Link> made using qualifying cards on 3- or 6-month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an   eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. <Link> Terms apply.</Link>
            </p>
            <p>Representative example:
            </p>
            <p>Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.</p>
            <p>Based on a 24-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹11242.00, paid over 24 months as 24 monthly payments of ₹3329.00.
            </p>
            <p>*Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions <Link>herein.</Link>
            </p>
            <p>1. Apple Intelligence will be available in beta on iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to US English, as part of iOS 18, iPadOS 18 and macOS Sequoia later this year.
            </p>
            <p>Some features, additional languages and platforms will be coming over the course of the next year.</p>
            <p>A subscription is required for Apple TV+</p>
          </div>
          <Footer/>
         </div>
         </div>
      </div>
    </div>
  );
};

export default Home;
