import React, { useContext } from 'react';
import Title from './Title'
import { Grid, makeStyles } from '@material-ui/core'
import { ProductsDataContext } from '../context'
import Product from './Product'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '20px'
  }
}))

const ProductList = () => {
  const { state } = useContext(ProductsDataContext) //destructuring the data from the context
  const classes = useStyles()
    return (
        <>
          <Grid container justify='center' alignItems='center' className={classes.container}>
            <Grid item className={classes.title} xs={12}>
              <Title title='Products'/>
            </Grid>
            <Grid container item wrap='wrap' spacing={3} xs={12}>
              {state.products.map(product => (
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
