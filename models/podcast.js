var db = require('../db');

exports.all = function(cb){
  var collection = db.get().collection('podcast');

  collection.find().toArray(function(err, docs){
    cb(err, docs);
  });
};

exports.featured = function(cb){
  var collection = db.get().collection('podcast');

  collection.find()
    .limit(1)
    .skip(Math.floor(Math.random() * 13))
    .toArray(function(err, docs){
      cb(err, docs);
  });
};