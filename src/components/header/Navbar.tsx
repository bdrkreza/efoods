import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/logo.png";
import { AppState } from "../../services/redux/stores";
import CartItems from "../cartItem/CartItems";
export default function Navbar() {
  const cart = useSelector((state: AppState) => state.cart);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCartItem, setOpenCartItem] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={brandLogo} alt="" />
          </a>

          <div className="collapse navbar-collapse " id="navbarResponsive">
            <ul className="navbar-nav ms-auto mr-5">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  menu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Foods
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Review
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <ul className=" d-flex justify-content-evenly justify-content-center nav-bar">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <li
              className="nav-item"
              onClick={() => setOpenSearchBar(!openSearchBar)}
            >
              <a className="nav-link" href="#">
                <BsSearch />
              </a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link" href="#">
                <FiLogIn />
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => setOpenCartItem(!openCartItem)}
            >
              <a href="#" className="nav-link">
                <div className="shoppingbasket">
                  <div className="top-bar"></div>
                  <div className="bottom-bar"></div>
                  <div className="left-bar"></div>
                  <div className="right"></div>
                  <div className="basketitems">
                    <h5>{cart.length}</h5>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {openCartItem ? <CartItems /> : null}

        {openSearchBar ? (
          <div className="search-form">
            <input type="search" id="search-box" placeholder="search here..." />
            <label htmlFor="search-box" className="search-icon">
              <BsSearch />
            </label>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
