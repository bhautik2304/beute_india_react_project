import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

 function Header() {
  return (
    <>
              <div class="navhead">
      <div class="logoo">
      <Link to="/"><h1> BEAUT INDIA</h1></Link>
      </div>
      <ul class="navhead-links" id="myDIV">
        <li>
          <div class="wrapper">
            <div class="container searchcontainer">
              <div class="search_wrap search_wrap_1">
                <div class="search_box">
                  <input type="text" class="input-search" placeholder="SEARCH" />
                  <div class="btn btn_common"><Link to="">
                  <img src={process.env.PUBLIC_URL+"pictures/Group 1.svg"} class="search-img" alt="" />
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
        
        <Link to="/productdetail">
          <img src={process.env.PUBLIC_URL+"pictures/noun-love-4726271.svg"} class="heart-img" alt="" />
         </Link>
          
        </li>
        <li>
        <Link to="/cart">
          <img src={process.env.PUBLIC_URL+"pictures/Path 39.svg"} class="cart-img" alt="" />
          </Link>
        </li>
        <li class="nav-item dropdown user">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Paras
          </a>
        </li>
      </ul>

      <div class="hamburger" onclick="myFunction()">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </>
  )
}

export default Header;