var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');

//Middleware
var morgan = require('morgan'); //Logging
var bodyParser = require('body-parser'); //parse JSON

//api
var api = require('./api');

mongoose.connect(config.db.url);

//seed the database
if(config.seed){
  //TODO: do seeding...
}


//add baseline middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setup the API
app.use('/api', api);

//create fallback error state

module.exports = app;
