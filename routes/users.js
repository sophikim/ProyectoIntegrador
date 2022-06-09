var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.profile);

router.get('/profile', usersController.profile);
router.get('/profile/edit', usersController.profileEdit);

//rutas formulario de registro 
//register (esta lo muestra)
router.get('/register', usersController.register);
//store (esta procesa el formulario)
router.get('/register', usersController.create);

//rutas formulario de login
router.get('/login', usersController.login);
router.post('/login', usersController.authenticate)

module.exports = router;

//habia agregado a /profile, el controller que agregue pero lo saque porlas
