const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

const Band = mongoose.model('Band', { name: String });

const band = new Band({ name: 'Nirvana' });
band.save().then(() => console.log('Rock!'));
