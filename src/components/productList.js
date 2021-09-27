import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/action/productAction';
import axios from 'axios';
import ProductComponents from './productsComponents';

const ProductList = () => {
    const products = useSelector(state =>state)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(e => console.log("ERROR: " ,e.message))
        dispatch(setProduct(response.data))
        console.log(response.data);
    }

        useEffect( () => {
            fetchProducts()
        }, [])
    console.log(products);
   return(
       <div className ="ui grid container" style = {{paddingTop:"40px"}}>
           <ProductComponents/>
       </div>
   )
}

export default ProductList;