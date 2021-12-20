import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useCatagory = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_CATEGORIES_ASYNC' });
  }, []);
  return category.categories;
};

export default useCatagory;
