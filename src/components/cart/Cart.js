import React, { useState } from "react";
import "./Cart.scss";
import chevron from "../../assets/Icons/chevron-down.svg";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EmptyCart from "../common-component/empty-cart/EmptyCart";
import AddCart from "./AddCart";

const Cart = () => {
  const carts = useSelector((state) => state.cart_reducer.cart);
  let priceAndQuantity = carts?.map((item) => {
    return { price: item.price, quantity: item.quantity };
  });
  let totalSum = priceAndQuantity
    ?.map((i) => i.price * i.quantity)
    ?.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  const navigate = useNavigate();

  return (
    <>
      <section className="cart__wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1" aria-labelledby="shopping-cart-title">
        <header>
        <Link to="/"><h2 className="cart__shopping_bag" id="shopping-cart-title">Shopping Bag</h2> </Link>
        </header>
        <aside className="cart__left aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
          {carts.length !==0 ? <AddCart carts={carts}/> : <EmptyCart/>}
        </aside>
        <aside className="cart__right aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
          <div className="product__summary_wrapper">
            <strong>Pricing Summary</strong>
            <ul className="product__summary_content">
              <li>Subtotal</li>
              <li>${totalSum}</li>
            </ul>
            <ul className="product__summary_content">
              <li>Coupon</li>
              <li>$77.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Gift Card</li>
              <li>$100.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Estimated Tax</li>
              <li>$28.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Estimated Shopping</li>
              <li>Free</li>
            </ul>
            <ul className="product__summary_content">
              <li style={{ fontWeight: "bold" }}>Estimated Total</li>
              <li style={{ fontWeight: "bold" }}>${totalSum + 100 + 28}</li>
            </ul>
            <div className="product__checkout_button">
              <button type="button" className="product__checkout_btn" disabled={carts.length === 0} onClick={() => navigate("/checkout")}>CHECKOUT </button>
              <button type="button" className="product__checkout_paypal" onClick={() => navigate("/checkout")}>
              <img src={require("../../assets/images/paypal-btn.png")} alt="Paypal" />
              </button>
            </div>
          </div>
        </aside>
      </section>
      <section className="select__wrapper" >
        <ul className="select__wrapper_list">
          <li>Estimate Your Shopping</li>
          <li>
            Shopping to 91001 <img src={chevron} alt="dropdown" />
          </li>
        </ul>
        <ul className="select__wrapper_list">
          <li>Enter a Coupon code</li>
          <li>
            20% discount applied <img src={chevron} alt="dropdown" />
          </li>
        </ul>
        <ul className="select__wrapper_list">
          <li>Apply Gift Card </li>
          <li>
            <img src={chevron} alt="dropdown" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Cart;
