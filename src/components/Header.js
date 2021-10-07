import React from 'react'
import { Link } from 'react-router-dom';

 export const Header = () => {
  return(
    <div className="ui pointing menu">
      <div className = " ui container">
        <Link to ="/">
       <p className = "active item">
    ONLINE SHOP
   </p>
   </Link>
   </div>
  <div className="right menu">
  <div className="ui vertical animated button" tabindex="0">
  <div className="hidden content">Shop</div>
  <div className="visible content">
    <i className="shop icon"/>
  </div>
  </div>
</div>
</div>   
  

   )

 }

 