const Cart = require('../models/cart');
const add = require('./crud/add');
const deleteOneByQuery = require('./crud/deleteOneByQuery');
const getAllByQuery = require('./crud/getAllByQuery');

exports.add = add(Cart);

exports.deleteOneByQuery = deleteOneByQuery(Cart);

exports.getAllByQuery = getAllByQuery(Cart);
