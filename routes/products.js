var express = require('Express');
var router = express.Router();
const productsController = require('../controllers/productsController');
//var controller = require('../controllers/books');

router.get('/', productsController.index);
router.get('/product-add', productsController.productAdd);

module.exports=router;