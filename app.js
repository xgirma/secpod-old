var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.locals.apptitle = 'Security Podcast Directory';

app.get('/', function(request, response){
    response.render('index', {
        title: this.apptitle
    });
});

app.get('/list', function(request, response){
    response.render('list', {
        title: 'Podcast List'
    });
});

app.get('/list/:name', function(request, response){
    var name = request.params.name;
    response.render('detail', {
        title: name + "'s Podcast Detail"
    });
});

app.get('*', function(request, response){
    response.render('badroute',{
        title: 'You are lost create a podcast :) ...'
    });
});

var server = app.listen('3000', function(){
    console.log('Server listening at port 30000');
});