const express = require('express');

const add = (Model, customData) => async (
  req = express.request,
  res = express.response
) => {
  try {
    const model = new Model({
      ...req.body,
      ...customData,
    });

    console.log('saving ', Math.random());
    await model.save().then(() => {
      console.log('success ', Math.random());
      res.sendStatus(201);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = add;
