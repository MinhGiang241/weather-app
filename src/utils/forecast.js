const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f11a34c00aa062357ea063aecba048e1&query=${latitude},${longitude}&units=m`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (!body.current) {
            callback('Unable to connect to location service', undefined)
        } else {
            callback(undefined, `the temperature at currently is ${body.current.temperature} the temperature feel likes at currently is ${body.current.feelslike}`)
        }
    })
}


module.exports = forecast;