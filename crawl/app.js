const { default: axios } = require('axios');
const fs = require('fs');

const getImgToBase64 = (url) => {
  return axios
    .get(url, { responseType: 'arraybuffer' })
    .then((res) => Buffer.from(res.data).toString('base64'));
};

const getFile = async (uri, name) => {
  const data = await fs.promises.readFile(uri, 'utf8');

  const product = JSON.parse(data);

  const imgs = [];

  for (const key in product) {
    const productObj = product[key];
    productObj['thumbnail'] = await getImgToBase64(productObj.thumbnail);
  }

  const file = JSON.stringify(product);

  fs.writeFileSync('data-with-image/' + name + '.json', file);
};

fs.readdir('data', (err, files) => {
  files.forEach((file) => {
    getFile('data/' + file, file);
  });
});
