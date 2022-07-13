import React from "react";
import {Link} from 'react-router-dom'
import '../../style.css'



const InfoSection4=()=> {

 
    return (
      <>
        <div className="hero-banner it-banner overly hero-bg4">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1>We're an IT agency</h1>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      
                        <a className="btn btn-primary">Get Started</a>
                      

                      
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="animate-banner-image"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      <img
                        src=""
                        alt="Animate image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </>
    );
  
}

export default InfoSection4;