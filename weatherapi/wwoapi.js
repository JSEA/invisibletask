const request = require('request');
const config = require('../config.js');

const getWeather = function(location, callback) {
  const options = {
    url: config.BASEURL + `?key=${config.APIKEY}&format=json&q=${location}&showlocaltime=yes`
  };

  return request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      callback(error, response, data)
    }
  });
};

module.exports.getWeather = getWeather;