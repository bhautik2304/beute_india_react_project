import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="container-fluid">
          <div class="main-cart-section">
            <div class="container-fluid">
              <h1 class="pt-4">Cart</h1>
              <div class="row mt-4 mb-5">
                <div class="col-lg-8 ">
                  <div class="cart-section p-4">
                    <div class="row cart-main">
                      <div class="col-lg-3 col-md-3 col-sm-4"><img src={process.env.PUBLIC_URL + "pictures/Rectangle 98.png"} alt="" />
                      </div>
                      <div class="col-lg-9 col-md-9 col-sm-8">
                        <div class="head-price">
                          <h5>Playboy Endless Night</h5>
                          <h4>RS 1000</h4>
                        </div>
                        <div class="cart-quantity mt-3">
                          <h5>Quantity</h5>
                          <div class="wrapper">
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                          </div>
                        </div>
                        <div><button class="rmv-btn mt-4">Remove</button></div>
                      </div>
                    </div>
                    <div class="dashed-border"></div>
                    <div class="row cart-main">
                      <div class="col-lg-3 col-md-3 col-sm-4"><img src={process.env.PUBLIC_URL + "pictures/Rectangle 98.png"} alt="" /></div>
                      <div class="col-lg-9 col-md-9 col-sm-8">
                        <div class="head-price">
                          <h5>Playboy Endless Night</h5>
                          <h4>RS 1000</h4>
                        </div>
                        <div class="cart-quantity mt-3">
                          <h5>Quantity</h5>
                          <div class="wrapper">
                            <span class="minus">-</span>
                            <span class="num">01</span>
                            <span class="plus">+</span>
                          </div>
                        </div>
                        <div><button class="rmv-btn mt-4">Remove</button></div>
                      </div>
                    </div>
                    <div class="dashed-border"></div>
                  </div>
                </div>
                <div class="col-lg-4 pt-1">
                  <div class="coupon-section mb-3">
                    <h5 class="mb-3">Apply coupon</h5>
                    <form action="">
                      <input type="text" placeholder="coupon code" class="coupon-input" />
                      <input type="submit" value="Apply" class="coupon-btn" />
                    </form>
                  </div>
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
                        <h5>GST</h5><span>1000</span>
                      </div>
                      <div class="mb-2 mt-4">
                        <div class="new2"></div>
                      </div>
                      <div class="product-price">
                        <h5>Sub Total</h5><span>3000</span>
                      </div>
                    </div>
                    <button class="payment-btn mt-5"> <Link to="/checkout">Proceed to Checkout</Link> </button>
                  </div>
                </div>
              </div>
            </div>
            <div class=" Related-product-section">
              <h3>You may also like</h3>
              <p>View more</p>
            </div>
            <div class="">
              <div class="row text-center mt-2 mb-5">

                <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                  <div class="card mt-3 mb-2">
                    <img src={process.env.PUBLIC_URL + "pictures/img1.png"} alt="" />

                    <h2 class="card-title mb-2">
                      Channel perfum
                    </h2>
                    <p>
                      Lorem ipsum Lorem ipsum Lorem
                    </p>
                    <div class="price-buy pt-3 pb-3">
                      <div class="price">
                        RS 1250
                      </div>
                      <div>
                        <button>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                  <div class="card mt-3 mb-2">
                    <img src={process.env.PUBLIC_URL + "pictures/img2.png"} alt="" />

                    <h2 class="card-title mb-2">
                      Channel perfum
                    </h2>
                    <p>
                      Lorem ipsum Lorem ipsum Lorem
                    </p>
                    <div class="price-buy pt-3 pb-3">
                      <div class="price">
                        RS 1250
                      </div>
                      <div>
                        <button>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                  <div class="card mt-3 mb-2">
                    <img src={process.env.PUBLIC_URL + "pictures/img3.png"} alt="" />

                    <h2 class="card-title mb-2">
                      Channel perfum
                    </h2>
                    <p>
                      Lorem ipsum Lorem ipsum Lorem
                    </p>
                    <div class="price-buy pt-3 pb-3">
                      <div class="price">
                        RS 1250
                      </div>
                      <div>
                        <button>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                  <div class="card mt-3 mb-2">
                    <img src={process.env.PUBLIC_URL + "pictures/img4.png"} alt="" />

                    <h2 class="card-title mb-2">
                      Channel perfum
                    </h2>
                    <p>
                      Lorem ipsum Lorem ipsum Lorem
                    </p>
                    <div class="price-buy pt-3 pb-3">
                      <div class="price">
                        RS 1250
                      </div>
                      <div>
                        <button>Buy Now</button>
                      </div>
                    </div>
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

export default Cart;