var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var port = process.env.POST || 8080;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
var app = express()
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(port, function(){
	console.log("App is listening on port: " + port);

}); 