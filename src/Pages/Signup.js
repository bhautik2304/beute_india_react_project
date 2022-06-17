import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Signup extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="container-fluid">
      <div class="main-login-section">
      <div class="login-section">
        <div class="row ">
          <div class="col-lg-7 login-form-column ">
            <h2>Sign up</h2>
            <form class="main-form">
             
              <div class="mb-4">
                <div class="input-icons-sign">
                  <i class="name-icon">
                  </i>
                <input type="text" class=" fc-sign " id="exampleInputName" aria-describedby="emailHelp" placeholder="First Name" required/>
             
              </div>
            {/* <!-- </div>
            <div class="mb-4 "> --> */}
              <div class="input-icons-sign">
                <i class="name-icon">
                </i>
              <input type="text" class=" fc-sign " id="exampleInputName" aria-describedby="emailHelp" placeholder="Last Name" required/>
           
            </div>
          </div>
        
            <div class="mb-4 ">
              <div class="input-icons">
                <i class="phone-icon">
                </i>
              <input type="number" class=" fc-l " id="exampleInputName" aria-describedby="emailHelp" placeholder="Phone number" required/>
           
            </div>
          </div>
          <div class="mb-4 ">
            <div class="input-icons">
              <i class="otp-icon">
              </i>
            <input type="email" class=" fc-l " id="exampleInputName" aria-describedby="emailHelp" placeholder="E-mail" required/>
         
          </div>
        </div>
            
             <div class="submit-section">
              <button type="submit" class="">Sign up</button>
              <span> <Link to="/login"> Already have an account? </Link></span>
             </div>
              
            </form>
          </div>
          <div class="col-lg-5 pb-5 lgn-img">
          <img src={process.env.PUBLIC_URL+"pictures/l-img.png"} alt="" />
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

export default Signup;