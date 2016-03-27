var db        = require('../db');
var ObjectId  = require('mongodb').ObjectID;

exports.all = function(cb){
  var collection = db.get().collection('podcast');

  collection.find()
    .sort({'_id': 1})
    .toArray(function(err, docs){
    cb(err, docs);
  });
};

exports.featured = function(cb){
  var collection = db.get().collection('podcast');

  collection.find()
    .limit(1)
    .skip(Math.floor(Math.random() * 9))
    .toArray(function(err, docs){
      cb(err, docs);
  });
};

exports.rated = function(cb){
  var collection = db.get().collection('podcast');

  collection.find({rating: "5"})
    .limit(10)
    .sort({'author': 1, 'episode': 1})
    .toArray(function(err, docs){
      cb(err, docs);
    });
};

exports.findById = function(id, cb){
  var collection = db.get().collection('podcast');
  
  collection.find({_id: ObjectID(new ObjectId(id))})
    .limit(1)
    .toArray(function(err, docs){
      cb(err, docs);
    });
};