import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
 import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
 import { removeSelectedProduct, selectedProduct } from '../redux/action/productAction';
import { Loader } from './loading';

const ProducDetails = () => {
    const {productId} = useParams()
    const {product} = useSelector(state => state)
    const {image,title,price,category,description} = product
     const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(e => console.log("Error: ", e.message))
        dispatch(selectedProduct(response.data))
      console.log(product);
    }
useEffect(() => {
   if(productId && productId !== "") fetchProductDetail()
    return( () => {
        dispatch(removeSelectedProduct())
    })
}, [productId])
  
   return(
       <div className ="ui grid container">
         {Object.keys(product).length === 0 ? (
            <Loader/>
         ) : (

                         <div className="ui segment">
                         <div className="ui two column very relaxed grid">
                          <div className="column">
                           <img className ='ui image' src={image} alt={title} />
                            </div>
                            <div className="column">
                           <h1>{title}</h1>
                         <h2>
                             <a className ="ui teal tag label">${price}</a>
                         </h2>
                         <h3 className ="ui brown block header">{category}</h3>
                         <p>{description}</p>
                         <div className="ui vertical animated button" tabindex="0">
                         <div className="hidden content">Shop</div>
                           <i className="shop icon"></i>
                           <div className="visible content "> Add to Cart </div>
                                  </div>
                             </div>
                             </div>
                         <div className ="ui vertical divider">
                          And
                             </div>
                         </div>



         )
         }   
       </div>
    )
}
export default ProducDetails;