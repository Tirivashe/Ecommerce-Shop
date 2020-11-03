import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Details from './components/Details'
import ProductModal from './components/ProductModal'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/cart' component={Cart}/>
        <Route path='/details' component={Details}/>
        <Route component={Default}/>
      </Switch>
      <ProductModal />
    </>
  );
}

export default App;
