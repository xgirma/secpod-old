var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');

app.locals.apptitle = 'Security Podcast Directory';

app.get('/', routes.index);
app.get('/list', routes.list);
app.get('/list/:name', routes.details);
app.get('*', routes.badroute);

var server = app.listen('3000', function(){
    console.log('Server listening at port 30000');
});