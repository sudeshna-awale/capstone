import React from 'react';
import ProductList from '../components/product-list/ProductList';
import FooterUp from '../components/footer/footer-up/FooterUp';
import ShopBanner from '../components/shop-banner/ShopBanner';

const Product = () => {
  return (
    <>
      <article>
        <ShopBanner/>
        <ProductList />
        <FooterUp/>
      </article>
    </>
  )
}

export default Product