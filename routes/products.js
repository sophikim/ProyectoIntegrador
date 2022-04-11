var express = require('Express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.index);
router.get('/add', productsController.productAdd);

module.exports=router;