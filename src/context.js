import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data'

export const ProductsDataContext = createContext()

const ProductsDataProvider = props => {
  const [state, setState] = useState({
    products: [], 
    details: detailProduct, 
    cart: [],
    modalProduct: detailProduct,
    modalOpen: false,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  });
  
  useEffect(() => {
    passByValueData()
  },[])

  const handleDetails = id => {
    const product = state.products.find(item => item.id === id)
    setState(prevState => {
      return{
        ...prevState,
        details: product
      }
    })
   }

   const addToCart = id => {
    const tempProds = [...state.products]
    const product = tempProds.find(item => item.id === id)
    product.inCart = true
    product.count = 1
    product.total = product.price //be sure to check here for any incorrect pricing calculations
    setState(prevState => {
      return {
        ...prevState,
        details: product,
        cart: [...prevState.cart, product]
      }
    })
  }

  const openModal = id => {
    const product = state.products.find(item => item.id === id)
    setState(prevState => {
      return{
        ...prevState,
        modalProduct: product,
        modalOpen: true
      }
    })
  }

  const closeModal = () => {
    setState(prevState => {
      return{
        ...prevState,
        modalOpen: false
      }
    })
  }

  const increment = id => {
    console.log("I've added")
  }

  const decrement = id => {
    console.log("I've removed")
  }

  const removeCartItem = id => {
    console.log("I've been removed")
  }

  const clearCart = () => {
    setState(prevState => {
      return {
        ...prevState,
        cart: []
      }
    })
  }

  // const addTotals = () => {
  //   let subTotal = 0
  //   state.cart.map(item => subTotal += item.total)
  //   const tempTax = subTotal * 0.1
  //   const tax = parseFloat(tempTax.toFixed(2))
  //   const total = subTotal + tax
  //   setState(prevState => {
  //     return {
  //       ...prevState,
  //       cartSubtotal: subTotal,
  //       cartTax: tax,
  //       cartTotal: total
  //     }
  //   })
  // }
  
  const passByValueData = () => {
    let tempProd = []
    storeProducts.forEach(prod => {
      const item = {...prod }
      tempProd = [...tempProd, item]
    })
    setState(prevState => {
      return {
        ...prevState,
        products: tempProd,
        details: detailProduct
      }
    })
  }

  return (
    <ProductsDataContext.Provider value={{state, addToCart, handleDetails, openModal, closeModal, increment, decrement, removeCartItem, clearCart }}>
      {props.children}
    </ProductsDataContext.Provider>
  );
}

export default ProductsDataProvider;
