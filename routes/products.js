var express = require('Express');
var router = express.Router();
//var controller = require('../controllers/books');

router.get('/allProducts', function(req, res) {
    res.render('product');
  });
router.get('/add', function(req, res) {
  res.render('product-add');
});

module.exports=router;