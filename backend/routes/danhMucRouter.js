const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const danhMucController = require('../controllers/danhMucController');

const Router = express.Router();

Router.get('/:thuocDanhMuc/page/:page', danhMucController.paginate);

Router.get('/', danhMucController.getAllByQuery);

Router.use(verifyToken);

Router.get('/search/:ten', danhMucController.getSearchResult);

Router.post('/', danhMucController.add);

Router.delete('/:ten', danhMucController.deleteOne);

module.exports = Router;
