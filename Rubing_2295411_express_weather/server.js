const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '1691c37009f5ba8b8a957b31b9655570';

// Allows connection to the CSS file
app.use(express.static('public'));
// Accesses bodyParser parser and allows us to access the name of the city the user typed
app.use(bodyParser.urlencoded({ extended: true }));
// Sets the template engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {weather: null, error: null});
})
// post request that logs the value of 'city' to the console
app.post('/', (req, res) => {
  let city = req.body.city;
  let country = req.body.country;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&&country=${country}&appid=${apiKey}`


  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name} of ${weather.sys.country}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
