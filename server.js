// DON'T FORGET THE WIREFRAME
// MAKE A CONTROLLER FOLDER AND FILE LATER AND MOVE THE ROUTES INTO IT

if(process.env.NODE_ENV === 'development') { 
    require('dotenv').config();
}
// console.log(process.env.MONGODB_URI);
// console.log(process.env);

// ======================================================================================
//                                  DEPENDENCIES
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const show = console.log;
// show('yasssss');

// ======================================================================================
//                                  MIDDLEWARE
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

// ======================================================================================
//                                  DATABASE
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

// ======================================================================================
//                                  MIDDLEWARE
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: true }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


// ======================================================================================
//                                  NON-RESTFUL ROUTES
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//localhost:3000 
app.get('/' , (req, res) => {
    res.send('Hello World!');
});

// ======================================================================================
//                  REST ROUTES - "REpresentational State Transfer" - INDUCES
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//     -    INDEX   -   NEW -   DELETE  -   USE -   CREATE  -   EDIT    -   SHOW    -
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Index '/<nameOfResource>/new' GET
app.get('/plants/', (req, res) => {
    res.send('hello index');
})

// New '/<nameOfResource>/new' GET

// Delete '/<nameOfResource>/:id' DELETE

// Update '/<nameOfResource>/:id' PUT

// Create '/<nameOfResource>/' POST 

// Edit '/<nameOfResource>/:id/edit' GET
app.get('/plants/:id/edit', (req, res) => {
    res.render('Edit');
});

// Show '/<nameOfResource>/:id' GET 
app.get('/plants/:id/', (req, res) => {
    res.render('Edit');
});


// ======================================================================================
//                                  LISTENER
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

app.listen(PORT, () => console.log( 'Listening on port:', PORT));