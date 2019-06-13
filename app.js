const request = require("request");
const chalk = require("chalk");

// const url =
//   "https://api.darksky.net/forecast/75eba5b5a9e416e571688bc0e937d5a5/37.8267,-122?units=us&lang=en";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const currentTemp = response.body.currently.temperature;
//     const currentPrecip = response.body.currently.precipProbability;
//     console.log(
//       response.body.daily.data[0].summary +
//         " It is currently " +
//         currentTemp +
//         " degrees out. " +
//         "There is a " +
//         currentPrecip +
//         "% chance of rain."
//     );
//   }
// });

// Geocoding


const geoCodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoidHJlc2JlZG5hcnoiLCJhIjoiY2p3djU0d2ZpMDJ6ejN5cGd3YTIxMGdxYiJ9.INkysOQLwkjTAR39TyJpCA&limit=1"
  request({url: geoCodeUrl, json: true}, (error, response) => {
    if(error){
      console.log("unable to connect")
    }else if (response.body.features.length === 0) {
      console.log("Unable to find location")
    }else{
      const lat=response.body.features[0].center[1]
      const long = response.body.features[0].center[0]
      console.log(
        chalk.inverse("Latitude: ") +
          chalk.yellow(lat) +
          chalk.inverse(" Longitude: ") +
          chalk.yellow(long)
      );
    }
  })
