import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Category from './Category';
import Login from './Login';
import Product from './Product';
import Register from './Register';
import './style.scss';
import Welcome from './Welcome';
import Loading from '../../components/Loading';
import { onSuccess } from '../../actions/status';
import Profile from './Profile';

const Home = () => {
  const status = useSelector((state) => state.status);
  const { isLoading } = status;

  const dispatch = useDispatch();

  useEffect(() => {
    if (status.isLoading === false) {
      setTimeout(() => {
        onSuccess(dispatch);
      }, 2000);
    }
  }, [isLoading]);

  return (
    <div className="home">
      {status.isLoading && <Loading />}
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/:tenDanhMuc" exact>
          <Category />
        </Route>
        <Route path="/:tenDanhMuc/product/:id" exact>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
