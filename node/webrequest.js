//THIS PART WILL ALWAYS BE THE SAME:
var http = require('http'); //add the http module
var myServer = http.createServer(function(request, response) {
  //^^Stays the same...
  response.writeHead(200, {"Content-Type":"text/html"});
  
