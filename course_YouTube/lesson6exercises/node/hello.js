var http = require('http');
var myServer = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("Hello <b>World</b>");
  response.end;
}); //created a server

myServer.listen(3000); // tells our server which port to listen on

console.log("Go to http://localhost:3000 on your browser")
/*
What's happening here:
1) var http = require('http');
  - This adds the http module and assigns it the variable http
2) var myServer = http.createServer
  - The method createServer is applied to the variable http; the result is assigned to the variable myServer
3) var myServer = http.createServer(function(request, response) {
  - A callback function is passed as an argument to the createServer method
4) response.writeHead(200, "Content-Type : "text/html")
  - header tells client what types of files the server will be returning
  - status code 200 lets client know that everything is fine with the request
  - Mime type identifies the type of file that the server is going to send the client. In this case, {"Content-Type" : "text/html"} indicates that we'll be sending an HTML file)
5) response.write("Hello");
  - This code is the only thing that the client-side user can actually see
6) response.end;
  - Tells the program the response is finished
7) listen
  - Tells program to listen on a certain port
  - When you use the createServer method, one of the properties of the server will be its ability to listen to requests coming in from a port
  - you do this after the variable defn of the server
8) console.log("Go to..")
  - prints in the terminal where you should look for the server
*/
