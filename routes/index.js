'use strict';

var express = require('express');
var router = express.Router();
var Podcast = require('../models/podcast');
var Encoder = require('node-html-encoder').Encoder;

router.get('/', function (req, res, next) {
  var encoder = new Encoder('entity');
  var note = [];

  Podcast.topTen(function (err, top) {
    if (err) {
      console.log('Error finding docs with 5 star')
    }

    Podcast.featured(function (err, doc) {
      if (err) {
        console.log('Error finding a random doc ...');
      }

      for(var i=0; i < doc.length; i++){
        note.push(encoder.htmlDecode(doc[i].intro));
      }

      res.render('index', {
        page: 'index',
        title: 'Security Podcast Directory',
        featured: doc,
        featuredIntro: note,
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

router.get('/list', function (req, res, next) {
  var encoder = new Encoder('entity');
  var note = [];

  Podcast.all(function (err, docs) {
    if (err) {
      console.log('Error finding doc ...');
    }
    Podcast.etc(function (err, sites) {
      for(var i=0; i < docs.length; i++){
        note.push(encoder.htmlDecode(docs[i].intro));
      }
      res.render('list', {
        page: 'list',
        title: 'Directory',
        podcast: docs,
        podcastIntro: note,
        sites: sites
      })
    });
  });
});

router.post('/list', function (req, res, next) {
  Podcast.like(req.body.id, function (err, docs) {
    if (err) {
      console.log('Error finding doc ...', err);
    }
    res.redirect('list');
  });
});

module.exports = router;
