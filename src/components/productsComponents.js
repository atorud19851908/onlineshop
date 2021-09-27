import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ProductComponents = () => {
    const products = useSelector(state =>state.allProducts.product)
      const renderList = products.map( (product) => {
          const {id,title,price,image} = product
          return(
             <div className="ui link cards" key = {id}>
              <div className="card" style = {{height:"450px",width:"250px" ,border: "2px solid black", margin:"5px"}}>
                <Link to = {`/product/${id}`}>
                <div className="content">
                <img className ='ui image' src={image} alt={title} style = {{width:"280px",height:"350px"}} />
                 </div>
                <div class="header">
                  {title}
                </div>
                <div className="meta">
                $ {price}
                </div>
                </Link>
              </div>
             </div>
          )
      })
   return(
      
   <>
   {renderList}
   </>
   )
}

export default ProductComponents;