
var express= require('express');  
var app = express();  
var httpServer = require("http").createServer(app);  
var five = require("johnny-five"), board, motor, led;  
var io=require('socket.io')(httpServer);
 
var port = 3000; 
 
app.use(express.static(__dirname + '/public'));
 
app.get('/', function(req, res) {  
        res.sendFile(__dirname + '/public/index.html');
});
 
httpServer.listen(port);  
console.log('Server en http://localhost:' + port);  
var led;
 

 //Conectar arduino
var board = new five.Board();  
board.on("ready", function() {  
    console.log('Arduino connectado');
    led = new five.Led(13);
    motor = new five.Motor(5);
});

 board.repl.inject({
    motor: motor
  });
 
//nonexion a socket
io.on('connection', function (socket) {  
        console.log(socket.id);
 
        socket.on('led:on', function (data) {
           led.on();
           motor.start();
           console.log('LED Y MOTOR START');
        });
 
        socket.on('led:off', function (data) {
            led.off();
            motor.stop();
            console.log('APAGANDO LEB Y MOTOR');
 
        });
 
    });
 
console.log('Esperando Conexion');
