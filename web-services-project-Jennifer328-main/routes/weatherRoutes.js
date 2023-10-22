const express = require('express');
const router = express.Router();

const clotheData = require('../model/weatherModel');



const datefns = require('date-fns');
const dateTime = datefns.format(new Date(),'d MMM   HH:mm aaa');

let geoData;
let weatherData;

fetch(`https://ipinfo.io/json?token=${process.env.IP_API_KEY}`).then( 
    (response) => response.json()
  ).then( res => {
   geoData = res;
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res.city},${res.country}&appid=${process.env.WEATHER_API_KEY}`)
  }).then(response => response.json())
   .then(res =>{
      weatherData = res;
   }).catch(err => console.log(err));

router.get('/', (req, res) =>{
    res.render('weather', 
    {title: 'Weather',
     dateTime: dateTime,
     city:`${geoData.city}`, 
     country:`${geoData.country}`,
     icon: `${weatherData.weather[0].icon}`,
     description:`${weatherData.weather[0].description}`,
     main:`${weatherData.weather[0].main}`,
     temp:`${Math.round(weatherData.main.temp - 273.15)} `,
     feels_like: `${Math.round(weatherData.main.feels_like - 273.15)}`,
     humidity: `${weatherData.main.humidity}%`,
     wind:`${weatherData.wind.speed}`,
     visibility:`${weatherData.visibility}`,
     pressure: `${weatherData.main.pressure}`,
     clotheData,
   });
 });

module.exports = router;