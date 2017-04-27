var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var port = process.env.POST || 8080; 
var app = express();
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
require('./app/routing/html-routes.js', (app));

app.listen(port, function(){
	console.log("App is listening on port: " + port);
}); 