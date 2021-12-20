const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const sanPhanSchema = mongoose.Schema({
  ten: {
    type: String,
    required: [true, 'must have a ten'],
    unique: true,
  },

  gia: {
    type: Number,
    required: [true, 'must have gia'],
  },

  thuocDanhMuc: {
    type: String,
    required: [true, 'must have thuocDanhMuc'],
  },

  thumbnail: {
    type: String,
    required: [true, 'must have a thumbnail'],
  },

  moTa: {
    type: String,
  },

  ngayTao: {
    type: Date,
  },
});

sanPhanSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('SanPham', sanPhanSchema);
