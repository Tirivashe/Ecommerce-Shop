import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductsDataContext } from '../context'
import {Card, CardActionArea, CardActions, CardMedia, Typography, Button, makeStyles } from '@material-ui/core';
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
  const { handleDetails, addToCart, openModal } = value
  const { id, title, img, price, inCart } = product
  const classes = useStyles()

  return (
    <Card onClick={()=> handleDetails(id)}>
      <Link to='/details' className={classes.link}>
        <CardActionArea>
          <CardMedia className={classes.img} image={img} title={title}/>
        </CardActionArea>
      </Link>
      <CardActions className={classes.gridActionsContainer}>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h5'>${price}</Typography>
        <Button 
          disabled={inCart && true} 
          onClick={()=> { 
            addToCart(id); 
            openModal(id); }}
        >
          {inCart ? 'In Cart' : 'Add To Cart'}
        </Button>
      </CardActions>
    </Card>
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
