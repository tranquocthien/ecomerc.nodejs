import React, { useEffect, useState } from 'react';
import './style.scss';
import _ from 'lodash';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onLoading, onSuccess } from '../../../../actions/status';

const getNewestProduct = (category, limit) => {
  return axios
    .get(
      `/api/v1/sanpham/field/ngayTao/order/-1/limit/${limit}/query?thuocDanhMuc=${category}`
    )
    .then((res) => {
      return res.data;
    });
};

const getPaginatedProduct = (category, page) => {
  return axios.get(`/api/v1/danhmuc/${category}/page/${page}`).then((res) => {
    return res.data;
  });
};

const Card = ({ ownCategory, urlCategory, action }) => {
  const user = useSelector((state) => state.user);
  const type = ['paginate', 'newest'];
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [productList, setProductList] = useState();

  const handleAddToCart = (product) => {
    onLoading(dispatch);

    for (const item of cart) {
      if (item['product'] === product['_id']) {
        onSuccess(dispatch);
        alert('Sản phẩm đã tồn tại trong giỏ hàng');
        return null;
      }
    }
    return axios
      .post(
        `/api/v1/cart`,
        {
          email: user.credentials.email,
          product: product['_id'],
        },
        {
          headers: { Authorization: localStorage.getItem('token') },
        }
      )
      .then(() => {
        onSuccess(dispatch);
        alert('Đã thêm vào giỏ');
      });
  };

  const redirectToLogin = () => {
    location.replace('login');
  };

  useEffect(() => {
    const list = async (categoryName) => {
      if (type.includes(action.type)) {
        if (action.type === 'newest') {
          const myList = await getNewestProduct(categoryName, action.limit);
          setProductList(myList);
        }
        if (action.type === 'paginate') {
          const myList = await getPaginatedProduct(categoryName, action.page);
          setProductList(myList);
        }
      } else setProductList(null);
    };

    list(ownCategory);
  }, []);
  if (action.type === 'newest')
    return (
      <>
        {productList
          ? productList.map((product) => {
              return (
                <div
                  className="card"
                  key={product['_id']}
                  style={{ display: 'inline-block' }}
                >
                  <Link
                    key={product['_id']}
                    to={`/${urlCategory}/product/${product['_id']}`}
                  >
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={`data:image/png;base64, ${product.thumbnail}`}
                          alt="Product"
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className="card-content">
                    <div className="media-content">
                      <Link
                        key={product['_id']}
                        to={`/${urlCategory}/product/${product['_id']}`}
                      >
                        <div className="title-product">
                          <b>{product.ten}</b>
                        </div>
                      </Link>
                      <p className="">{product.gia}₫</p>
                      <button
                        className="button is-success"
                        type="button"
                        onClick={
                          user.isLogin
                            ? () => handleAddToCart(product)
                            : () => redirectToLogin()
                        }
                      >
                        Thêm Giỏ
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </>
    );
  return (
    <>
      {productList
        ? productList.docs.map((product) => {
            return (
              <div
                className="card"
                key={product['_id']}
                style={{ display: 'inline-block' }}
              >
                <Link
                  key={product['_id']}
                  to={`/${urlCategory}/product/${product['_id']}`}
                >
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={`data:image/png;base64, ${product.thumbnail}`}
                        alt="Product"
                      />
                    </figure>
                  </div>
                </Link>
                <div className="card-content">
                  <div className="media-content">
                    <Link
                      key={product['_id']}
                      to={`/${urlCategory}/product/${product['_id']}`}
                    >
                      <div className="title-product">
                        <b>{product.ten}</b>
                      </div>
                    </Link>
                    <p className="">{product.gia}₫</p>
                    <button
                      className="button is-success"
                      type="button"
                      onClick={
                        user.isLogin
                          ? () => handleAddToCart(product)
                          : () => redirectToLogin()
                      }
                    >
                      Thêm Giỏ
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Card;
