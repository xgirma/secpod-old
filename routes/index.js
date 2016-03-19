var express = require('express');
var router = express.Router();
var Podcast = require('../models/podcast');

router.get('/', function(req, res, next) {
  Podcast.all(function(err, docs){
    if(err){
      console.log('Error rendering ...');
    }

    Podcast.featured(function(err, doc){
      if(err){
        console.log('Error rendering ...');
      }

      res.render('index', {
        page: 'index',
        title: 'Security Podcast Directory',
        podcast: docs,
        featured: doc
      });
    });
  });
});

router.get('/list', function(req, res, next) {
  res.render('list', {
    page: 'list',
    title: 'Directory'
  });
});

module.exports = router;
