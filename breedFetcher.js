const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const breed = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log('Error', error);
  }
  
  const data = JSON.parse(body);

  for (let i = 0; i < data.length; i++) {
    if (breed === data[i].name) {
      console.log(data[i].description);
    }

    if (breed !== data[i].name) {
      console.log('Sorry, we have never heard of the ' + breed + ' breed...');
      return;
    }
  }
});