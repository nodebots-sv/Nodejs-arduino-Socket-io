
var express= require('express');  
var app = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five"), board,led;  
var io=require('socket.io')(httpServer);
 
var port = 3000; 
 
app.use(express.static(__dirname + '/public'));
 
app.get('/', function(req, res) {  
        res.sendFile(__dirname + '/public/index.html');
});
 
httpServer.listen(port);  
console.log('Server en http://localhost:' + port);  
var led;
 
//Conexion arduino board
 
var board = new five.Board();  
board.on("ready", function() {  
    console.log('Arduino connectado');
    led = new five.Led(13);
   
});


 
//conexion a socket
io.on('connection', function (socket) {  
        console.log(socket.id);
 
        socket.on('led:on', function (data) {
           led.on();
           console.log('LED ENCENDIDO RECIBIDO');
        });
 
        socket.on('led:off', function (data) {
            led.off();
            console.log('LED APAGADO RECIBIDO');
 
        });
 
    });
 
console.log('Esperando Conexion');


