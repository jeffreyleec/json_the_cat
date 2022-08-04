const https = require('https');
const myArgs = process.argv.slice(2);
const breedName = myArgs[0];
//console.log(breedName)

const request = require('request');

request(`https://api.thecatapiappleorangedog.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error, 'testetsetset'); // Print the error if one occurred

  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('check your spelling');
    } else {
      console.log(data[0].description);

    }
  }


   
});




