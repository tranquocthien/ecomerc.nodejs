import React from 'react';
import useSearch from './useSearch';
import '../Admin.scss';
import UserSuggestion from '../../../components/Admin/UserSuggestion';

const UserAdmin = () => {
  const [email, setEmail, , setTyping] = useSearch();

  const handleInputChange = () => {
    const text = document.querySelector('#typing').value;
    document.getElementsByClassName('suggest')[0].style.display = 'block';
    if (text !== '') {
      setTyping(text);
    } else setEmail(undefined);
  };

  const handleSetInput = (e, emailForInput) => {
    e.preventDefault();
    document.querySelector('#typing').value = emailForInput;
    document.getElementsByClassName('suggest')[0].style.display = 'none';
  };

  return (
    <div className="user-container">
      <div>Nhập Email:</div>
      <div>
        <form autoComplete="off">
          <input type="text" id="typing" onChange={handleInputChange} />
        </form>
      </div>
      <div className="suggest">
        <UserSuggestion suggestions={email} handleSetInput={handleSetInput} />
      </div>
    </div>
  );
};

export default UserAdmin;
