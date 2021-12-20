const Quyen = require('../models/Quyen');
const add = require('./crud/add');
const getAllByQuery = require('./crud/getAllByQuery');

exports.getAllByQuery = getAllByQuery(Quyen);

exports.add = add(Quyen);
