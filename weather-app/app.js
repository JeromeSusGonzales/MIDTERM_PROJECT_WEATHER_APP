const request = require('request')

// const url ='http://api.weatherstack.com/current?access_key=06258cf566e3f39de1d862a2c571cba9&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response)=>{
//     if (error){
//        console.log('Unable to connect to weather service')
//     }else if(response.body.error) {
//          console.log('Unable to find Location')
//     }
    
//     else{
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out.')
//     }

// })

//Geocoding
 const geocodeUrL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Manila.json?access_token=pk.eyJ1IjoiamVyb21lc3VzIiwiYSI6ImNrdjg5cjJhNTlzMzcycXE2cm9sODFmcDIifQ.GPSgWxSWKfimfyaI9f7yRQ&limit=1'
 request({url: geocodeUrL, json: true},(error,response) => {

    if(error){
        console.log('Unable to connect to location services!')
    }else if(response.body.features.lenght === 0){
        console.log('Unable to find location. Try another search.')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
  
 })