const mongoose = require('mongoose');

const quyenSchema = mongoose.Schema({
  ten: {
    type: String,
    required: [true, 'must have a ten'],
    unique: true,
  },
});

module.exports = mongoose.model('Quyen', quyenSchema);
