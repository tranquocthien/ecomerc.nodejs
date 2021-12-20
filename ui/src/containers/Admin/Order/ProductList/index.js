import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

const getList = (type) => {
  return axios
    .get(`/api/v1/orders?state=${type}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
    .then((res) => res.data);
};

const deleteItem = (id) => {
  return axios
    .delete(`/api/v1/orders/${id}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
    .then((res) => {
      return res.status === 200
        ? alert('Xoá thành công')
        : alert('Xoá thất bại');
    });
};

const changeState = (id, state) => {
  return axios
    .patch(
      `/api/v1/orders`,
      {
        _id: id,
        state,
      },
      {
        headers: { Authorization: localStorage.getItem('token') },
      }
    )
    .then((res) => {
      return res.status === 200
        ? alert('Thay đổi thành công')
        : alert('Thất bại');
    });
};

// Component

const ProductList = ({ type }) => {
  // state

  const [list, setList] = useState();
  const oldList = useRef();
  const initialState = useRef(0);
  oldList.current = list;

  useEffect(async () => {
    if (!initialState.current) {
      initialState.current = 1;
      setList(await getList(type));
    }
    if (!_.isEqual(oldList.current, list)) {
      setList(await getList(type));
    }
  }, [list]);

  // event

  const handleDelete = async (item) => {
    await deleteItem(item['_id']);
    setList(await getList(type));
    location.reload();
  };

  const handleChangeState = async (id, state) => {
    await changeState(id, state);
    setList(await getList(type));
    location.reload();
  };

  const handleDone = async (id, state) => {
    await changeState(id, state);
    setList(await getList(type));
    location.reload();
  };

  return (
    <div>
      {list
        ? list.map((elm) => {
            return (
              <div className="box" key={elm['_id']}>
                <b>Mã đơn hàng: </b>
                {elm['_id']}, <b>Email: </b>
                {elm.email}, <b>Ngày tạo: </b>
                {elm.ngayTao}, <b>Tổng tiền: </b>
                {elm.totalPrice}
                {type === 'đang xác nhận' ? (
                  <>
                    <span> - </span>
                    <button
                      className="button is-success is-small"
                      type="submit"
                      onClick={async () =>
                        handleChangeState(elm['_id'], 'đang giao')
                      }
                    >
                      XÁC NHẬN
                    </button>
                  </>
                ) : null}
                {type === 'đang giao' ? (
                  <>
                    <span> - </span>
                    <button
                      className="button is-link is-small"
                      type="submit"
                      onClick={async () => handleDone(elm['_id'], 'hoàn thành')}
                    >
                      ĐÃ GIAO
                    </button>
                  </>
                ) : null}
                <span> - </span>
                <button
                  className="button is-danger is-small"
                  type="submit"
                  onClick={async () => handleDelete(elm)}
                >
                  XOÁ
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ProductList;
