import React, { createContext, useState } from 'react';
import { storeProducts, detailProduct } from './data'

export const ProductsDataContext = createContext()

const handleDetails = () => {
  console.log("Details function has run")
}

const addToCart = () => {
  console.log("Item added to cart")
}

const ProductsDataProvider = props => {
  const [state, setState] = useState({storeProducts, detailProduct});
  return (
    <ProductsDataContext.Provider value={{state, addToCart, handleDetails}}>
      {props.children}
    </ProductsDataContext.Provider>
  );
}

export default ProductsDataProvider;
