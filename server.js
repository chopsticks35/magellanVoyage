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

//using get and post to navigate button to next routes \\

//home page \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root: './public'});
});

app.post('/canaryIslands', function(req, res){
	res.redirect('/canaryIslands')
})

app.get('/canaryIslands', function(req, res){
  res.sendFile('canaryIslands.html', {root: './public'})
});

app.post('/capeVerde', function(req, res){
	res.redirect('/capeVerde')
})

app.get('/capeVerde', function(req, res){
  res.sendFile('capeVerde.html', {root: './public'})
});

app.post('/straitOfMagellan', function(req, res){
	res.redirect('/straitOfMagellan')
})

app.get('/straitOfMagellan', function(req, res){
  res.sendFile('straitOfMagellan.html', {root: './public'})
});

app.post('/guam', function(req, res){
	res.redirect('/guam')
})

app.get('/guam', function(req, res){
  res.sendFile('guam.html', {root: './public'})
});

app.post('/phillipines', function(req, res){
	res.redirect('/phillipines')
})

// no next route after phillipines \\
app.get('/phillipines', function(req, res){
  res.sendFile('phillipines.html', {root: './public'})
});

//bonus 1:  using search in the url and simply providing an erro message rather than another page
app.get('/:country', function(req, res){
    
    countrySearch = req.params.country.toUpperCase();
    res.send("SORRY, MAGELLAN DID NOT VISIT " + countrySearch)
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})