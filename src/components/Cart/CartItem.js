import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core'
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0rem 2.5rem 0rem 2.5rem',
    border: 'solid 1px black',
    textAlign: 'left'
  }
}))

const CartItem = ({ product, value }) => {
  const classes= useStyles()
  const { title, img, price, count, total } = product
  //const { increment, decrement, removeCartItem } = value
  return (
    <Grid container direction="row" justify="space-between" spacing={3} className={classes.container}>
      <Grid item>
        <img src={img}  alt="Image" style={{ width: '4rem', height: '5rem', objectFit: "cover" }}/>
      </Grid>
      <Grid item>
        <Typography>Product: {title}</Typography>
      </Grid>
      <Grid item>
        <Typography>{price}</Typography>
      </Grid>
      <Grid container item justify="space-between" xs={1}>
        <Grid item>
          <Button>-</Button>
        </Grid>
        <Grid item>
          <Typography>{count}</Typography>
        </Grid>
        <Grid item>
          <Button>+</Button>
        </Grid>
      </Grid>
      <Grid item>
        <Button><Delete /></Button>
      </Grid>
      <Grid item>
        <Typography>{total}</Typography>
      </Grid>
    </Grid>
  );
}

export default CartItem;
