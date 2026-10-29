var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'ROCK' });
});

router.get('/arcticmonkeys', function(req, res, next) {
  res.render('band', {
    title: "Arctic Monkeys",
    picture: "/images/arcticmonkeys.jpg",
    desc: "Arctic Monkeys — британская инди-рок группа из Шеффилда, образованная в 2002 году. Известна своим уникальным звучанием и текстами, которые сочетают остроумие и социальную критику. Группа стала одной из самых влиятельных в современной рок-музыке."
  });
});

router.get('/scorpions', function(req, res, next) {
  res.render('band', {
    title: "Scorpions",
    picture: "/images/scorpions.jpg",
    desc: "Scorpions — легендарная немецкая рок-группа, основанная в 1965 году в Ганновере. Одна из самых успешных рок-групп в истории, известная своими мощными балладами и хард-роковыми хитами. Их песня 'Wind of Change' стала гимном целого поколения."
  });
});

router.get('/nirvana', function(req, res, next) {
  res.render('band', {
    title: "Nirvana",
    picture: "/images/nirvana.jpg",
    desc: "Nirvana — американская рок-группа, основанная Куртом Кобейном и Кристом Новоселичем в 1987 году. Стала символом гранж-движения и поколения X. Их альбом 'Nevermind' изменил лицо рок-музыки навсегда."
  });
});

router.get('/acdc', function(req, res, next) {
  res.render('band', {
    title: "AC/DC",
    picture: "/images/acdc.jpg",
    desc: "AC/DC — австралийская рок-группа, основанная братьями Ангусом и Малкольмом Янг в 1973 году. Одна из самых продаваемых групп в истории музыки. Их энергичный хард-рок и незабываемые риффы сделали их иконами жанра."
  });
});

router.get('/rammstein', function(req, res, next) {
  res.render('band', {
    title: "Rammstein",
    picture: "/images/rammstein.jpg",
    desc: "Rammstein — немецкая индастриал-метал группа, основанная в 1994 году в Берлине. Известна своим мощным звучанием, провокационными текстами и впечатляющими живыми выступлениями с использованием пиротехники. Одна из самых успешных немецких групп в мире."
  });
});

router.get('/maneskin', function(req, res, next) {
  res.render('band', {
    title: "Måneskin",
    picture: "/images/maneskin.jpg",
    desc: "Måneskin — итальянская рок-группа, основанная в Риме в 2016 году. Получила мировую известность после победы на Евровидении 2021. Их энергичный стиль и харизма возродили интерес к рок-музыке среди молодого поколения."
  });
});

router.get('/5sos', function(req, res, next) {
  res.render('band', {
    title: "5 Seconds of Summer",
    picture: "/images/5sos.jpg",
    desc: "5 Seconds of Summer — австралийская поп-рок группа, основанная в Сиднее в 2011 году. Начинали как YouTube-кавер-группа, а затем стали мировыми звёздами. Их звучание эволюционировало от поп-панка к более зрелому альтернативному року."
  });
});

router.get('/aria', function(req, res, next) {
  res.render('band', {
    title: "Ария",
    picture: "/images/aria.jpg",
    desc: "Ария — легендарная российская хэви-метал группа, основанная в 1985 году в Москве. Одна из самых значимых рок-групп на постсоветском пространстве. Их мощные риффы и философские тексты сделали их культовыми для миллионов фанатов."
  });
});

router.get('/linkinpark', function(req, res, next) {
  res.render('band', {
    title: "Linkin Park",
    picture: "/images/linkinpark.jpg",
    desc: "Linkin Park — американская рок-группа, основанная в 1996 году в Калифорнии. Сочетая ню-метал, альтернативный рок и электронику, они создали уникальное звучание, которое принесло им мировую славу. Их дебютный альбом 'Hybrid Theory' стал одним из самых продаваемых в истории."
  });
});

router.get('/imaginedragons', function(req, res, next) {
  res.render('band', {
    title: "Imagine Dragons",
    picture: "/images/imaginedragons.jpg",
    desc: "Imagine Dragons — американская рок-группа, основанная в 2008 году в Лас-Вегасе. Известна своим эпичным звучанием, мощными барабанами и запоминающимися мелодиями. Их музыка сочетает альтернативный рок, поп и электронику."
  });
});

router.get('/kiss', function(req, res, next) {
  res.render('band', {
    title: "Kiss",
    picture: "/images/kiss.jpg",
    desc: "Kiss — легендарная американская рок-группа, основанная в Нью-Йорке в 1973 году. Известна своим сценическим образом — гримом, костюмами и эффектными шоу с пиротехникой. Одна из самых узнаваемых и коммерчески успешных рок-групп в истории."
  });
});

router.get('/metallica', function(req, res, next) {
  res.render('band', {
    title: "Metallica",
    picture: "/images/metallica.jpg",
    desc: "Metallica — легендарная американская трэш-метал группа, основанная в Лос-Анджелесе в 1981 году. Одна из «большой четвёрки» трэш-метала наряду с Megadeth, Slayer и Anthrax. Одна из самых коммерчески успешных и влиятельных метал-групп в истории музыки."
  });
});

module.exports = router;
