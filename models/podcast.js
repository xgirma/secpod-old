'use strict';

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://secpood:53cpo0d@ds025429.mlab.com:25429/secpood';

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

// TODO remove
exports.rated = function (cb) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    db.collection('podcast')
      .find({rating: '5'})
      .limit(10)
      .sort({'author': 1, 'episode': 1})
      .toArray(function (err, docs) {
        assert.equal(null, err);
        db.close();
        cb(err, docs);
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
