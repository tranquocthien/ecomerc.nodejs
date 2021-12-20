var asyncForeach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

var getProductAccordingCategory = (categoryName) => {
  var product = [];

  var productList = document.querySelectorAll('.product');

  asyncForeach(productList, (pList) => {
    try {
      var ten = pList.querySelector('.product-name').textContent;
      const randNum = Math.random() * 10;
      var gia = parseInt((randNum - (randNum % 0.1)) * 1000);
      var thuocDanhMuc = categoryName;
      var thumbnail = pList.querySelector('.boximg img').src;

      if (thumbnail !== '')
        product.push({
          ten,
          gia,
          thuocDanhMuc,
          thumbnail,
          moTa: '',
        });
    } catch (error) {}
  });

  return product;
};

var product = getProductAccordingCategory('đồ dùng gia đình');

product;
