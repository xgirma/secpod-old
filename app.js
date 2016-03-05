var http = require('http');
var myServer = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Security Podcast directory</h1>');
    response.end();
});

myServer.listen(3000, function(){
    console.log('Server listening at port 3000')
});