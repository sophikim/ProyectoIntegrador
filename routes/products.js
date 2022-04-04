var express = require('Express');
var router = express.Router();
//var controller = require('../controllers/books');

router.get('/allProducts', function(req, res) {
    res.render('product');
  });

module.exports=router;