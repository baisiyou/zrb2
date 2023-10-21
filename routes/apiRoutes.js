const express = require('express');
const router = express.Router();

const clotheData = require('../model/weatherModel');



const datefns = require('date-fns');
const { es } = require('date-fns/locale');
const dateTime = datefns.format(new Date(),'d MMM   HH:mm aaa');

let geoData;
let weatherData;
let temp, description,isRainy;

fetch(`https://ipinfo.io/json?token=${process.env.IP_API_KEY}`).then( 
    (response) => response.json()
  ).then( res => {
   geoData = res;
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res.city},${res.country}&appid=${process.env.WEATHER_API_KEY}`)
  }).then(response => response.json())
   .then(res =>{
      weatherData = res;
      temp = Math.round(res.main.temp - 273.15);
      description = res.weather[0].description
   }).catch(err => console.log(err));

  


    
  

 //api endpoint
 router.get('/', (req, res) => {
  if (geoData && weatherData) {
    let season, dressTip, image;

    if (temp < -10) {
        season = "winter";
        dressTip = clotheData.winter02.tips;
        image = clotheData.winter02.image;
    } else if (temp >= -10 && temp <= 0) {
        season = "winter";
        dressTip = clotheData.winter01.tips;
        image = clotheData.winter01.image;
    } else if (temp > 0 && temp < 7) {
        season = "autumn";
        dressTip = clotheData.autumn03.tips;
        image = clotheData.autumn03.image;
    } else if (temp >= 7 && temp < 15 && description.toLowerCase().includes("rain")) {
        season = "rainyAutumn";
        dressTip = clotheData.rainyAutumn.tips;
        image = clotheData.rainyAutumn.image;
    } else if (temp >= 7 && temp < 15 && isSpring == true) {
        season = "spring";
        dressTip = clotheData.spring01.tips;
        image = clotheData.spring01.image;
    } else if (temp >= 7 && temp < 15) {
        season = "autumn";
        dressTip = clotheData.autumn01.tips;
        image = clotheData.autumn01.image;
    } else if (temp >= 15 && temp < 20 && description.toLowerCase().includes("rain")) {
        season = "rainyDay";
        dressTip = clotheData.rainyDay.tips;
        image = clotheData.rainyDay.image;
    } else if (temp >= 15 && temp < 22) {
        season = "summer";
        dressTip = clotheData.summer01.tips;
        image = clotheData.summer01.image;
    } else if (temp >= 22 && temp < 29) {
        season = "summer";
        dressTip = clotheData.summer02.tips;
        image = clotheData.summer02.image;
    } else {
        season = "summer";
        dressTip = clotheData.summer03.tips;
        image = clotheData.summer03.image;
    }
  
  
    const apiResponse = {
      title: 'Weather API',
      dateTime,
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
      dressTip: {
        season,
        dressTip,
        image,
      
      },
    };
    res.json(apiResponse);
  } else {
    res.status(404).json({ error: 'Weather data not available' });
  }
});

 const springMonth = ["Mar","Apr","May"]; 
const regex = new RegExp(springMonth.join("|"));
const isSpring = regex.test(dateTime);


module.exports = router;