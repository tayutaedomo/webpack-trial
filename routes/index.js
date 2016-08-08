var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'webpack Trial' });
});

router.get('/getting_started', function(req, res, next) {
  res.render('getting_started');
});

module.exports = router;

