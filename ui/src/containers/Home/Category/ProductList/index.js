import React, { useRef } from 'react';
import './style.scss';

const ProductList = ({ tenDanhMuc }) => {
  const dropdown = useRef();

  const handleDropdown = () => {
    dropdown.current.classList.toggle('active');
  };

  return (
    <div>
      <div className="box">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              type="submit"
              onClick={handleDropdown}
            >
              <span>Sắp xếp theo</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div
            className="dropdown-menu"
            id="dropdown-menu"
            role="menu"
            ref={dropdown}
          >
            <div className="dropdown-content">
              <a href="#" className="dropdown-item is-active">
                Mới nhất
              </a>
              <a className="dropdown-item">Giá tăng dần</a>
              <a href="#" className="dropdown-item">
                Giá giảm dần
              </a>
              <a href="#" className="dropdown-item">
                Lượt mua
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
