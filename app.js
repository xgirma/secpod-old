var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('<h1> Security Podcast directory</h1>');
});

var server = app.listen('3000', function(){
    console.log('Server listening at port 30000');
});