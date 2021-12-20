const deleteOneByQuery = (Model, identify = []) => async (
  req = express.request,
  res = express.response
) => {
  try {
    const filter = {
      ...req.query,
    };
    await Model.findOneAndDelete(filter).then((data) => {
      if (data) res.sendStatus(200);
      else res.sendStatus(404);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = deleteOneByQuery;
