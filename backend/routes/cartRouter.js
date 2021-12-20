const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const permit = require('../middlewares/permit');
const cartController = require('../controllers/cartController');

const Router = express.Router();

Router.use(verifyToken);

Router.post('/', cartController.add);

Router.get('/', cartController.getAllByQuery);

Router.delete('/', cartController.deleteOneByQuery);

module.exports = Router;
