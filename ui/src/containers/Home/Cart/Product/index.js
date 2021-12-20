import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../../../actions/cart';
import './style.scss';
import { onLoading, onSuccess } from '../../../../actions/status';

const Product = ({
  product,
  setComposedProduct,
  composedProduct,
  calTotal,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const initialRender = useRef(true);
  const add = useRef();
  const minus = useRef();
  const email = useSelector((state) => state.user.credentials.email);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else calTotal(composedProduct);
  }, [composedProduct]);

  const handleUpdateComposedProduct = (e) => {
    if (e.target.checked) {
      add.current.disabled = true;
      minus.current.disabled = true;
      setCheckbox(true);
      setComposedProduct(composedProduct.concat({ ...product, quantity }));
    } else if (!e.target.checked) {
      add.current.disabled = false;
      minus.current.disabled = false;
      setCheckbox(false);
      setComposedProduct(
        composedProduct.filter((elm) => elm['_id'] !== product['_id'])
      );
    }
  };

  const handleRemoveProduct = () => {
    onLoading(dispatch);
    axios
      .delete(`/api/v1/cart?email=${email}&product=${product['_id']}`, {
        headers: { Authorization: localStorage.getItem('token') },
      })
      .then(() => {
        onSuccess(dispatch);
        setCart(dispatch, email);
      });
  };

  return (
    <div className="product box" key={product['_id']}>
      <input
        type="checkbox"
        onChange={(e) => handleUpdateComposedProduct(e)}
        defaultChecked={checkbox}
      />
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="card-image">
              <figure className="is-4by3">
                <img
                  width="100"
                  height="100"
                  src={product && `data:image/png;base64, ${product.thumbnail}`}
                  alt="Placeholder"
                />
              </figure>
            </div>
          </div>
          <div className="right">
            <div>
              <b>{product && product.ten}</b>
            </div>
            <div>
              Giá <i>{product && product.gia} ₫</i>
            </div>
            <div className="quantity">
              <button
                className="button"
                type="button"
                disabled={quantity <= 1}
                onClick={(e) => setQuantity((prevState) => prevState - 1)}
                ref={minus}
              >
                -
              </button>
              <input
                className="input is-info"
                type="text"
                value={quantity}
                disabled
                onChange={() => setQuantity(quantity)}
              />
              <button
                ref={add}
                className="button"
                type="button"
                onClick={() => setQuantity((prevState) => prevState + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="button is-danger"
        type="submit"
        onClick={handleRemoveProduct}
      >
        Xoá
      </button>
    </div>
  );
};

export default Product;
