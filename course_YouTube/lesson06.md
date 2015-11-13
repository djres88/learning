#LESSON 6: BUILDING A HELLO NODE JS APPLICATION

##TEN EASY STEPS

1) Create a project folder

2) Create your first file (a .js file)

3) Import Modules
- Node's equivalent of requiring jQuery
- Modules are necessary for node bc it's a very small library
- Modules can be either built-in, or modules that you install
- Here we need the http module:
  * Look in Node's documentation here: https://nodejs.org/api/.
  * This shows you the series of methods and properties you can use. (Same for other modules)
  * HTTP is a built-in module, so you don't need to install anything. Just need to require it.

4) Require the module in your .js file by assigning it to a variable:
```javascript
var http = require('http'); // adds the http module to the file
```
5) Create a server using the method createServer (`http.createServer`) and assign this to a variable (`var myServer = http.createServer`).

6) Add a callback function to createServer that tells the server how to respond to the client: `http.createServer(function(request, response) {`

7) Inside the callback function, instruct the server how to respond. The header tells the client that everything is okay (200) as well as what file type to expect ("Content-Type" : "text/html"):
`response.writeHead(200, {"Content-Type : "text/html"})`

8) Write the server's actual response, the part the client-side user will see: `response.write("Hello");`

9) Use `response.end` to tell the program it's finished
  - Tells the program the response is finished

10) At the end (i.e. after the variable definitions), tell the server which port it should *listen* on: `myServer.listen(3000)`
