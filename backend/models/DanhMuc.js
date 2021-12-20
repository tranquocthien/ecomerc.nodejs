const mongoose = require('mongoose');

const danhMucSchema = mongoose.Schema({
  ten: {
    type: String,
    required: [true, 'must have ten'],
    unique: true,
  },
  url: {
    type: String,
    required: [true, 'must have url'],
    unique: true,
  },
});

module.exports = mongoose.model('DanhMuc', danhMucSchema);
