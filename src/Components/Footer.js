import React from 'react';
import { useHistory } from "react-router-dom";


 function Footer() {
  return (
    <>
    <div class="container-fluid footsection ">
    <div class="main-footer-section">
      <div class="row  pt-5 pb-5 ">
        <div class="col-lg-4 col-md-4 col-sm-6">

          <div class="footdata">
            <ul>
              <li>
                <div class="foothead mb-3">
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
        <div class="col-lg-4 col-md-4 col-sm-6">

          <div class="footdata">
            <ul>
              <li>
                <div class="foothead mb-3">
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
        <div class="col-lg-4 col-md-4 col-sm-12">

          <div class="footdata">
            <ul class="quick-links">
              <li>
                <div class="foothead mb-3">
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
      <div class="child-foot">
        <p class="mt-4">Sign up for our Newsletter</p>
        <div class="foot-email-block mt-4">
          <label class="f-email">
            <input type="email" class="foot-email" placeholder="Your email address"/>
          </label>
        </div>
        <div class="cards-img mt-4">
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
