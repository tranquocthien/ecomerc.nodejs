import './App.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './containers/Home/Header';
import HeaderAdmin from './containers/Admin/Header';
import Admin from './containers/Admin';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin">
          <HeaderAdmin />
          <Admin />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
