// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('./public/index.html')
});

app.post('/next', function(req, res){
	res.redirect('/canaryIslands')
})

app.get('/canaryIslands', function(req, res){
  res.send('./public/canaryIslands.html')
});

app.post('/capeVerde', function(req, res){
	res.redirect('/capeVerde')
})

app.get('/capeVerde', function(req, res){
  res.send('./public/capeVerde.html')
});

app.post('/straitOfMagellan', function(req, res){
	res.redirect('/straitOfMagellan')
})

app.get('/straitOfMagellan', function(req, res){
  res.send('./public/straitOfMagellan.html')
});

app.post('/guam', function(req, res){
	res.redirect('/guam')
})

app.get('/guam', function(req, res){
  res.send('./public/guam.html')
});

app.post('/phillipines', function(req, res){
	res.redirect('/phillipines')
})

app.get('/phillipines', function(req, res){
  res.send('./public/phillipines.html')
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})