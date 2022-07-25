import React from 'react';
import { Link } from 'react-router-dom';
import "./PageNotFound.scss"

const PageNotFound = () => {
  return (
    <>
        <div className='page__not_found'>
            <h4 className='not__found_title title'>Sorry! Page Not Found</h4>
            <Link className='not__found_goback title' to="/">Go Back to Main Page</Link>
        </div>
    </>
  )
}

export default PageNotFound