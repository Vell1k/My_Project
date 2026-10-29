var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.cookie('greeting', 'Hi!!!').render('index', { title: 'ROCK' });
});

module.exports = router;
