var express = require('express');
var router = express.Router();
var Band = require('../models/band').Band;
var checkAuth = require('../middlewares/checkAuth.js');

router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с bands');
});

router.get('/:nick', checkAuth, async function(req, res, next) {
  var bands = await Band.find({ nick: req.params.nick });
  if (!bands.length) return next(new Error('Нет такой группы в списке ROCK'));
  var band = bands[0];
  res.render('band', {
    title: band.title,
    picture: band.avatar,
    desc: band.desc
  });
});

module.exports = router;
