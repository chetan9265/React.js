import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="Footer-section-Link">
            <div className="Footer-link">
                <p className='Footer-link-Para'>
                    Shop and Learn
                </p>
                <Link>Store</Link>
                <Link>Mac</Link>
                <Link>ipad</Link>
                <Link>iPhone</Link>
                <Link>Watch</Link>
                <Link>AirPods</Link>
                <Link>TV & Home</Link>
                <Link>AirTag</Link>
                <Link>Accessories</Link>
                <Link>Gift Cards</Link>
                <p className='Footer-link-Para' style={{marginTop:"20px"}}>
                    Apple Wallet
                </p>
                <Link>Wallet</Link>
            </div>
            <div className="Footer-link" style={{marginLeft:"20px"}}>
                <p className='Footer-link-Para'>
                    Account
                </p>
                <Link>Manage Your Apple ID</Link>
                <Link>Apple Store Account</Link>
                <Link>iCloud.com</Link>
                <span className='Footer-link-Para' style={{marginTop:"20px"}}>Entertainment
                </span>
                <Link>Apple One</Link>
                <Link>Apple TV+</Link>
                <Link>Apple Music</Link>
                <Link>Apple Arcade</Link>
                <Link>Apple ProdCasts</Link>
                <Link>Apple Books</Link>
                <Link>Apple Store</Link>
            </div>
            <div className="Footer-link">
                <p className='Footer-link-Para'>
                Apple Store

                </p>
                <Link>Find a Store</Link>
                <Link>Genius Bar</Link>
                <Link>Today at Apple</Link>
                <Link>Group  Reservations</Link>
                <Link>Apple Camp</Link>
                <Link>Apple Trade in</Link>
                <Link>Ways to Buy</Link>
                <Link>Recycling Programme </Link>
                <Link>Order Status</Link>
                <Link>Shopping Help</Link>
            </div>
            <div className="Footer-link">
                <p className='Footer-link-Para'>
                For Business
                </p>
                <Link>Apple and Business</Link>
                <Link>Shop for Business
                </Link>
                <p className='Footer-link-Para' style={{marginTop:"20px"}}>
                For Education
                </p>
                <Link>Apple and Education</Link>
                <Link>Shop for Education
                </Link>
                <Link>Shop for University
                </Link>
                <p className='Footer-link-Para' style={{marginTop:"20px"}}>
                For Healthcare     </p>
                <Link>Apple and Healthcare</Link>
                <Link>Mac for Healthcare
                </Link>
                <Link>Health on Apple Watch
                </Link>

                
                
            </div>
            <div className="Footer-link">
                <p className='Footer-link-Para'>
                Apple Values
                </p>
                <Link>Accessibility</Link>
                <Link>Education</Link>
                <Link>Environment</Link>
                <Link>Privacy</Link>
                <Link>Supply Chain</Link>
                <p className='Footer-link-Para' style={{marginTop:"20px"}}>
                About Apple     </p>
                <Link>Newsroom</Link>
                <Link>Apple Leadership
                </Link>
                <Link>Careeer Opportunities
                </Link>
                <Link>Investors
                </Link>
                <Link>Ethics & Compliance
                </Link>
                <Link>Events
                </Link>
                <Link>Contact Apple
                </Link>
                

                
            </div>
            
        </div>
        <div className="Footer-Last-Para">
        <p className='Footer-Para-Last'>
            More ways to shop: <Link>Find an Apple Store</Link> or <Link>other retailer</Link> near you. Or call 000800 040 1966.
            </p>
            <div className='Footer-Para-lasts' >
            <div className="Footer-Links-Last">
            <p  className='P-footer'>Copyright © 2024 Apple Inc. All rights reserved.</p>
             <div className='Last-links'>
             <Link className='A-1'>Privacy Policy</Link>
                <Link  className='A-2'>Terms of Use</Link>
                <Link className='A-3'>Sales Policy</Link>
                <Link className='A-4'>Legal</Link>
                <Link className='A-5'>Site Map</Link>
             </div>
            </div>
            <div className="Footer-link-country">
                <p className='Para-Country' style={{fontSize:"12px"}}>India</p>
            </div>
            </div>
            </div>

        </div>
      </div>
  )
}

export default Footer
