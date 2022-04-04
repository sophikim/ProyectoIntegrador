var products = require('products');
var router = products.Router();


router.get('/', function(req, res) {
  res.render('index', { title: 'Products' });
});

module.exports = products;