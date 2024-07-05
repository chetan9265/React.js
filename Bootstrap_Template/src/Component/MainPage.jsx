import React from "react";
import "./Main.css";
import Button from "react-bootstrap/Button";
import Profile from "../assets/Profile-1.png"
import { FaFacebookF } from "react-icons/fa";

const MainPage = () => {
  return (
    <div>
<div className="Main " >
  <div className="row">
  <div className="col-12 d-flex justify-content-between align-items-center main-one">
          <div className="col-12  col-md-6 Text  col-sm-7">
            <h1>Hi , I'M John Deo</h1>
            <p className="Text-P">
              {" "}
              A freelance Web Devloper From London I Convert Custom <br /> web Designer
              to Bootstrap Template
            </p>
            <p className="T-p"> I Make Youtube Videos and Write Blog </p>

            <Button variant="primary" style={{borderRadius:"25px", padding:"8px 28px 8px 28px",marginTop:"25px"}}>I'M AVAILABLE </Button>{" "}
            <div className="icons">
                <a href="" className="fb"><i><FaFacebookF /></i></a>
                <a href="">
                <i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-github"></i></a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-5" >                
                <img src={Profile} alt=""  />
          </div>
           
        </div>
        
    </div>
</div>
      </div>
    // </div>
  );
};

export default MainPage;
