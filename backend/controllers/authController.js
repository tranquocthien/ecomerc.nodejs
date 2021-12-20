const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');
const NguoiDung = require('../models/NguoiDung');

function generateAccessToken(email) {
  return jwt.sign(email, authConfig.secretKey);
}

exports.login = (req, res) => {
  // find user
  NguoiDung.findOne({ email: req.body.email })
    .then((nguoiDung) => {
      // user is found
      if (nguoiDung !== null) {
        // compare bcrypt
        bcrypt.compare(req.body.password, nguoiDung.password, (err, result) => {
          // match
          if (result) {
            res.status(200).json({
              accessToken: generateAccessToken(nguoiDung.email),
            });
          } else {
            throw err;
          }
        });
      } else {
        throw new Error('Invalid Email or Password');
      }
    })
    .catch((error) => {
      res.status(401).json({
        status: 'fail',
        data: 'Invalid User',
        error,
      });
    });
};
