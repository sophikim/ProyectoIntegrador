var express = require('express');
var router = express.Router();

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
// no funciona router.get('/profile/edit', function(req, res) {
// res.render('profile-edit');
// });

module.exports = router;
