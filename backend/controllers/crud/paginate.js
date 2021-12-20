const express = require('express');
var _ = require('lodash');

module.exports = (Model, query = Array, limit = Number) => async (
  req = express.request,
  res = express.response
) => {
  try {
    const options = {
      page: parseInt(req.params['page']),
      limit,
    };
    delete req.params['page'];

    if (_.isEqual(query.sort(), Object.keys(req.params).sort()) == false) {
      console.log('equal: ', query.sort(), Object.keys(req.params).sort());

      throw 'request params and query not match';
    }

    console.log('params: ', req.params);

    const paginating = await Model.paginate({ ...req.params }, options).then(
      (result) => result
    );

    res.status(200).json(paginating);
  } catch (error) {
    res.status(404).json({ error });
  }
};
