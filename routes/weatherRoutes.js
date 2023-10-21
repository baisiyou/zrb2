const express = require('express');
const router = express.Router();

const clotheData = require('../model/weatherModel');



const datefns = require('date-fns');
let dateTime = datefns.format(new Date(), 'd MMM   HH:mm aaa');





let geoData;
let weatherData;

router.get('/', async (req, res) => {
    let address = null;

    if (req.header('X-Real-IP') === undefined) {
        address = `https://ipinfo.io/json?token=${process.env.IP_API_KEY}`
    } else {
        address = `https://ipinfo.io/${req.header('X-Real-IP')}/json?token=${process.env.IP_API_KEY}`
    }

    await fetch(address).then(
        (response) => response.json()
    ).then(res => {
        geoData = res;
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res.city},${res.country}&appid=${process.env.WEATHER_API_KEY}`)
    }).then(response => response.json())
        .then(res => {
            weatherData = res;
        }).catch(err => console.log(err));

    const timezone = weatherData.timezone * 1000;
    console.log('timezone: ', timezone);
    const offset = new Date().getTimezoneOffset() * 60 * 1000;
    console.log('offset : ', offset);
    const localTime = new Date().getTime();
    console.log('localTime : ', localTime);
    const utc = localTime + offset;
    console.log('utc : ', utc);
    let targetDate = new Date(utc + timezone);
    console.log('targetDate : ', targetDate);

    dateTime = datefns.format(targetDate, 'd MMM   HH:mm aaa');
    console.log('dateTime : ', dateTime);

    const weatherDataToSend = {
        title: 'Weather',
        dateTime: dateTime,
        city: geoData.city,
        country: geoData.country,
        icon: weatherData.weather[0].icon,
        description: weatherData.weather[0].description,
        main: weatherData.weather[0].main,
        temp: Math.round(weatherData.main.temp - 273.15),
        feels_like: Math.round(weatherData.main.feels_like - 273.15),
        humidity: `${weatherData.main.humidity}%`,
        wind: weatherData.wind.speed,
        visibility: weatherData.visibility,
        pressure: weatherData.main.pressure,
        clotheData,
    };

    res.render('weather', weatherDataToSend);

});




module.exports = router;