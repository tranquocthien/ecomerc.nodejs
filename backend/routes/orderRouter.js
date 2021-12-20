const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const permit = require('../middlewares/permit');
const orderController = require('../controllers/orderController');

const Router = express.Router();

Router.use(verifyToken);

Router.get('/', orderController.getAllByState);

Router.post('/', orderController.add);

Router.delete('/:_id', orderController.deleteOne);

Router.patch('/', orderController.updateState);

module.exports = Router;
