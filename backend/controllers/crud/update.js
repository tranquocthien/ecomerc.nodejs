const express = require('express');

const update = (Model, identify = '') => async (
  req = express.request,
  res = express.response
) => {
  if (identify === '') throw 'null of identify';
  try {
    const filter = {};
    filter[identify] = req.body[identify];
    const update = { ...req.body };

    await Model.findOneAndUpdate(filter, update, { new: false }).then(
      (data) => {
        if (data) res.sendStatus(200);
        else res.sendStatus(404);
      }
    );
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = update;
