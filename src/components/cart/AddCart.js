import React, { useState } from "react";
import "./Cart.scss";
import trash from "../../assets/Icons/trash-2.svg";
import edit from "../../assets/Icons/edit-2.svg";
import { useSelector, useDispatch } from "react-redux";
import { increaseQt, decreaseQt, remove } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = (props) => {
  const carts = useSelector((state) => state.cart_reducer.cart);
  const [id, setId] = useState([]);
  let priceAndQuantity = carts?.map((item) => {
    return { price: item.price, quanity: item.quantity };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleHeart = (e, index) => {
    const indexFound = id.indexOf(index);
    if (indexFound > -1) {
      let a = id;
      a.splice(indexFound, 1);
      setId([...id, a]);
    } else {
      setId([...id, index]);
    }
  };
  return (
    <>
      {carts.map((cart) => {
        return (
          <div
            className="cart__product_wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1"
            key={cart.id}
          >
            <div className="product__wrapper_left aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--1">
              <img
                src={cart.image}
                alt="cart titile here"
                className="cart__img"
              />
              <div className="content-wrapper">
                <h2>{cart.category}</h2>
                <p>Size: Medium</p>
                <p>Color: Medium</p>
                <p>{cart.price}</p>
              </div>
            </div>
            <div className="product__wrapper_right aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--1">
              <div className="button__qty">
                <button
                  type="button"
                  className="button__qty_btn"
                  onClick={() => dispatch(decreaseQt(cart.id))}
                >
                  -
                </button>
                <input
                  className="button__qty_input"
                  type="string"
                  value={cart.quantity}
                  id="numbr"
                />
                <button
                  className="button__qty_btn"
                  onClick={() => dispatch(increaseQt(cart.id))}
                >
                  +
                </button>
              </div>
              <div className="cart_edit">
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/product/${cart.id}`);
                  }}
                >
                  <img src={edit} alt="edit icon" /> Edit
                </button>
                <button type="button" onClick={() => dispatch(remove(cart.id))}>
                  <img src={trash} alt="trash icon" /> Remove
                </button>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="17"
                    height="17"
                    viewBox="0 0 22.903 20.232"
                    onClick={(e) => handleHeart(e, cart.id)}
                  >
                    <path
                      id="heart"
                      d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                      transform="translate(-0.549 -1.998)"
                      fill={id.includes(cart.id) ? "#333" : "none"}
                      stroke="#172026"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Save for later
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AddProduct;
