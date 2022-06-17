import React, { Component } from 'react';



import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Productdetails extends Component {
  render() {
    return (
      <>
        <Header />
  <div class="container-fluid mt-5">
    <div class="main-product-details">
      <div class="container">
    <div class="row ">
      <div class="col-lg-5 ">
        <div class="main-product">
        <img src={process.env.PUBLIC_URL+"pictures/Rectangle 87.png"} alt="" />


        </div>
        <div class="more-product text-center mt-3">
        <img src={process.env.PUBLIC_URL+"pictures/Rectangle 633.png"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Rectangle 633.png"} alt="" />
          <img src={process.env.PUBLIC_URL+"pictures/Rectangle 633.png"} alt="" />
         
        </div>
      </div>
      <div class="col-lg-7">
        <div class="product-details">
          <h3>Playboy Endless Night</h3>
          <p class=" pt-3 pe-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          <h4 class="pb-3">RS. 849</h4>
        <div class="qunt-main">
          <div class="quantity">
          <h5>Quantity</h5>
          <div class="wrapper">
            <span class="minus">-</span>
            <span class="num">01</span>
            <span class="plus">+</span>
          </div>
          
        </div>
      </div>
          <div class="add-to-cart-whishlist mt-5">
            <button class="btn-1"> <Link to="/cart">Add to cart</Link></button>
            <button className="btn-2">
            <img src={process.env.PUBLIC_URL+"pictures/noun-love-4726271.svg"} alt="" />
            </button>
          </div>
          <div class="buy-now-btn mt-4">
          <button>  <Link to="/checkout">Buy it now</Link></button>
          </div>
    
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>


  <div class="container mt-5 mb-5">
    <section id="tabs">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
            role="tab" aria-controls="nav-home" aria-selected="false">
            Description
          </button>
          <button class="nav-link " id="nav-luxury-tab" data-bs-toggle="tab" data-bs-target="#nav-luxury"
            type="button" role="tab" aria-controls="nav-luxury" aria-selected="true">
            Customer reviews
          </button>
          <button class="nav-link" id="nav-prestige-tab" data-bs-toggle="tab" data-bs-target="#nav-prestige"
            type="button" role="tab" aria-controls="nav-prestige" aria-selected="false">
            Key features
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="container mt-4 mb-4">
            <div class="row">

              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore

            </div>
          </div>
        </div>
        <div class="tab-pane fade " id="nav-luxury" role="tabpanel" aria-labelledby="nav-luxury-tab">
          <div class="container mt-4 mb-4">
            <div class="row">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-prestige" role="tabpanel" aria-labelledby="nav-prestige-tab">
          <div class="container mt-4 mb-4">
            <div class="row">

              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>



  <div class="container mt-5 Related-product-section">
    <h3>Related Products</h3>
    <p>View more</p>

  </div>
  <div class="container">
    <div class="row text-center mt-2 mb-5">

      <div class="col-lg-3 col-md-6 col-sm-6 text-center">
        <div class="card mt-3 mb-2">
        <img src={process.env.PUBLIC_URL+"pictures/img1.png"} alt="" />
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
        <img src={process.env.PUBLIC_URL+"pictures/img2.png"} alt="" />
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
        <img src={process.env.PUBLIC_URL+"pictures/img3.png"} alt="" />
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
        <img src={process.env.PUBLIC_URL+"pictures/img4.png"} alt="" />
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
        <Footer />
      </>
    )
  }
}

export default Productdetails;