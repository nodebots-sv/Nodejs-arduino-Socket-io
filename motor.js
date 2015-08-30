var five = require("johnny-five"),
  board, motor, led;

board = new five.Board();

board.on("ready", function() {
  // crea una nueva instancia de hardware tipo motor
  motor = new five.Motor({
    pin: 5
  });


  board.repl.inject({
    motor: motor
  });

  // Motor Event API

  // eventos que sucederan al iniciar el motor
  motor.on("start", function() {
    console.log("El motor se a encendido");

    // el motor girara por 5 segudos
    board.wait(5000, function() {
      motor.stop();
    });
  });

  // eventos que pueden suceder al parar el motor.
  motor.on("stop", function() {
    console.log("El motor se a detenido");

   
});
   
     


//metodo para inciar el motor
  motor.start();


});
