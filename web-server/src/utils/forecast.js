const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=06258cf566e3f39de1d862a2c571cba9&query=/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            // if no internet or cannot connect
            callback('Unable to connect to the weather service', undefined)
        } else if (body.error) {
            // if location cannot be located (no latitude or longitude)
            callback('Unable to find location', undefined)
        }

        else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const weather_descriptions = body.current.weather_descriptions[0]
            const icon = body.current.weather_icons
            
            var date = body.location.localtime
            console.log(date.toLocaleString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            }))
            console.log(body.location.localtime)
            callback(undefined, {
                date: date,
                icon: icon,
                degree: temperature,
                description: weather_descriptions
            })

        }
    })

}

module.exports = forecast