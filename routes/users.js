var express = require('express');
var users = require('../database/data');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/register', function(req, res) {
  res.render('register');
});
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/profile', function(req, res) {
  res.render('profile');
});
router.get('/profile/edit', usersController.profileEdit);

module.exports = router;
