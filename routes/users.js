var express = require('express');
var user = require('../database/data');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/',);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);
router.get('/profile/edit', usersController.profileEdit);
router.get('/register', usersController.register);

module.exports = router;

//habia agregado a /profile, el controller que agregue pero lo saque porlas
