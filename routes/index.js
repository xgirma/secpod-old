var express = require('express');
var router = express.Router();
var Podcast = require('../models/podcast');

router.get('/', function(req, res, next) {
    Podcast.rated(function(err, top){
      if(err){
        console.log('Error finding docs with 5 star')
      }

      Podcast.featured(function(err, doc){
        if(err){
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

router.get('/list', function(req, res, next) {
  Podcast.all(function(err, docs) {
    if (err) {
      console.log('Error finding doc ...');
    }
    res.render('list', {
      page: 'list',
      title: 'Directory',
      podcast: docs
    });
  });
});

module.exports = router;
