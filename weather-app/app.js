const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=06258cf566e3f39de1d862a2c571cba9&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response)=>{
//    console.log(response.body.current)
console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out.')
})