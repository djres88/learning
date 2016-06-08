var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello Express</h1>');
})

//SERVER 1: PAGES
app.get('/me', function(req, res) {
  res.send('<h1>Hello Dingus</h1>');
})

var server1 = app.listen(3000, function() {
  console.log('For server1, go to http://localhost:3000/me');
})
//With the /me, you can create "pages" based on the URL off of localhost

//SERVER 2: REQUEST PARAMETERS ARRAY (???)
app.get('/who/:name?', function(req, res) {
  var name = req.params.name; //???????????
  res.send(name + ' was here');
});

var server2 = app.listen(3100, function() {
  console.log('For server2, go to http://localhost:3100/who/david');
});

//SERVER 3: Paths as Variables
app.get('/who/:name?/:title?', function(req, res) {
  var name = req.params.name;
  var title = req.params.title; //???????????
  res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
});

var server3 = app.listen(3200, function() {
  console.log('For server3, go to http://localhost:3200/who/david/feeling-stupid');
});
// could also do http://localhost:3200/who/david/understanding-50%'
//The paths are variables that we can pass along to the application

//SERVER 4: Bad Route
app.get('*', function(req, res) { //if you get anything else
  res.send('bad route');
});

var server4 = app.listen(3300, function() {
  console.log('For server4-badroute, go to http://localhost:3300/something');
})
