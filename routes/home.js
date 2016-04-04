var express = require('express');
var router = express.Router();
var Podcast = require('../models/podcast');

router.get('/', function (req, res, next) {
  Podcast.topTen(function (err, top) {
    if (err) {
      console.log('Error finding docs with 5 star')
    }

    Podcast.featured(function (err, doc) {
      if (err) {
        console.log('Error finding a random doc ...');
      }
      res.render('index', {
        page: 'index',
        title: 'Security Podcast Directory',
        featured: doc,
        selected: top
      });
    });
  });
});

router.post('/', function (req, res, next) {
  Podcast.like(req.body.id, function (err, docs) {
    if (err) {
      console.log('Error finding doc ...', err);
    }
    res.redirect('/');
  });
});

module.exports = router;
