import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import cart from './cart';
import status from './status';

export default combineReducers({ user, category, cart, status });
