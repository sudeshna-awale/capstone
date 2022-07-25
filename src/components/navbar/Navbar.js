import React, { useState } from "react";
import "./Navbar.scss";
import hamburgerIcon from "../../assets/Icons/align-justify.svg";
import timesIcon from "../../assets/Icons/x.svg";
import veniaLogo from "../../assets/images/venia_logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory } from "../../redux/actions/index";

const Navbar = () => {
  const state = useSelector((state) => state.cart_reducer.cart);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu === true ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <>
      <header className="navbar aem-Grid aem-Grid--default--12 aem-Grid--phone--1" aria-labelledby="main-nav">
        <nav className="navbar__nav" id="main-nav">
          <button
            className="navbar__nav-hamburger" onClick={handleClick}>
            <img src={hamburgerIcon} alt="hamburger" />
          </button>
          <div className="navbar__nav-logo">
            <Link to="/"><img src={veniaLogo} alt="Logo" width="140px"/></Link>
          </div>
          <div className={showMenu ? "navbar__nav_link active" : "navbar__nav_link"}>
            <div className="navbar__btn-close">
              <h2>Shop Categories</h2>
              <img aria-label="close" onClick={handleClick} src={timesIcon} alt="Button to close fliter bar" />
            </div>
            <ul>
              <li >
                <Link aria-current="page" to="/" target="_self" >Home</Link>
              </li>
              <li >
                <Link to="/product" target="_self" onClick={() => dispatch(filterCategory("All"))}>Shop</Link>
              </li>
              <li>
                <Link to="/product/women" target="_self" onClick={() => dispatch(filterCategory("women's clothing"))}>Women</Link>
              </li>
              <li>
                <Link to="/product/men" target="_self" onClick={() => dispatch(filterCategory("men's clothing"))}>Men</Link>
              </li>
              <li>
                <Link to="/product/electronics" target="_self" onClick={() => dispatch(filterCategory("electronics"))}>Smart Gear</Link>
              </li>
              <li>
                <Link to="/product/jewelery" target="_self" onClick={() => dispatch(filterCategory("jewelery"))}>Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="navbar__nav-cart">
            <Link to="/product/Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                <g id="shopping-bag" transform="translate(-2 -1)">
                  <path id="Path_38093" data-name="Path 38093" d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <line id="Line_555" data-name="Line 555" x2="18" transform="translate(3 6)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path id="Path_38094" data-name="Path 38094" d="M16,10a4,4,0,0,1-8,0" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
              <span className="cart__count">{state.length}</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
