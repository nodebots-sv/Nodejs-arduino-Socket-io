var five = require("johnny-five");

five.Board().on("ready", function() {
  var temperature = new five.Temperature({
    controller: "LM35",
    pin: "A0"
  });

  temperature.on("data", function() {
    console.log("Temperatura en Celsius:", this.celsius + "°C", this.fahrenheit + "°F");
  });
});

//para capturar la temperatura en grados farenheit solo agrega: 
// ," Grados Fahrenheit: ", this.fahrenheit + "°F"
