import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data'

export const ProductsDataContext = createContext()

const addToCart = id => {
  console.log(`id is ${id}`)
}

const ProductsDataProvider = props => {
  const [state, setState] = useState({products: [], details: detailProduct});

  const handleDetails = id => {
    const product = state.products.find(item => item.id === id)
    setState({...state, details: product})
   }

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
