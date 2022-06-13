var express = require('Express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.index);
router.get('/detail/:id', productsController.show);

router.get('/add', productsController.productAdd);
router.post('/add', productsController.storeAdd);

module.exports = router;