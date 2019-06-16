const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/75eba5b5a9e416e571688bc0e937d5a5/" +
    (latitude) +
    "," +
   (longitude) +
    "?units=us";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services");
    } else if (response.body.error) {
      callback("unable to find location");
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        temperature: response.body.currently.temperature,
        precipChance: response.body.currently.precipProbability + "%",
        place: response.body.timezone 
        
      });
    }
  });
}

module.exports = forecast