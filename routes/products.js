var express = require('Express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.index);
router.get('/detail/:id', productsController.show);

router.get('/add', productsController.productAdd); //muestra el formulario de add
router.post('/add', productsController.storeAdd); //procesa el formulario de add

module.exports = router;