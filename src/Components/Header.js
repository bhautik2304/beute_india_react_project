import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navhead">
        <div className="logoo">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "pictures/header-logo.png"}
              alt=""
            />
          </Link>
        </div>
        <ul className="navhead-links" id="myDIV">
          <li>
            <div className="wrapper">
              <div className="container searchcontainer">
                <div className="search_wrap search_wrap_1">
                  <div className="search_box">
                    <input
                      type="text"
                      className="input-search"
                      placeholder="SEARCH"
                    />
                    <div className="btn btn_common">
                      <Link to="">
                        <img
                          src={process.env.PUBLIC_URL + "pictures/search.svg"}
                          className="search-img"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/productdetail">
              <img
                src={process.env.PUBLIC_URL + "pictures/whishlist.svg"}
                className="heart-img"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                src={process.env.PUBLIC_URL + "pictures/cart.svg"}
                className="cart-img"
                alt=""
              />
            </Link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Paras
            </a>
            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        className="search-head"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <img src={process.env.PUBLIC_URL + "pictures/search.svg"} />
        <i class="bi primary bi-search"></i>
      </div>
      <div
        className="hamburger"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* side bar */}
      <div
        class="offcanvas offcanvas-start sidebar-color w-50"
        data-bs-scroll="true"
        data-bs-backdrop="true"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white ">
          <a
            href="/"
            class="d-flex align-items-center mb-1 mt-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-4">BEAUTE INDIA</span>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li className="mb-3">
              <Link to="/cart" className="text-white side-content">
                Wishlist
              </Link>            </li>
            <li>
              <Link to="/cart" className="text-white side-content">
                Cart
              </Link>
            </li>
            {/* <li>
              <a href="#" class="nav-link text-white"></a>
            </li>
            <li>
              <a href="#" class="nav-link text-white"></a>
            </li> */}
          </ul>
          <hr />
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              /> */}
              <strong>Paras</strong>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End side bar */}
      <script src="../main.js"></script>
    </>
  );
}
export default Header;
