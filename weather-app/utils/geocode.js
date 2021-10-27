const request = require('request')
const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiamVyb21lc3VzIiwiYSI6ImNrdjg5cjJhNTlzMzcycXE2cm9sODFmcDIifQ.GPSgWxSWKfimfyaI9f7yRQ&limit=1'

    request({url: url, json: true}, (error, response) => {
         if(error){

             callback('Unable to Connect to location services!', undefined)

         }else if(response.body.features.lenght === 0) {

            callback('Unable to Find Location. Try another search.', undefined)
         }else{
             callback(undefined, {
                 latitude: response.body.features[0].center[0],
                 longitude: response.body.features[0].center[1],
                 location: response.body.features[0].place_name
             })
         }
    })
}

module.exports = geocode