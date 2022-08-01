import React, { useEffect, useState } from "react";
import "./ProductCategory.scss";
import { setAllitem } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProductCategory = () => {
  const dispatch = useDispatch();
  const [productArray, setProductArray] = useState({});
  const navigate = useNavigate();

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    dispatch(setAllitem(data));
    let men = data.find((item) => item.category === "men's clothing");
    let women = data.find((item) => item.category === "women's clothing");
    let electronics = data.find((item) => item.category === "electronics");
    let jewelery = data.find((item) => item.category === "jewelery");

    let product = {
      women: {
        id: "women",
        image: women?.image,
        text: "Show Women",
        title: women?.title.substring(0, 12),
      },
      men: {
        id: "men",
        image: men?.image,
        text: "Show Men",
        title: men?.title.substring(0, 12),
      },
      electronics: {
        id: "electronics",
        image: electronics?.image,
        text: "Show Electronics",
        title: electronics?.title.substring(0, 12),
      },
      jewelery: {
        id: "jewelery",
        image: jewelery?.image,
        text: "Show Jewelery",
        title: jewelery?.title.substring(0, 12),
      },
    };
    setProductArray(product);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section  className="product__category" aria-labelledby="product-category-card">
        <article onClick={()=>navigate('/product/women')} id="product-category-card" className="product__category_card">
          <img
            className="product__category_image"
            src={productArray?.women?.image}
            alt="women"
          />
          <div className="product__category_content">
            <h5 className="product__category_title">Show Women</h5>
            <p className="product__category_price"> Lorem ipsum dolor</p>
          </div>
        </article>
        <article onClick={()=>navigate('/product/men')} className="product__category_card">
          <img
            className="product__category_image"
            src={productArray?.men?.image}
            alt="men"
          />
          <div className="product__category_content">
            <h5 className="product__category_title">Show Men</h5>
            <p className="product__category_price"> Lorem ipsum dolor</p>
          </div>
        </article>
        <article onClick={()=>navigate('/product/jewelery')} className="product__category_card">
          <img
            className="product__category_image"
            src={productArray?.jewelery?.image}
            alt="jewelery"
          />
          <div className="product__category_content">
            <h5 className="product__category_title">Show Jewelery</h5>
            <p className="product__category_price"> Lorem ipsum dolor</p>
          </div>
        </article>
        <article onClick={()=>navigate('/product/electronics')} className="product__category_card">
          <img
            className="product__category_image"
            src={productArray?.electronics?.image}
            alt="electronics"
          />
          <div className="product__category_content">
            <h5 className="product__category_title">Show Electronics</h5>
            <p className="product__category_price"> Lorem ipsum dolor</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProductCategory;
