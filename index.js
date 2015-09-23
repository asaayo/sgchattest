var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));

//Route for index
app.get('/', function(request, response){
	response.sendFile(__dirname + '/public/index.html');
});

//Route for css, js
app.get('/public/:name', function(request, response){
	response.sendFile(__dirname + '/public/' + request.params.name)
});

//Socket handling
io.on('connection', function(socket){
	//Handling for user connect messages
	socket.on('statusMessage', function(message){
		io.emit('statusMessage', message);
	});
	//Handling for chat messages
	socket.on('chatMessage', function(message){
		io.emit('chatMessage', message);
	});
	socket.on('disconnect', function(){
	});
});

//Starts the node server
http.listen(app.get('port'), function(){
	console.log('listening on localhost:' + app.get('port'));
});