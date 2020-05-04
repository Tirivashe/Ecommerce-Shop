import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductsDataContext } from '../context'
import {Card, CardActionArea, CardActions, CardMedia, Typography, Button, makeStyles } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types'

const useStyles= makeStyles(theme => ({
  img: {
    height: '22.7rem'
  },
  link: {
    textDecoration: 'none'
  },
  gridActionsContainer: {
    justifyContent: 'space-around'
  },
  addToCartBtn: {
    transition: 'all 0.5sec ease-in ease-out',
    '&:hover': {
      color: 'white',
      background: '#1c95ff'
    }
  }
}))

const Product = ({ product }) => {
  const value = useContext(ProductsDataContext)
  const { handleDetails } = value
  const { id, title, img, price, company, info, inCart, count, total } = product
  const classes = useStyles()

  return (
    <Link to='/details' className={classes.link}>
      <Card onClick={()=> handleDetails(id)}>
        <CardActionArea>
          <CardMedia className={classes.img} image={img} title={title}/>
          <ShoppingCartOutlined className={classes.addToCartBtn}/>
        </CardActionArea>
        <CardActions className={classes.gridActionsContainer}>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='h5'>${price}</Typography>
        </CardActions>
      </Card>
    </Link>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    company: PropTypes.string,
    info: PropTypes.string,
    inCart: PropTypes.bool,
    count: PropTypes.number,
    totat: PropTypes.number
  }).isRequired
}

export default Product;
