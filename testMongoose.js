const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var schema = mongoose.Schema({ name: String });

schema.methods.play = function() {
  console.log(this.name + ' сыграли рок');
};

const Band = mongoose.model('Band', schema);

const band = new Band({ name: 'Nirvana' });
band.save().then(() => band.play());
