class Thermostat {
  constructor(Fahrenheit) {
    this.Fahrenheit = Fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this.Fahrenheit - 32);
  }
  set temperature(celsius) {
    this.Fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
    // Change this line
  } else {
    reject("Data not received");
    // Change this line
  }
});
