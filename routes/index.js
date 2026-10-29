var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.session.greeting = 'Hi!!!';
  res.render('index', { title: 'ROCK', counter: req.session.counter });
});

router.get('/logreg', function(req, res, next) {
  res.render('logreg', { title: 'Вход' });
});

module.exports = router;
