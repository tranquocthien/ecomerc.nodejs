const express = require('express');
const quyenController = require('../controllers/quyenController');

const Router = express.Router();

Router.route('/').get(quyenController.getAllByQuery).post(quyenController.add);

module.exports = Router;
