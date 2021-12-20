const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'must have email'],
  },
  product: {
    type: mongoose.Types.ObjectId,
    required: [true, 'must have product'],
  },
});

module.exports = mongoose.model('Cart', cartSchema);
