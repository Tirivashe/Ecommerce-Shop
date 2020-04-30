import React from 'react';
import { Link } from 'react-router-dom'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles= makeStyles(theme => ({
  img: {
    height: '22.7rem'
  },
  link: {
    textDecoration: 'none'
  }
}))

const Products = ({product}) => {
  const { id, title, img, price, company, info, inCart, count, total } = product
  const classes = useStyles()
  return (
    <Link to='/details' className={classes.link}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.img} image={img} title={title}/>
        </CardActionArea>
        <CardActions>
        <Typography>{title}{price}</Typography>
        </CardActions>
      </Card>
    </Link>
  );
}

export default Products;
