//const https = require('https');
//const breedName = require('./index.js');

const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      
      return callback(error, null); // Print the error if one occurred
  
    } else {
      const data = JSON.parse(body);
  
      if (data[0] === undefined) {
        return callback('check your spelling');
      } else {
        return callback(null, data[0].description);
    
      }
    }
   
  });
 
  
};


module.exports = { fetchBreedDescription };
