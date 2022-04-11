var express = require('express');
var users = require('../database/data');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/',);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);
router.get('/profile-edit', usersController.profileEdit);

module.exports = router;
