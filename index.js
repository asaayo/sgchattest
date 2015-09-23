var http = require('http');

var appPort = process.env.PORT || 5000;

var server = http.createServer(function (request, response){
	response.writeHead(200, {"Content-Type": "text-plain"});
	response.end("Hello world!");
});

server.listen(appPort, function(){
	console.log('Server Listening @localhost:' + appPort);
});