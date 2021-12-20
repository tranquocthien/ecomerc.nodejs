import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import _, { set } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import './style.scss';
import { setCart } from '../../../actions/cart';

const Section = ({ categories, action }) => {
  const [page, setPage] = useState(1);
  const [cardPage, setCardPage] = useState([]);
  const cart = useSelector((state) => state.cart);
  const prevCart = useRef();
  const user = useSelector((state) => state.user);
  const email = user.credentials && user.credentials.email;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!_.isEqual(cart, prevCart.current)) {
      if (action.type === 'paginate' && categories.length === 1) {
        setPage(action.page);
      }
      if (user.isLogin) {
        setCart(dispatch, email);
        prevCart.current = cart;
      }
    }
  }, [action, cart]);

  const handleMore = (e) => {
    e.preventDefault();
    const newPage = page + 1;
    setPage(newPage);
    const cardArr = cardPage;
    cardArr.push(
      <Card
        ownCategory={categories[0].ten}
        urlCategory={categories[0].url}
        action={{ ...action, page: newPage }}
      />
    );
    setCardPage(cardArr);
  };

  const category = categories.map((elm) => {
    return (
      <div className="section" key={elm.ten}>
        <div className="message-header">{elm.ten}</div>
        <div className="box">
          <div className="my-card">
            <Card
              ownCategory={elm.ten}
              urlCategory={elm.url}
              action={{ ...action, page }}
            />
            <div className="my-card">{cardPage}</div>
          </div>
          <div className="my-button">
            {action.type === 'newest' ? (
              <Link className="button is-link" to={elm.url}>
                <p>Xem Thêm</p>
              </Link>
            ) : (
              <button
                className="button is-link"
                onClick={(e) => handleMore(e)}
                type="button"
              >
                <p>Xem Thêm</p>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  });

  return <>{category}</>;
};
export default Section;
