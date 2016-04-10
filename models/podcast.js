'use strict';

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://secpood:53cpo0d@ds025429.mlab.com:25429/secpood';
var Encoder = require('node-html-encoder').Encoder;

exports.all = function (cb) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    db.collection('podcast')
      .find()
      .sort({'date': -1})
      .toArray(function (err, docs) {
        assert.equal(null, err);
        db.close();
        cb(err, docs);
      });
  });
};

exports.featured = function (cb) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    db.collection('podcast')
      .find()
      .limit(1)
      .skip(Math.floor(Math.random() * 700))
      .toArray(function (err, docs) {
        assert.equal(null, err);
        db.close();
        cb(err, docs);
      });
  });
};


exports.topTen = function (cb) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    db.collection('podcast')
      .find()
      .sort({'like': -1, 'author': 1})
      .limit(10)
      .toArray(function (err, docs) {
        assert.equal(null, err);
        db.close();
        cb(err, docs);
      });
  });
};

exports.updatedb = function (feed, cb) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    insertDocument(feed, db, function() {
      // db.close();
    });
  });
};

exports.like = function (id, cb) {
  var objId = new ObjectID(id);
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    db.collection('podcast')
      .updateOne({_id: objId},
        {$inc: {'like': 1}}, function(err){
        if(err){
          console.log(err);
        }
          db.close();
          cb(err);
      });
  });
};

exports.etc = function (cb) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    db.collection('podsites')
      .find()
      .sort({'name': 1})
      .toArray(function (err, docs) {
        assert.equal(null, err);
        db.close();
        cb(err, docs);
      });
  });
};

var insertDocument = function (feed, db, callback) {
  var encoder = new Encoder('entity');
  var author = 'no author';
  var title = 'not title';
  var pubDate = 'no publication date';
  var rss = 'no rss';
  var link = 'no link';
  var audio = 'no audio';
  var intro = 'no intro';
  var like = 0;


  request(rssMe, function (error, resp, body) {
    parser(body, function (error, ret) {
      for (var i = 0; i <= (ret.items.length - 1); i++) {

        author = ret.items[i].author;
        title = ret.items[i].title;
        pubDate = ret.items[i].date;
        rss = feed;
        link = ret.items[i].link;
        audio = ret.enclosure[i];
        intro = encoder.htmlEncode(ret.items[i].description) ;
        like = 0;

        db.collection('podcast').update({
            "audio": audio
          }, {
            "author": author,
            "title": title,
            "date": pubDate,
            "rss": rss,
            "link": link,
            "audio": audio,
            "intro": intro,
            "like": like
          },
          {
            upsert: true
          },

          function (err, result) {
            assert.equal(err, null);
            callback();
          });
      }
    });
  });
};
