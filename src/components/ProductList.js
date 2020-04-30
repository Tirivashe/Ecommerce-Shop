import React, { useContext } from 'react';
import Title from './Title'
import { Grid, makeStyles } from '@material-ui/core'
import { ProductsDataContext } from '../context'
import Product from './Product'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '2rem',
  },
  itemsContainer: {
    
    border: '1px solid black' 
  },
  item: {
    border: '1px solid black'
  }
}))

const ProductList = () => {
  const { state } = useContext(ProductsDataContext) //destructuring the data from the context
  const classes = useStyles()
    return (
        <>
          <Grid container justify='center' alignItems='center'>
            <Grid item className={classes.title} xs={12}>
              <Title title='Products'/>
            </Grid>
            <Grid container item wrap='wrap' spacing={3} xs={12}>
              {state.storeProducts.map(product => (
                <Grid item xs={12} md={6} lg={3} key={product.id}>  
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </>
    );
}

export default ProductList;
