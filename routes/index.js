var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'ROCK' });
});

router.get('/arcticmonkeys', function(req, res, next) {
  res.send("<h1>Страница группы Arctic Monkeys</h1>");
});

router.get('/scorpions', function(req, res, next) {
  res.send("<h1>Страница группы Scorpions</h1>");
});

router.get('/nirvana', function(req, res, next) {
  res.send("<h1>Страница группы Nirvana</h1>");
});

router.get('/acdc', function(req, res, next) {
  res.send("<h1>Страница группы AC/DC</h1>");
});

router.get('/rammstein', function(req, res, next) {
  res.send("<h1>Страница группы Rammstein</h1>");
});

router.get('/maneskin', function(req, res, next) {
  res.send("<h1>Страница группы Måneskin</h1>");
});

router.get('/5sos', function(req, res, next) {
  res.send("<h1>Страница группы 5 Seconds of Summer</h1>");
});

router.get('/aria', function(req, res, next) {
  res.send("<h1>Страница группы Ария</h1>");
});

router.get('/linkinpark', function(req, res, next) {
  res.send("<h1>Страница группы Linkin Park</h1>");
});

router.get('/imaginedragons', function(req, res, next) {
  res.send("<h1>Страница группы Imagine Dragons</h1>");
});

router.get('/kiss', function(req, res, next) {
  res.send("<h1>Страница группы Kiss</h1>");
});

router.get('/metallica', function(req, res, next) {
  res.send("<h1>Страница группы Metallica</h1>");
});

module.exports = router;
