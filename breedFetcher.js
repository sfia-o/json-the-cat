const request = require('request');

const args = process.argv.slice(2);

const fetchBreedDescription = function(breed, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('Sorry, we have never heard of the ' + breed + ' breed...', null);
      return;
    }

    callback(null, data[0].description);

  });
};


module.exports = {fetchBreedDescription};