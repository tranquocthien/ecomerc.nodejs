import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faWindowClose,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './style.scss';
import useCategory from './useCategory';
import ItemCatagory from '../../../components/ItemCatagory';
import { setCart } from '../../../actions/cart';

const Header = () => {
  const categories = useCategory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClose = (e) => {
    e.preventDefault();
    document.querySelector('.sidebar').style.display = 'none';
  };

  const handleOpenSideBar = (e) => {
    e.preventDefault();
    document.querySelector('.sidebar').style.display = 'block';
  };

  const handleGetCart = () => {
    if (user.isLogin === true && user.credentials)
      return setCart(dispatch, user.credentials.email);
    return null;
  };

  return (
    <div className="header navbar is-black">
      <div className="left">
        {/* HOME */}
        <div className="welcome">
          <Link to="/">
            <i className="fas fa-home fa-2x" />
          </Link>
        </div>
      </div>
      <div className="middle">
        {/* SEARCH */}
        <input type="text" className="input" placeholder="Search" />
      </div>
      <div className="right">
        {/* USER */}
        <div className="user">
          <Link to="/login" className="faUser">
            <i className="fas fa-user fa-2x" />
          </Link>
        </div>
        {/* CART */}
        <div className="cart">
          <Link
            to="/cart"
            className="faShoppingCart"
            onClick={() => handleGetCart()}
          >
            <i className="fas fa-shopping-cart fa-2x" />
          </Link>
        </div>
        {/* BARS */}
        <div className="bars">
          <a href="#" onClick={(e) => handleOpenSideBar(e)}>
            <i className="fas fa-bars fa-2x" />
          </a>
        </div>
      </div>
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="overlay">
          <a
            href="#"
            onClick={(e) => {
              handleClose(e);
            }}
          >
            {}
          </a>
        </div>
        <div className="main-side panel is-light">
          <div className="close panel-heading">
            <a
              href="#"
              onClick={(e) => {
                handleClose(e);
              }}
            >
              <FontAwesomeIcon
                icon={faWindowClose}
                className="fa-window-close-header fa-2x"
              />
            </a>
          </div>
          <ul>
            <ItemCatagory categories={categories} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
