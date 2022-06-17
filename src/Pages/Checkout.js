import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Checkout extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="container-fluid">
  <div class="main-container-checkout">
    <div class="login-section">
      <div class="row ">
        <div class="login-form-column ">
          <h2>Sign up</h2>
          <form class="checkout-form">

            <div class="checkout-margin">
              <div class="input-icons-sign">
                <i class="name-icon">
                </i>
                <input type="text" class=" fc-sign checkbr " id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="First Name" required/>  

              </div>
              <div class="input-icons-sign">
                <i class="name-icon">
                </i>
                <input type="text" class=" fc-sign checkbr" id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="Last Name" required/>

              </div>
            </div>

            <div class="checkout-margin ">
              <div class="input-icons">
                <i class="address-book-icon">
                </i>
                <input type="text" class=" fc-l checkbr" id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="Address Line 1" required/>

              </div>
            </div>
            <div class="checkout-margin ">
              <div class="input-icons">
                <i class="address-book-icon">
                </i>
                <input type="text" class=" fc-l checkbr" id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="Address Line 2" required/>

              </div>
            </div>
            <div class="checkout-margin">
              <div class="input-icons-checkout">
                <i class="gender-icon">
                </i>
                
                  <div class="form-group">
                    <select  class=" fc-checkout checkbr"  id="exampleFormControlSelect1" required>
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      </select>
                  </div>

              </div>
              
              <div class="input-icons-checkout">
                <i class="phone-icon">
                </i>
                <input type="number" class=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="Phone number" required/>

              </div>

              <div class="input-icons-checkout">
                <i class="otp-icon">
                </i>
                <input type="email" class=" fc-checkout checkbr " id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="E-mail" required/>

              </div>
            </div>
            <div class="checkout-margin">
              <div class="input-icons-checkout">
                <i class="postal-icon">
                </i>
                <input type="number" class=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="Pincode" required/>

              </div>

              <div class="input-icons-checkout">
                <i class="map-icon">
                </i>
                <input type="text" class=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="City" required/>

              </div>
              
              <div class="input-icons-checkout">
                <i class="city-hall-icon">
                </i>
                <input type="text" class=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="State" required/>

              </div>
            </div>

            <div class="submit-section">
              <span><div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Ship to a different address
                </label>
              </div></span>
              <span class="sa-add"> <img src="/pictures/awesome-save.svg" width="15%" alt=""/> Save Address</span>
            </div>

          </form>
        </div>

      </div>
    </div>

 

  <div class="mb-2">
    <div class="new2"></div>
  </div>
  
  <div class="address-section">
    <span><h3>Saved Address</h3></span>
    <span> <img src="/pictures/Icon ionic-ios-add.svg" alt=""/> Add new address</span>
  </div>

  <div class="address-edit-section ">
    <div class="card-address mt-4 mb-5">
      <div class="card-address-edit">
        <h5>Paras shah</h5>
        <img src="/pictures/Icon material-edit.svg" alt=""/>
      </div>
      <div class="mt-3">
      <span>
        <h5>
        #23, Karwar Road House, <br/>
        Bangalore-568215, <br/>
        Ph: 9525624523
      </h5>
      </span>
    </div>
      
    </div>
  </div>

  <div class="mb-2">
    <div class="new2"></div>
  </div>

  <div class="payment-optoin-section">
    <div class="row pt-5 pb-5">
      <div class="col-lg-8">
        <h2>Payment Option</h2>
        <div class="choose-payment-mode mt-5 pe-5">
          <ul>
            <div class="radio-btn-section pe-3">
            <li>Razor pay </li> 
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
              <label class="form-check-label" for="exampleRadios1">
               
              </label>
            </div>
            </div>

            <hr/>
            <div class="radio-btn-section pe-3">
            <li>Cash on delivery</li>
            
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
              <label class="form-check-label" for="exampleRadios2">
               
              </label>
            </div>
            </div>
            <hr/>
            <div class="radio-btn-section pe-3">
              <li>UPIs</li>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
                <label class="form-check-label" for="exampleRadios3">
              
                </label>
              </div>
              </div>
            
          </ul>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="total-section">
          <h1 class="mb-5"> <u> Total</u></h1>
          <div class="total-products">
          <div class="product-price">
          <h5>Playboy Endless Night</h5><span>1000</span>
          </div>
          <div class="product-price">
            <h5>Playboy Endless Night</h5><span>1000</span>
            </div>
            <div class="product-price">
              <h5>GST</h5><span>200</span>
              </div>
              <div class="mb-2 mt-4">
                <div class="new2"></div>
              </div>
              <div class="product-price">
                <h5>Sub Total</h5><span>3000</span>
                </div>
              </div>
                <button class="payment-btn mt-5"> <Link to="/login"> Proceed to Payment</Link></button>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
        <Footer />
      </>
    )
  }
}

export default Checkout;