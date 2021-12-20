const getAllByQuery = (Model) => async (req, res) => {
  try {
    console.log('query: ', req.query);
    const query = req.query ? req.query : {};
    const instances = await Model.find({ ...query });
    res.status(200).json(instances);
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

module.exports = getAllByQuery;
