var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController'); // requeris controladores para trabajar
/* GET home page. */

router.get('/', indexController.index);
router.get('/search-results', indexController.searchResults);

module.exports = router;