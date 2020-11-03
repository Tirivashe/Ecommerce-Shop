import React from 'react';
import Title from '../Title'
import CartColumnTitles from './CartColumnTitles'
import CartList from './CartList'
import CartTotals from './CartTotals'

const Cart = () => {
    return (
      <>
        <Title title="Your Cart"/>
        <CartColumnTitles />
        <CartList />
        <CartTotals />
     </>
    );
}

export default Cart;
