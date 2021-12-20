import axios from 'axios';
import { useState, useEffect } from 'react';

const getCategories = (tenCatagory, setTen) => {
  const token = localStorage.getItem('token');
  let ten;
  if (tenCatagory) {
    ten = tenCatagory.toLowerCase();
  }
  const url = `/api/v1/danhmuc/search/${ten}`;
  const headers = {
    Authorization: token,
  };

  axios.get(url, { headers }).then((res) => setTen(res.data));
};

const userSearch = () => {
  const [ten, setTen] = useState();
  const [typing, setTyping] = useState();

  useEffect(() => {
    if (typing) getCategories(typing, setTen);
  }, [typing]);
  return [ten, setTen, typing, setTyping];
};

export default userSearch;
