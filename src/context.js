import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data'

export const ProductsDataContext = createContext()

const handleDetails = () => {
  console.log("Details function has run")
}

const addToCart = () => {
  console.log("Item added to cart")
}

const ProductsDataProvider = props => {
  const [state, setState] = useState({products: [], details: detailProduct});

  useEffect(() => {
    passByValueData()
  },[])
  
  function passByValueData(){
    let tempProd = []
    storeProducts.forEach(prod => {
      const item = {...prod }
      tempProd = [...tempProd, item]
    })
    setState(() => {
      return {
        products: tempProd,
        details: detailProduct
      }
    })
  }

  return (
    <ProductsDataContext.Provider value={{state, addToCart, handleDetails}}>
      {props.children}
    </ProductsDataContext.Provider>
  );
}

export default ProductsDataProvider;
