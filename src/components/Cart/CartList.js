import React, { useContext } from 'react';
import CartItem from './CartItem'
import { ProductsDataContext } from '../../context'

const CartList = () => {
  const value = useContext(ProductsDataContext)
  const cart = value.state.cart
  return (
    <div>
      {cart.map(product => (
        <CartItem key={product.id} product={ product } value={ value }/>
      )) }
    </div>
  );
}

export default CartList;
