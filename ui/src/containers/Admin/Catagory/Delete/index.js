import React from 'react';
import axios from 'axios';
import '../../Admin.scss';
import CategorySuggestion from '../../../../components/Admin/CategorySuggestion';
import useSearch from './useSearch';

const DeleteCategory = () => {
  const [ten, , , setTyping] = useSearch();

  const handleChange = () => {
    const tenInput = document.getElementsByClassName('delete-input')[0].value;
    if (tenInput !== '') {
      setTyping(tenInput);
    }
    try {
      document.getElementsByClassName('delete-suggestion')[0].style.display =
        'block';
    } catch (e) {}
  };

  const handleChoose = (e, chooseTen) => {
    e.preventDefault();
    const input = document.getElementsByClassName('delete-input')[0];
    input.value = chooseTen;
    document.getElementsByClassName('delete-suggestion')[0].style.display =
      'none';
  };

  const handleRemove = (e) => {
    const method = 'DELETE';
    const tenInput = document.getElementsByClassName('delete-input')[0];
    const url = `/api/v1/danhmuc/${tenInput.value}`;
    const token = localStorage.getItem('token');
    const headers = { Authorization: token };
    axios({
      url,
      method,
      headers,
    }).then(() => {
      tenInput.value = '';
    });
  };

  return (
    <div className="delete-category">
      <div>Nhập tên danh mục:</div>
      <div>
        <form>
          <input
            type="text"
            autoComplete="off"
            className="delete-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <CategorySuggestion categories={ten} choose={handleChoose} />
      </div>
      <div>
        <button onClick={handleRemove} type="button">
          Xoá
        </button>
      </div>
    </div>
  );
};

export default DeleteCategory;
