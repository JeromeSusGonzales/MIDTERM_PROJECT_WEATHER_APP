const request = require('request')
const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=06258cf566e3f39de1d862a2c571cba9&query=/' + latitude + ',' + longitude + '&units=f'

  request({url: url, json:true}, (error, {body} = {}) => {
      if (error){

         callback('Unable to connect to weather service!', undefined)

      }else if(body.error){

        callback('Unable to find Location.', undefined)
          
      }else{

        callback(undefined, body.location.localtime + '/' + body.current.weather_descriptions[0] + '/' + body.current.temperature + ' °C It feels like '  + body.current.feelslike +  '  °C' + ' Outside   /' + body.current.precip + '% chance of rain')

      }

  })
}

module.exports = forecast