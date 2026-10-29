var express = require('express');
var router = express.Router();
var Band = require('../models/band').Band;

router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с bands');
});

router.get('/:nick', async function(req, res, next) {
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
