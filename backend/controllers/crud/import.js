const fs = require('fs');
const path = require('path');

const add = async (Model, customData, req, res) => {
  try {
    const model = new Model({
      ...req.body,
      ...customData,
    });

    console.log('saving ', Math.random());
    await model.save().then(() => {
      console.log('success ', Math.random());
    });
  } catch (error) {
    console.log(error);
  }
};

const importFile = (Model) => async (req, res) => {
  try {
    const files = fs.readdirSync(
      path.join(__dirname, '..', '..', 'models', 'database-sample', 'SanPham')
    );
    for (const key in files) {
      const rawFile = fs.readFileSync(
        path.join(
          __dirname,
          '..',
          '..',
          'models',
          'database-sample',
          'SanPham',
          files[key]
        )
      );
      const file = JSON.parse(rawFile);

      for (const fileKey in file) {
        await add(Model, { ...file[fileKey], ngayTao: new Date() }, req, res);
      }
    }
    res.sendStatus(201);
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = importFile;
