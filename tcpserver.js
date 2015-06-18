var net = require (‘net’);// for tcp
Var server = net.createServer(function(socket) { 
console.log(“connection from” + socket.remoteAddress);
socket.end(“hello world”);
});
Server.listen(7000,”127.0.0.1”);
