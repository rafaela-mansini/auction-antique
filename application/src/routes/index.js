import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products/:id" component={ProductDetail} />
    </Switch>
  );
}

export default Routes;