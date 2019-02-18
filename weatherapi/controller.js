const accessAPI = require('./wwoapi.js')

module.exports = function(app, express) {

  const api = express.Router()

  const inputs = ['Houston', '20902', 'Los Angeles', 'London', 'Hong Kong']

  api.get('/current', function(req, res) {
    for (let i = 0; i < inputs.length; i++) {
      accessAPI.getWeather(inputs[i], function(err, response, data) {
        if(!err) {
          const apiData = data.data

          console.log(`It's currently ${apiData.time_zone[0].localtime.substring(11,16)} hours and ${apiData.current_condition[0].temp_F}˚F in ${apiData.request[0].query}`)
        } else {
          console.log(err, response.statusCode)
        }
      res.end("")
      })
    }
  })

  return api
}