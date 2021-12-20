const deleteOne = (Model, identify) => async (
  req = express.request,
  res = express.response
) => {
  try {
    const filter = {};
    filter[identify] = req.params[identify];
    await Model.findOneAndDelete(filter).then((data) => {
      if (data) res.sendStatus(200);
      else res.sendStatus(404);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = deleteOne;
