const express = require('express');
const mongoose = require('mongoose');

module.exports = (Model = mongoose.Model) => async (
  req = express.request,
  res = express.response
) => {
  try {
    const condition = {};

    const field = req.params['field'];

    const order = parseInt(req.params['order']);

    const limit = parseInt(req.params['limit']);

    const query = req.query;

    condition[field] = order;

    const sortedData = await Model.find({ ...query })
      .sort({ ...condition })
      .limit(limit)
      .then((data) => {
        return data;
      });

    res.status(200).json(sortedData);
  } catch (error) {
    res.status(404).json({ error });
  }
};
