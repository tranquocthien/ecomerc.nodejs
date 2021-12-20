const bcrypt = require('bcrypt');
const NguoiDung = require('../models/NguoiDung');
const getSearchResult = require('./crud/getSearchResult');

exports.getNguoiDung = async (req, res) => {
  const nguoidung = await NguoiDung.findOne({ email: req.email });
  res.status(200).json(nguoidung);
};

exports.getSearchResult = getSearchResult(NguoiDung, 'email', 'query', 5);

exports.createNguoiDung = (req, res) => {
  // encode password into bcrypt
  bcrypt.genSalt(10, (error, salt) => {
    if (error == null) {
      bcrypt
        .hash(req.body.password, salt)
        .then((hash) => {
          const nguoidung = new NguoiDung({
            ...req.body,
            password: hash,
          });

          nguoidung
            .save()
            .then(() => {
              res.status(201).json({
                status: 'success',
                data: req.body,
              });
            })
            .catch((err) => {
              res.status(404).json({
                status: 'fail',
                data: 'Invalid data',
                error: err,
              });
            });
        })
        .catch((err) => {
          res.status(404).json({
            status: 'fail',
            data: 'Invalid data',
            error: err,
          });
        });
    } else {
      throw new Error('Invalid password');
    }
  });
};
