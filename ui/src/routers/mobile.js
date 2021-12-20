import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/mobile/index';

const routes = (
  <Route>
    <Route path="/" component={Home} />
  </Route>
);

export default routes;
