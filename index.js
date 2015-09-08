var http = require('http');

//app.set('port', (process.env.PORT || 5000));
var appPort = process.env.PORT || 5000;

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(appPort);

console.log('Server running at localhost:' + appPort);