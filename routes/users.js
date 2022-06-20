var express = require('express');
var router = express.Router();

//mutlter 
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

const usersController = require('../controllers/usersController')


/* GET users listing. */
router.get('/', usersController.profile);

router.get('/profile', usersController.profile);

router.get('/profile/edit', usersController.profileEdit);
router.post('/profile/edit', usersController.update);

//rutas formulario de registro 
//register (esta lo muestra)
router.get('/register', usersController.register);
//store (esta procesa el formulario)
router.post('/register', upload.single('profile_photo'), usersController.create);

//rutas formulario de login
router.get('/login', usersController.login);
router.post('/login', usersController.authenticate)

router.get('/logout', usersController.logout)

module.exports = router;

//habia agregado a /profile, el controller que agregue pero lo saque porlas
