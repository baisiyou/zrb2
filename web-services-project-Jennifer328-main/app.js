const dotenv= require('dotenv').config();
const express = require('express');



const weatherRoutes = require('./routes/weatherRoutes.js');
// import pkg from'./public/loginController.js';
// const {user} = pkg.default;



//express app
const app = express();
app.set('view engine','ejs');

app.use(express.static('public'));

app.listen(3000);

app.get('/', (req, res) =>{
   res.render('home', {title: 'Home'});
});


app.get('/profile', (req, res) => {
   // You can pass data to your template if needed
   // const data = {
   //   // your data here
   // };
 
   res.render('profile', {title: 'profile'});
 });
 

app.get('/register', (req, res) =>{
    res.render('register', {title: 'Register'});
 });



// get weather info
 app.use('/weather',weatherRoutes);

 // todo page

 app.get('/agenda', (req, res) =>{
    res.render('agenda', {title: 'Agenda'});

 });



