const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  product: mongoose.Types.ObjectId,
  quantity: Number,
});

const orderSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'must have email'],
  },
  products: [productsSchema],
  totalPrice: {
    type: Number,
    required: [true, 'must have totalPrice'],
  },
  state: {
    type: String,
    default: 'đang xác nhận',
  },
  ngayTao: {
    type: Date,
  },
});

module.exports = mongoose.model('Order', orderSchema);
