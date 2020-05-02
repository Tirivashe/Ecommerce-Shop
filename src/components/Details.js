import React, { useContext } from 'react';
import { ProductsDataContext } from '../context'
import { Link } from 'react-router-dom'
import { Grid, Typography, makeStyles, CardMedia, Card, CardActionArea } from '@material-ui/core';
import Title from './Title'

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
  const { state } = useContext(ProductsDataContext)
  const { title, img, price, company, info} = state.details
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
      </Grid>
    </Grid>
   </Grid>
  );
}

export default Details;
