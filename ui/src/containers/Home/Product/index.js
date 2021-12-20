import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './style.scss';
import { onLoading, onSuccess } from '../../../actions/status';

const Product = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const params = useParams();
  const [product, setProduct] = useState();
  const cart = useSelector((state) => state.cart);

  useEffect(async () => {
    await axios.get(`/api/v1/sanpham?_id=${params.id}`).then((res) => {
      setProduct(res.data[0]);
    });
  }, []);

  const handleAddToCart = (myproduct) => {
    onLoading(dispatch);
    for (const item of cart) {
      if (item['product'] === myproduct['_id']) {
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
          product: myproduct['_id'],
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

  return (
    <div className="product">
      <nav
        className="breadcrumb has-succeeds-separator"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <Link to="#" style={{ textTransform: 'capitalize' }}>
              {product ? product.thuocDanhMuc : null}
            </Link>
          </li>
          <li>
            <a href="#">{product ? product.ten : null}</a>
          </li>
        </ul>
      </nav>
      <div className="box">
        <article className="media">
          <div className="box media-left">
            <figure className="is-square">
              <img
                width="300"
                height="300"
                src={
                  product ? `data:image/png;base64, ${product.thumbnail}` : null
                }
                alt="product"
              />
            </figure>
          </div>
          <div className="box">
            <div className="content">
              <h3>{product ? product.ten : null}</h3>
              Giá <i>{product ? product.gia : null} ₫</i>
              <div className="add-to-card">
                <button
                  className="button"
                  type="button"
                  onClick={() => handleAddToCart(product)}
                >
                  Thêm vào rọ
                </button>
              </div>
              <div className="buy-now">
                <button className="button is-black" type="button">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
          <div>{product ? product.moTa : null}</div>
        </article>
      </div>
    </div>
  );
};

export default Product;
