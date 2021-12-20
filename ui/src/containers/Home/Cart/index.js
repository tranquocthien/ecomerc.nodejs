import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import './style.scss';

const Cart = () => {
  const [composedProduct, setComposedProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productList, setProductList] = useState([]);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(async () => {
    const list = [];
    for (const product of cart) {
      const item = axios
        .get(`/api/v1/sanpham?_id=${product.product}`)
        .then((res) => {
          return res.data[0];
        });
      list.push(item);
    }
    setProductList(await Promise.all(list));
  }, [cart]);

  const calTotal = (products) => {
    const total = products.reduce((accumulator, product) => {
      return accumulator + product.gia * product.quantity;
    }, 0);
    setTotalPrice(total);
  };

  // ONCLICK

  const handleOrder = () => {
    const products = [];

    composedProduct.forEach((elm) =>
      products.push({
        product: elm['_id'],
        quantity: elm.quantity,
      })
    );

    axios
      .post(
        '/api/v1/orders',
        {
          email: user.credentials.email,
          products,
          totalPrice,
        },
        {
          headers: { Authorization: localStorage.getItem('token') },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          alert('Đặt hàng thành công!!');
          location.replace('/');
        }
      });
  };

  return user.isLogin ? (
    <div className="cart">
      <div className="List">
        {productList &&
          productList.map((product) => {
            return (
              <Product
                key={product['_id']}
                product={product}
                setComposedProduct={setComposedProduct}
                composedProduct={composedProduct}
                calTotal={calTotal}
              />
            );
          })}
      </div>
      <div className="box total">
        <h1 className="title is-1">Thành tiền: {totalPrice && totalPrice}</h1>
        <button
          className="button is-success"
          type="button"
          onClick={handleOrder}
          disabled={!totalPrice}
        >
          Đặt Hàng
        </button>
      </div>
    </div>
  ) : (
    location.replace('/login')
  );
};

export default Cart;
