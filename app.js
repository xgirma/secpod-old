var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('<h1> Security Podcast directory</h1>');
});

app.get('/list', function(request, response){
    response.send('<h1> Security Podcast directory</h1>');
});

app.get('/list/:name', function(request, response){
    var name = request.params.name;
    response.send('<h1>' + name + ' podcast ...</h1>');
});

app.get('*', function(request, response){
    response.send('<h1> bad route ... </h1>');
});

var server = app.listen('3000', function(){
    console.log('Server listening at port 30000');
});