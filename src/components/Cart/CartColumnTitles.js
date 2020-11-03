import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0rem 2.5rem 0rem 2.5rem',
    border: 'solid 1px black',
    textAlign: 'center'
  }
}))

const CartColumnTitles = () => {
  const classes= useStyles()

  return (
    <Grid container direction="row" justify="space-between" spacing={3} className={classes.container}>
      <Grid item>
        <Typography>Product</Typography>
      </Grid>
      <Grid item>
        <Typography>Product Name</Typography>
      </Grid>
      <Grid item>
        <Typography>Price</Typography>
      </Grid>
      <Grid item>
        <Typography>Quantity</Typography>
      </Grid>
      <Grid item>
        <Typography>Remove</Typography>
      </Grid>
      <Grid item>
        <Typography>Total</Typography>
      </Grid>
    </Grid>
  );
}

export default CartColumnTitles;
