import { Grid, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { ProductsDataContext } from '../../context'

function CartTotals() {
  const { state, clearCart } = useContext(ProductsDataContext)
  const { cartSubtotal, cartTax, cartTotal } = state
  return (
    <>
      <Grid container xs={12} justify='flex-end'>
        <Grid item>
          <Link to="/">
            <Button onClick={clearCart}>Clear Cart</Button>
          </Link>
        </Grid>
        <Grid container direction="column" alignItems="flex-end">
          <Grid item>
            <Typography>Subtotal : {cartSubtotal}</Typography>
          </Grid>
          <Grid item>
            <Typography>Tax : {cartTax}</Typography>
          </Grid>
          <Grid item>
            <Typography>Total : {cartTotal}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CartTotals