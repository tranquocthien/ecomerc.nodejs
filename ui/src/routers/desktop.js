import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/desktop';
import Login from '../containers/desktop/Login';

const routes = (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Route>
);

export default routes;
