var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/pricing', function(req, res, next) {
  res.render('pricing');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
