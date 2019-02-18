const accessAPI = require('./wwoapi.js');

module.exports = function(app, express) {

  const api = express.Router();

  const inputs = ['New York', '20902', 'Los Angeles', 'London', 'Hong Kong'];

  api.get('/current', function(req, res) {
    for (var i = 0; i < inputs.length; i++) {
      accessAPI.getWeather(inputs[i], function(err, response, data) {
        if(!err) {
          console.log(`It's currently ${data.data.time_zone[0].localtime.substring(11,16)} hours and ${data.data.current_condition[0].temp_F}˚F in ${data.data.request[0].query}`);
        } else {
          console.log(err, response.statusCode);
        }
      res.end("");
      })
    }
  });

  return api
};