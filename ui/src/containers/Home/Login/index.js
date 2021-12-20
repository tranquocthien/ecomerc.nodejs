import { makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './style.scss';
import { changeLoginState, setCredentials } from '../../../actions/users';

const authenticate = (dispatch) => {
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  axios.post('/api/v1/auth/login', { email, password }).then((res) => {
    localStorage.setItem('token', res.data.accessToken);
    setCredentials(dispatch);
  });
};

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // useEffect Hook

  useEffect(() => {
    if (user.credentials) {
      location.replace('/');
      changeLoginState(dispatch);
    }
  }, [user]);

  const handleAuthenticate = (e) => {
    e.preventDefault();
    authenticate(dispatch);
  };

  return user.isLogin ? (
    location.replace('/profile')
  ) : (
    <div className="login">
      <form className="box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input email"
              type="email"
              placeholder="Email input"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left">
            <input
              className="input password"
              type="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              type="button"
              onClick={(e) => {
                handleAuthenticate(e);
              }}
            >
              Đăng Nhập
            </button>
          </div>
        </div>
      </form>
      <br />
      <div className="content">
        <h2>Chưa có tài khoản?</h2>
        <Link className="button is-primary" to="/register">
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default Login;
