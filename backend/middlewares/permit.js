const NguoiDung = require('../models/NguoiDung');

module.exports = (...permittedRoles) => async (req, res, next) => {
  try {
    const nguoidung = await NguoiDung.findOne({
      email: req.email,
    });
    if (nguoidung && permittedRoles.includes(nguoidung.role)) {
      next();
    } else {
      res.status(401).json({
        message: 'no permission',
      });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};
