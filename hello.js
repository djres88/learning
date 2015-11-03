//From https://www.youtube.com/watch?v=Zao1BWC-RWo
var http = require('http'); //add the http module
var myServer = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type":"text/html"});
  //200 says "everything is fine with request" (404 means the server couldn't find the page you requested)
  //Content-type specifies what type of file the browser should interpret.
  response.write("<b>Hello</b> World");
  response.end();
}); //create a server

myServer.listen(3000);

console.log("Go to http://localhost:3000 on your browser");
