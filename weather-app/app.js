const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=06258cf566e3f39de1d862a2c571cba9&query=37.8267,-122.4233'

request({ url: url}, (error, response)=>{
   const data = JSON.parse(response.body)
   console.log(data.current)
})