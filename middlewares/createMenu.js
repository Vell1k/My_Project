var Band = require('../models/band').Band;

module.exports = async function(req, res, next) {
  res.locals.nav = [];

  var menu = await Band.find({}, { _id: 0, title: 1, nick: 1 });
  if (menu.length != 0) {
    res.locals.nav = menu;
  }
  next();
};
