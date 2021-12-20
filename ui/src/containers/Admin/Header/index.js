import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

const HeaderAdmin = () => {
  const user = useSelector((state) => state.user);

  const onCloseSidebar = (e) => {
    e.preventDefault();
    document.querySelector('.sidebar').style.display = 'none';
  };

  const onOpenSidebar = (e) => {
    e.preventDefault();
    document.querySelector('.sidebar').style.width = '300px';
    document.querySelector('.sidebar').style.display = 'flex';
  };

  const onToggleUser = (e) => {
    e.preventDefault();
    const subUser = document.querySelector('.sub-user');
    if (subUser.style.display === 'block') subUser.style.display = 'none';
    else subUser.style.display = 'block';
  };

  const onToggleCatagory = (e) => {
    e.preventDefault();
    const subCatagory = document.querySelector('.sub-category');
    if (subCatagory.style.display === 'block')
      subCatagory.style.display = 'none';
    else subCatagory.style.display = 'block';
  };

  const onToggle = (e, name) => {
    e.preventDefault();
    const subCatagory = document.querySelector(`.sub-${name}`);
    if (subCatagory.style.display === 'block')
      subCatagory.style.display = 'none';
    else subCatagory.style.display = 'block';
  };

  if (user.credentials.role === 'member') {
    alert('Bạn không phải admin');
    location.replace('/');
  }
  return (
    <div className="header-admin">
      <nav className="nav-admin">
        <a href="" className="open-sidebar" onClick={onOpenSidebar}>
          📃
        </a>
        <Link to="/admin">Admin</Link>
      </nav>
      <div className="sidebar">
        <a href="#" className="close-sidebar" onClick={onCloseSidebar}>
          ❌
        </a>
        <div className="user">
          <a href="#" onClick={onToggleUser}>
            Người Dùng
          </a>
          <div className="sub-user">
            <Link to="/admin/user">chỉnh sửa người dùng</Link>
          </div>
        </div>
        <div className="category">
          <a href="#" onClick={onToggleCatagory}>
            Danh Mục
          </a>
          <div className="sub-category">
            <Link to="/admin/category/add">thêm danh mục</Link>
            <Link to="/admin/category/update">sửa danh mục</Link>
            <Link to="/admin/category/delete">xoá danh mục</Link>
          </div>
        </div>
        <div className="product">
          <a
            href="#"
            onClick={(e) => {
              onToggle(e, 'product');
            }}
          >
            Sản Phẩm
          </a>
          <div className="sub-product">
            <Link to="/admin/product/add">thêm sản phẩm</Link>
            <Link to="/admin/product/update">sửa sản phẩm</Link>
            <Link to="/admin/product/delete">xoá sản phẩm</Link>
          </div>
        </div>
        <div className="order">
          <Link to="/admin/order">Đặt Hàng</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
