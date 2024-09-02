import React, { useEffect, useState } from 'react'
import Header from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import one from "../assets/apple-new-arrivals-checkout-201804.png"
import { Accordion } from 'react-bootstrap'
import Footer from './Footer'

import mediaimagebag from "../assets/apple-new-arrivals-checkout-201804_FMT_WHH.png"
const Bag = () => {
  const[data,setdata]=useState([])
  const [postData,setpostData]=useState({})
  const [CardData,setCardData]=useState([])
  function BagData(){
    axios.get("http://localhost:8000/Alldata").then((res)=>{
      res.data.map((el)=>{
        if(el.id==="BagData"){
              setdata(el.BagData)
       }
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    BagData()
    FetchData()
  },[postData])
        function PostData(id){
          axios.get(`http://localhost:8000/Alldata`).then((res)=>{
              res.data.map((el)=>{
                if(el.id==="BagData"){
                  let filterdata =el.BagData.filter((ele, ind)=>ele.id==id)
                  filterdata.map((el)=>{
                    axios.post(" http://localhost:8000/AddtoCart",{
                      id:el.id,
                      name:el.name,
                      price:el.price,
                      image:el.image,
                      name:el.name,            
                    }).then((res)=>{
                      console.log(res.data)
                      alert("Product Added to Cart")
                    })
                    .catch((err)=>{
                      console.log(err)
                    })
                  })
               }
              })
          }).catch((err)=>{
            console.log(err)
          })
        }
        function FetchData(){
          axios.get("http://localhost:8000/AddtoCart").then((res)=>{
            setCardData(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        


        function Delete(id){
          axios.delete(`http://localhost:8000/AddtoCart/${id}`).then((res)=>{
            alert("Product Deleted ")
            FetchData()
          }).catch((err)=>{
            console.log(err)
          })
        }

  return (
    <div>
      <div className="Bag-Page-Main">
        <div className="Bag-Page-Header">
            <Header/>
        </div>
        <div className="Bag-Page-Content">
            <div className="Bag-Page-Content-text" style={{paddingTop:"120px"}}>
                <button className='btn btn-primary'>Check Out</button>
            </div>
            <div className='Bag-Page-Content-Cart'>
              {
                CardData.map((el)=>(
                  <div className='Bag-Page-Content-Cart-product' key={el.id}>
                  <div className="image">
              <img src={el.image} alt="" style={{height:"203px",width:"203px"}} />
            </div>
            <div className="text">
              <div className="text-upper">
                <div className="text-1">
                  <h1><Link>
                  {el.name}
                  </Link></h1>
                  <p>Pay 15% pa for 24 months: footnote^</p>
                </div>
                <div className="text-2">
                  <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5">6</option>
                    <option value="5">7</option>
                    <option value="5">8</option>
                    <option value="5">9</option>
                    <option value="5">10+</option>
                  </select>
                </div>
                <div className="text-3">
                  <h2>{el.price}</h2>
                  <Link onClick={()=>Delete(el.id)}>Remove</Link>
                </div>
              </div>
              <div className="text-middle">
                <div className="icon-1">

                  <p> <i class="fa-solid fa-grip-lines"></i> Add free engraving</p>
                  <Link>Add</Link>
                </div>
                <div className="text-last-para">

                  <div className="text-icon-1">
                    <p> <i class="fa-solid fa-truck"></i> In stock and ready to ship.</p>
                    <p> <i class="bi bi-bag"></i> Pick up at an Apple Store near you.</p>
                    
                  </div>
                </div>
              </div>

            </div>
            
            

          </div>
                ))
              }
                  
            
            <div className="Bag-Content-Main-btn">
              <div className="Bag-content-Main-btn">
                <div className="text-1">
                  <div className="text-1-1">
                    <p>Subtotal</p>
                    {/* <p>₹370600.00</p> */}
                  </div>
                  <div className="text-1-2">
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  </div>
                  <div className='Text-2'>
                  <div className="text-2-3">
                    <h3>Total</h3>
                    {/* <p>₹370600.00</p> */}
                  </div>
                  
                  </div>
                  <button className='btn btn-primary'>Check Out</button>

              </div>
              
            </div>
            
            <div className="Last-Para-Bag">
                <p>Need some help? <Link>Chat now</Link> or call 000800 040 1966.</p>
              </div>
              <div className="Show-Data-Bag-Section">
                <div className='Show-Data-Bag-Section-text'>
                    <h1>You may also like
             </h1>
                </div>
                <div className='Show-Data-Bag-Section-content'>
                  <div className='Show-Data-Main'>
                     {
                      data.map((el)=>{
                        return(
                          <div className="Product-Bag-1" key={el.id}>
                      <img src={el.image}   height={200} width={200} alt="" />
                      <div className="text">
                        <p className='Last-Para'>{el.model}</p>
                        <h2><Link>{el.name}</Link></h2>
                        <p className='Footer-Para'>{el.price} <br />
                        (Incl. of all taxes)
                        </p>

                      </div>
                      <button className='btn btn-primary' onClick={()=>PostData(el.id)}>Add to Bag</button>
                     </div>
                        )
                      })
                     }
</div>
                </div>
              </div>
              <div className="product-Main-1">
                <div className="Product-Main-1-Banner">
                  <img src={one} alt="" className='one-bag' />
                  <img src={mediaimagebag} alt="" className='mediaimg' />
                </div>
                <div className="text-banner-1">
                  <h2>  New Arrivals</h2>
                  <p> Check out the latest accessories.</p>
                  <Link>
                  <p className='A-1'>Shop <i class="bi bi-chevron-right"></i></p></Link>
                </div>
              </div>
                 <div className="Bag-Footer-Main-1">
                  <div className="Bag-Footer-Main">
                  <Accordion className='Main-1' defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>Questions About Buying</Accordion.Header>
                                <Accordion.Body>
                                <Accordion className='Main-2' defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>Can I place a business order and add a GSTIN to my invoice?
                                </Accordion.Header>
                                <Accordion.Body>
                                Yes, at the Payments step in the checkout process, you can opt to receive a business invoice. You will be asked to enter your GSTIN (Goods and Services Tax Identification Number) and will receive a business e-invoice via email, after your order is delivered. Please note: it is not possible to add or amend a GSTIN on your invoice after your order has processed, and Customer Service cannot edit invoices to include it.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className='Main-2' defaultActiveKey="10" flush>
                            <Accordion.Item eventKey="10" >
                                <Accordion.Header>When will I get my items?
                                </Accordion.Header>
                                <Accordion.Body>
                                By entering a PIN code, you’ll get estimated delivery dates for your items. You’ll get a final delivery date after you’ve placed your order. All estimates are based on item availability and the delivery option you choose.   <Link> Learn more about Apple Delivery & Pickup <i class="bi bi-chevron-right"></i> </Link>
                                
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>                                <Accordion className='Main-2' defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="11" >
                                <Accordion.Header>What are my payment options?
                                </Accordion.Header>
                                <Accordion.Body>
                                We accept most credit and debit cards, as well as credit card and debit EMI. We also accept Net Banking, UPI and Payment on Delivery. Some payment options may not be available for all products. You can call 000800 040 1966 for more information. <Link>  Learn more about Apple Payment and GST <i class="bi bi-chevron-right"></i> </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>                                <Accordion className='Main-2' defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="12" >
                                <Accordion.Header>What are my financing options?
                                </Accordion.Header>
                                <Accordion.Body>
                                You can pay in instalments* using any credit card or debit account with EMI. During Checkout, you can compare and select instalment options. *Subject to card eligibility. See terms.  <Link> Learn more about Apple Payments </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>                               
                         <Accordion className='Main-2' defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="13" >
                                <Accordion.Header>Does Apple offer an education discount?
                                </Accordion.Header>
                                <Accordion.Body>
                                Yes. Apple offers special pricing for students, teachers, administrators and staff members. If you think you qualify, visit the  <Link> Apple Education Store(opens in a new window) </Link> to place your order
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>                            
                            <Accordion className='Main-2' defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="14" >
                                <Accordion.Header>Can I shop for Family & Friends in other countries or regions?
                                </Accordion.Header>
                                <Accordion.Body>
                                Visit the online store of the country or region where the products will be delivered to place your order. You can call 000800 040 1966 for more information
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                  </div>
                 </div>
                 <div className="Footer-Bag-1">
                  <div className="Footer-Bag">
                  <div className="Description-Footer-1">
                    <div className="Footer-Section-9">
                    <div className="Footer-Section-9-1">
                        <div className="Footer-section-para" style={{paddingTop:"15px"}}>
                            <p>^During checkout when you provide your card or account information, we’ll display all your EMI◊◊ options, including No Cost EMI§ as available.</p>
                           <p>
                           No Cost EMI will be deducted from the order total, reducing the amount to be financed. Minimum order value must be met. Offers vary by bank. Subject to terms and conditions.
                            </p>
                         <p>
                         EMI rates are determined by your bank. No Cost EMI offers are determined by Apple and our banking partners. Note that you cannot combine offers from multiple banks in the same order, and all items in an order will be set to the same number of instalments.
                            </p>
                            <p><span>◊◊</span> Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 24 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions.</p>
                        <p>
                        Representative example: <br />
                        Based on purchase of ₹79900.00. Total amount payable ₹92978.00 paid over 24 months as 24 monthly payments of ₹3874.00 at an interest rate of 15% pa. Total interest paid to bank: ₹13078.00.</p>
                        <p><span>§</span> No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3 or 6 month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3, 6, 9, 12, 18, 24 month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank's terms and conditions. Minimum order spend applies as per your card issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Terms apply </p>
                           <p style={{paddingBottom:"26px"}}>
                           Representative examples: <br />
                              Based on a 6 month tenure. ₹79600.00 total cost includes 15% pa and No Cost EMI savings of ₹3370.00, paid over 6 months as 6 monthly payments of ₹13267.00.
                            Based off a 24 month tenure. ₹79900.00 total cost includes 15% pa and No Cost EMI savings of ₹11197.00, paid over 24 months as 24 monthly payments of ₹3317.00.
                           </p>
                       
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
    </div>
  )
}

export default Bag
