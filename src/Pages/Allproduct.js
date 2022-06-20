import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Allproduct extends Component {
  render() {
    return (
      <>
        <Header />
        
        <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/pictures/banner.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/pictures/banner.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/pictures/banner.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-3 sidebar-contect" id="side">
        <div class="scroll-div-side">
          <div class="category-filter ">
          <ul class="nav flex-column">  

           <span onclick="openside()">   <img src="/pictures/Cancel-icon.png" alt=""/></span> 
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Catogories</u></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fragnance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skin Care & Beauty</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Accessories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home Fragrance </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Apparels </a>
            </li>
          </ul>
        </div>
        <div class="brands-filter">
          <ul class="nav flex-column">  
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Brands</u></a>
            </li>
           
              <div class="scroll-div">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      4711
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Alyssa 
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Ashley
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Aramis
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Aspen
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Bahama
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Baomi 
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Bentley
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Betty
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Barclay
                    </li>
                  </ul>
            </div>
        
          </ul>
        </div>
       
        <div class="price-filter">
          <ul class="nav flex-column">  
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Price</u></a>
            </li>
            <div class="scroll-div">
            <ul class="list-group">
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 0-499
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 500-999
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 1000-1999
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 2000-3999
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 4000-10000
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 10000-15000
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 15000-20000
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 20000 & above
              </li>
            </ul>
          </div>
          </ul>
        </div>
        <div class="size-filter mb-5">
          <ul class="nav flex-column">  
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Size</u></a>
            </li>
            <div class="scroll-div">
            <ul class="list-group">
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                4711
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Alyssa 
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Ashley
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Aramis
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Aspen
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Bahama
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Baomi 
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Bentley
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Betty
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Barclay
              </li>
            </ul>
            </div>
          </ul>
        </div>
        </div>
        </div>
      
        <div class="col-lg-10 col-md-9 main-content" >
          
          <h1 class="mb-4">
            Product list
          </h1>
          <div class="container-fluid ">
            <div class="row main-row">
            <div class="row sorting-section">
              

              <div class="main-box">
                <div class="box1 "> <p> VIEW AS <img src="/pictures/Group 46.svg"  alt=""/> <img src="/pictures/Group 45.svg"  alt=""/></p> </div>
                <div class="box2 "><p>ITEMS PER PAGE:50</p></div>
                <div class="box3 "><select class="form-select form-filter" aria-label="Default select example">
                  <option selected>Default Sorting</option>
                  <option value="1">Popularity</option>
                  <option value="2">Low</option>
                  <option value="3">High</option>
                </select></div>
                <div class="box4 " ><p><span onclick="openside()"><img src="/pictures/filter.png" width="10%" alt=""/>&nbsp;&nbsp;Filter</span></p></div>
            </div>

                
            
            </div>
          </div>
            <div class="row text-center mt-2 mb-5">
              <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                <div class="card mt-3 mb-2">
                  <img src="/pictures/img1.png" alt=""/>
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
                      <button><a href="productdetail.html">Buy Now</a></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                <div class="card mt-3 mb-2">
                  <img src="/pictures/img2.png" alt=""/>
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
                  <img src="/pictures/img3.png" alt=""/>
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
                  <img src="/pictures/img4.png" alt=""/>
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
                  <img src="/pictures/img1.png" alt=""/>
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
                  <img src="/pictures/img2.png" alt=""/>
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
                  <img src="/pictures/img3.png" alt=""/>
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
                  <img src="/pictures/img4.png" alt=""/>
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
                  <img src="/pictures/img1.png" alt=""/>
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
                  <img src="/pictures/img2.png" alt=""/>
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
                  <img src="/pictures/img3.png" alt=""/>
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
                  <img src="/pictures/img4.png" alt=""/>
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
    
    </div>
    

       
        <Footer />
      </>
    )
  }
}

export default Allproduct;