var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));
var appPort = process.env.PORT || 5000;

//Route for html
app.get('/', function(request, response){
	response.sendFile(__dirname + '/public/index.html');
});

//Route for css, js
app.get('/public/:name', function(request, response){
	response.sendFile(__dirname + '/public/' + request.params.name)
});

//Socket handling
io.on('connection', function(socket){
	//User connect messages
	socket.on('statusMessage', function(message){
		io.emit('statusMessage', message);
	});
	//Chat messages
	socket.on('chatMessage', function(message){
		io.emit('chatMessage', message);
	});
});

//Start node server
http.listen(appPort, function(){
	console.log('Server running at localhost:' + appPort);	
});
