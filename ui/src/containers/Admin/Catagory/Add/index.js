import React from 'react';
import axios from 'axios';
import '../../Admin.scss';

const AddCatagory = () => {
  const handleAddCategory = () => {
    const status = document.getElementsByClassName('add-status')[0];
    const category = document.getElementsByClassName('ten-danh-muc')[0].value;
    const seoUrl = document.getElementsByClassName('seo-url')[0].value;
    const token = localStorage.getItem('token');
    const headers = { Authorization: token };
    const body = { ten: category, url: seoUrl };
    status.style.display = 'block';
    axios
      .post('/api/v1/danhmuc', body, { headers })
      .then(() => {
        status.textContent = 'THÊM THÀNH CÔNG';
        document.getElementsByClassName('ten-danh-muc')[0].value = '';
        document.getElementsByClassName('seo-url')[0].value = '';
      })
      .catch((err) => {
        status.textContent = 'THÊM THẤT BẠI';
        document.getElementsByClassName('ten-danh-muc')[0].value = '';
        document.getElementsByClassName('seo-url')[0].value = '';
        return err;
      });
  };

  return (
    <div className="add-category">
      <div>Nhập tên:</div>
      <div>
        <form autoComplete="off">
          <input className="ten-danh-muc" type="text" />
        </form>
      </div>
      <div>SEO URL:</div>
      <div>
        <form autoComplete="off">
          <input className="seo-url" type="text" />
        </form>
      </div>
      <div>
        <button type="submit" onClick={handleAddCategory}>
          Thêm
        </button>
      </div>
      <div className="add-status">status</div>
    </div>
  );
};

export default AddCatagory;
