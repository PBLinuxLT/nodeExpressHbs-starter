var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', version: '1.1' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: _.camelCase('Test Page'), version: '1.1' });
});

module.exports = router;
