const express = require('express');

const getSearchResult = (model, identify, queryType, numberOfResult) => async (
  req = express.request,
  res = express.response
) => {
  try {
    const query =
      queryType === 'params' ? req.params[identify] : req.query[identify];
    console.log(query);
    if (queryType !== 'params' && queryType !== 'query')
      throw 'not found query type';

    const regex = `^${query}.*`;

    await model
      .find({
        ten: { $regex: regex },
      })
      .limit(numberOfResult)
      .then((data) => res.status(200).json(data));
  } catch (error) {
    res.sendStatus(404).json({
      error,
    });
  }
};

module.exports = getSearchResult;
