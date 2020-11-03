import React, { useContext } from 'react';
import { ProductsDataContext } from '../context'
//import { Link } from 'react-router-dom'
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import Title from './Title'
import NavButton from './NavButton'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '20px'
  },
  img: {
    height: '28rem'
  }
}))

const Details = () => {
  const classes = useStyles()
  const value = useContext(ProductsDataContext)
  const { id, title, img, price, company, info, inCart} = value.state.details
  console.log(value)
  return (
   <Grid container justify='center' alignItems='center' className={classes.container}>
    <Grid item xs={12}>
      <Title title={title}/>
    </Grid>
    <Grid container item xs={8} spacing={6}>
      <Grid item xs={6}>
        <img src={img} alt='' className={classes.img}/>
      </Grid>
      <Grid container item xs={6} direction='column' justify='center' alignItems='center' spacing={3}>
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{company}</Typography>
        </Grid>
        <Grid item>
          <Typography>{price}</Typography>
        </Grid>
        <Grid item>
          <Typography>{info}</Typography>
        </Grid>
        <Grid container item direction='row' justify="space-evenly">
          <Grid item>
            <NavButton route='' title='Back To Products'/>
          </Grid>
          <Grid item>
            <Button disabled={inCart && true} onClick={()=> value.addToCart(id)}>{inCart ? "In Cart " : "Add To Cart"}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
   </Grid>
  );
}

export default Details;
