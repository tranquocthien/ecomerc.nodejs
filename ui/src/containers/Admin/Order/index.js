import React, { useEffect, useState } from 'react';
import './style.scss';
import ProductList from './ProductList';

const Order = () => {
  return (
    <div className="Order">
      <div className="box">
        <h1 className="title is-5">ĐANG XÁC NHẬN</h1>
        <ProductList type="đang xác nhận" />
      </div>
      <div className="box">
        <h1 className="title is-5">ĐANG GIAO</h1>
        <ProductList type="đang giao" />
      </div>
      <div className="box">
        <h1 className="title is-5">HOÀN THÀNH</h1>
        <ProductList type="hoàn thành" />
      </div>
    </div>
  );
};

export default Order;
