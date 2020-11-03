import React, { useContext } from 'react';
import { ProductsDataContext } from '../../context'
import EmptyCart from './EmptyCart'
import CartDetails from './CartDetails'

const Cart = () => {
  const value = useContext(ProductsDataContext)
    return (
      <>
        {value.state.cart.length > 0 ? <CartDetails /> : <EmptyCart />}
     </>
    );
}

export default Cart;
