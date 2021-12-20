import React from 'react';
import { Link } from 'react-router-dom';

const ItemCatagory = ({ categories }) => {
  const handleClick = () => {
    document.getElementsByClassName('sidebar')[0].style.display = 'none';
    document.getElementsByClassName('overlay')[0].style.display = 'none';
  };
  if (categories)
    return categories.map((element) => {
      const url = `/${element.url}`;
      return (
        <li key={Math.random()} className="panel-block">
          <Link to={url} onClick={(e) => handleClick(e)}>
            {element.ten}
          </Link>
        </li>
      );
    });
  return null;
};

export default ItemCatagory;
