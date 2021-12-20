const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const permit = require('../middlewares/permit');
const nguoiDungController = require('../controllers/nguoiDungController');

const Router = express.Router();

Router.post('/', nguoiDungController.createNguoiDung);

Router.use(verifyToken);

Router.route('/').get(nguoiDungController.getNguoiDung);

Router.use(permit('admin'));

Router.route('/search').get(nguoiDungController.getSearchResult);

module.exports = Router;
