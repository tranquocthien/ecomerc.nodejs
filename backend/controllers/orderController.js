const Order = require('../models/Order');
const add = require('../controllers/crud/add');
const deleteOne = require('../controllers/crud/deleteOne');
const updateState = require('../controllers/crud/update');
const getAllByQuery = require('../controllers/crud/getAllByQuery');

exports.add = add(Order, { ngayTao: new Date() });

exports.deleteOne = deleteOne(Order, '_id');

exports.updateState = updateState(Order, '_id');

exports.getAllByState = getAllByQuery(Order);
