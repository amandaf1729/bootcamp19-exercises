/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const googleMapsClient = require("./google_api.js");

const givenAddress = process.argv[2];

googleMapsClient.findPlace({input: givenAddress, inputtype: 'textquery'}).asPromise()
.then((return_place) => {
      googleMapsClient.place({placeid: return_place.json.candidates[0].place_id}).asPromise()
      .then((response) => {
          console.log(givenAddress + " is located at coordinates (" + 
          response.json.result.geometry.location.lat.toFixed(3) + ", " + 
          response.json.result.geometry.location.lng.toFixed(3) + "), at the address " + 
          response.json.result.formatted_address + "." );
      })
      .catch((err) => {
          console.log(err);
      });
  })
  .catch((err) => {
      console.log(err);
  });
