var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

function setup(port){
	server.listen(port);

	console.log("Socket Listening to localhost:" + port);

	app.get('/', function (req, res) {
		res.sendfile(__dirname + '/index.html');
	});

	io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
		socket.on('my other event', function (data) {
			console.log(data);
		});
	});
}

var boxOfOutput = {
	setup:setup,
};

module.exports = boxOfOutput;