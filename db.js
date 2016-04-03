var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://secpood:53cpo0d@ds025429.mlab.com:25429/secpood';

var state = {
    db: null
};

exports.connect = function(done){
    if(state.db){
        console.log('Mongodb connection exist');
        return done();
    }

    MongoClient.connect(url, function(err, db){
        if(err) {
            console.log('Unable to connect mongodb');
            return done(err);
        }

        console.log('Connected to Mongodb');
        state.db = db;
        done();
    });
};

exports.get = function(){
    return state.db;
};

exports.close = function(){
    if(state.db){
        state.db.close(function(err, result){
            if(err){
                console.log('Unable to mongodb');
            }

            console.log('Mongodb closed');
            state.db = null;
        });
    }
};