import React from 'react';
import { useHistory } from "react-router-dom";


 function Footer() {
  return (
    <>
    <div className="container-fluid footsection ">
    <div className="main-footer-section">
      <div className="row  pt-5 pb-5 ">
        <div className="col-lg-4 col-md-4 col-sm-6">

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

        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">

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
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">

          <div className="footdata">
            <ul className="quick-links">
              <li>
                <div className="foothead mb-3">
                  QUICK LINKS
                </div>
              </li>
              <li> <img src={process.env.PUBLIC_URL+"pictures/Facebook.svg"} alt="" /></li>
              <li> <img src={process.env.PUBLIC_URL+"pictures/Instagram.svg"} alt="" /></li>
              <li> <img src={process.env.PUBLIC_URL+"pictures/YouTube.svg"} alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="child-foot">
        <p className="mt-4">Sign up for our Newsletter</p>
        <div className="foot-email-block mt-4">
          <label className="f-email">
            <input type="email" className="foot-email" placeholder="Your email address"/>
          </label>
        </div>
        <div className="cards-img mt-4">
        <img src={process.env.PUBLIC_URL+"pictures/Visa.svg"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Mastercard.svg"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Netbanking.svg"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Amazon Pay.svg"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/UPI.svg"} alt="" />
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Footer;
