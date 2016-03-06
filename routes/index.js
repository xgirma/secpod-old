var express = require('express');
var router = express.Router();
var appdata = require('../podcast.json');

router.get('/', function(req, res, next) {
  var podcastname = [];

  appdata.podcast.forEach(function(item){
    podcastname = podcastname.concat(item.name)
  });

  res.render('index', {
    title: 'Security Podcast Directory',
    name: podcastname
  });
});

router.get('/list', function(req, res, next) {
  res.render('list', {
    title: 'Directory'
  });
});

module.exports = router;
