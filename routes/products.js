var express = require('Express');
var router = express.Router();
const productsController = require('../controllers/productsController');

//multer 
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });


router.get('/', productsController.index);
router.get('/detail/:id', productsController.show);

router.get('/add', productsController.productAdd); //muestra el formulario de add
router.post('/add', upload.single('picture_product'), productsController.storeAdd); //procesa el formulario de add

router.get('/:id/edit',  productsController.edit);
router.post('/:id/edit', upload.single('picture_product'),  productsController.update);

module.exports = router;