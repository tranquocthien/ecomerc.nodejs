import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import ProductList from './ProductList';
import Section from '../Section';

const Category = () => {
  const category = [];
  const categories = useSelector((state) => state.category.categories);
  const location = useLocation();
  const url = location.pathname.split('/')[1];

  for (const element of categories) {
    if (url === element.url) {
      category.push(element);
      break;
    }
  }

  return (
    <div className="category">
      <ProductList />
      <Section categories={category} action={{ type: 'paginate', page: 1 }} />
    </div>
  );
};

export default Category;
