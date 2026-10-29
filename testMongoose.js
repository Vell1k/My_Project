const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var Band = require('./models/band.js').Band;

var band = new Band({
  title: 'Nirvana',
  nick: 'nirvana'
});

band
  .save()
  .then(() => console.log('Сохранено'))
  .catch(console.error)
  .finally(() => mongoose.disconnect());
