import React from 'react';
import { Link } from 'react-router-dom';
import "./EmptyCart.scss"

const EmptyCart = () => {
  return (
    <>
        <div className='empty__cart_wrapper'>
            <h4 className='empty__cart_title title'>Your Shopping Bag is Empty</h4>
            <Link className='empty__cart_go-back title' to="/">Go Back to Main Page</Link>
        </div>
    </>
  )
}

export default EmptyCart