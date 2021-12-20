import { useState, useEffect } from 'react';
import axios from 'axios';

const getEmailList = async (email, setEmail) => {
  const url = `/api/v1/nguoidung/search?email=${email}`;
  const headers = {
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.ZHVjdGhhaWRldkBnbWFpbC5jb20.ypDuZ7U2-yiYZWycLfk1PRIVXXJcnoR_9lf5t2s4yfk',
  };
  await axios.get(url, { headers }).then((res) => {
    setEmail(res.data);
  });
};

const useSearch = () => {
  const [email, setEmail] = useState();
  const [typing, setTyping] = useState();

  useEffect(() => {
    getEmailList(typing, setEmail);
  }, [typing]);

  return [email, setEmail, typing, setTyping];
};

export default useSearch;
