import React from 'react';
import { useHistory } from "react-router-dom";


 function Footer() {
  return (
    <>
    <div className="container-fluid footsection ">
    <div className="main-footer-section">
      <div className="row  pt-5 pb-5 ">
        <div className="col-lg-6">
        <div className='footer-logo-section mt-3'>
        <img src={process.env.PUBLIC_URL+"pictures/beaute-india-footer.png"} alt="" />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
        </div>

        </div>
        <div className="col-lg-4">
        <div className="footdata">
            <ul>
              <li>
                <div className="foothead mb-3">
                  BEAUT INDIA
                </div>
              </li>
              <li>Who we are ?</li>
              <li>Terms & Conditions</li>
              <li>We respect your privacy </li>
              <li>Contact Us</li>
              <li>Shipping & Returns</li>
              <li>Authentication Certificate </li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="child-foot">
        <p className="mt-4">Sign up for our Newsletter</p>
        <div className="foot-email-block mt-3">
          <label className="f-email">
            <input type="email" className="foot-email" placeholder="Your email address"/>
          </label>
        </div>
        <div className="cards-img mt-3">
        <img src={process.env.PUBLIC_URL+"pictures/Visa.png"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Mastercard.png"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Netbanking.png"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Amazon Pay.png"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/UPI.png"} alt="" />
        </div>
      </div>
          
        </div>
        <div className="col-lg-2">

        
          <div className="footdata">
            <ul>
              <li>
                <div className="foothead mb-3">
                  SHOP BY
                </div>
              </li>
              <li>Fragrance For Him</li>
              <li>Fragrance For Her</li>
              <li>Makeup</li>
              <li>Body Care</li>
              <li>Home Fragrance</li>
              <li>Luggage</li>
            </ul>
          </div>
          <div className="footdata">
            <ul className="quick-links">
              <li>
                <div className="foothead mb-3 mt-5">
                  QUICK LINKS:
                </div>
              </li>
              <img src={process.env.PUBLIC_URL+"pictures/fb-ft.png"} alt="" />&nbsp;&nbsp;&nbsp;
              <img src={process.env.PUBLIC_URL+"pictures/wh-ft.png"} alt="" />&nbsp;&nbsp;
              <img src={process.env.PUBLIC_URL+"pictures/insta-ft.png"} alt="" />
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  </div>
    </>
  )
}

export default Footer;
