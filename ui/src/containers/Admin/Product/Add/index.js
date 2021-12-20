import React, { useState } from 'react';
import axios from 'axios';
import DropdownBar from '../../../DropdownBar';

const getAllCategories = () => {
  return axios.get('/api/v1/danhmuc').then((res) => res.data);
};

const Add = () => {
  const [thumbnail, setThumbnail] = useState();

  const handleAdd = () => {
    const getElementById = (id) => {
      return document.getElementById(id);
    };

    const ten = getElementById('ten').value;
    const gia = parseInt(getElementById('gia').value, 10);
    const thuocDanhMuc = document.getElementsByClassName('custom-select')[0]
      .value;
    const moTa = getElementById('moTa').value;

    const body = {
      ten,
      gia,
      thuocDanhMuc,
      thumbnail,
      moTa,
    };

    axios
      .post('/api/v1/sanpham', body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(() => {
        alert('Đã thêm!');
        window.location.reload();
      })
      .catch((err) => {
        alert('Thêm thất bại');
        window.location.reload();
      });
  };

  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const img = document.getElementById('show');
        setThumbnail(fileReader.result);
        img.setAttribute('src', fileReader.result);
        img.style.display = 'block';
      };
    }
  };

  return (
    <div className="product">
      <div className="add-product">
        <div>Nhập tên:</div>
        <input type="text" id="ten" autoComplete="off" />
        <div>Nhập giá:</div>
        <input type="text" id="gia" autoComplete="off" />
        <div>Chọn danh mục:</div>
        <DropdownBar name="dropdownbar-product" data={getAllCategories} />
        <div>Tải lên ảnh:</div>
        <input type="file" id="file" onChange={(e) => handleChangeImg(e)} />
        <div>
          <img
            id="show"
            style={{ display: 'none', width: '200px', height: '200px' }}
            alt="preview"
          />
        </div>
        <div>Mô tả:</div>
        <input type="text" id="moTa" autoComplete="off" />
        <div>
          <input
            type="submit"
            value="Thêm"
            onClick={() => {
              handleAdd();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Add;
