import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import ProductDetail from 'pages/ProductDetail';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/products" exact component={Home} />
      <Route path="/products/:id" component={ProductDetail} />
    </Switch>
  );
}

export default Routes;