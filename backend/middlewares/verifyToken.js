const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(req.headers);
  if (authHeader) {
    jwt.verify(authHeader, authConfig.secretKey, (err, decode) => {
      if (err) {
        res.status(401).json({
          status: 'fail',
          err,
        });
      } else {
        req.email = decode;
        next();
      }
    });
  } else {
    res.status(401).json({
      status: 'fail',
      message: 'No Authorization Header',
    });
  }
};
