var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello Express</h1>');
})
//when the application gets a request that points to the homepage (/), then we want to execute a function that asks the server to pass along a request and issue a response when the program is done. In this case, the response is "Hello Express".

//Recall that when we programed the node application in LESSON 6, we had to specify the mime type ("Content-Type" : "text/html"). Here, Express assumes it's dealing with a web protocol.

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
})
//Note how much easier it is to create the server with express.js (as opposed to node). You don't
