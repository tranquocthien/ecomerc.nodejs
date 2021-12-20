const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const permit = require('../middlewares/permit');
const sanPhamController = require('../controllers/sanPhamController');

const Router = express.Router();

Router.get('/import', sanPhamController.importSanPham);

Router.get('/', sanPhamController.getOne);

Router.get(
  '/field/:field/order/:order/limit/:limit',
  sanPhamController.sortSanPham
);

Router.get(
  '/field/:field/order/:order/limit/:limit/query',
  sanPhamController.sortSanPham
);

Router.use(verifyToken);

// Router.use(permit('admin'));

Router.post('/', sanPhamController.add);

Router.patch('/', sanPhamController.update);

Router.delete('/:ten', sanPhamController.deleteOne);

Router.get('/search', sanPhamController.getSearchResult);

module.exports = Router;
