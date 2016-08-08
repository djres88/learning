<!-- #What's a Promise?
* They're like replacements for callbacks - a return value that will eventually become available
  - They make async flows easier

##Asynchronous Example
* Imagine a simplified Ajax request like you've written before:

```javascript


console.log("Not stopping...")
```
 - The `success` and `error` functions don't fire until the request returns. That is, they are asynchronous/non-blocking.
 - Assuming the request takes a sec, "Moving on..." will print before either "I see you, {params}" or "Something went wrong!"
 - This is great. But what if you wanted to do something (or many things) when the success function returned?

## The old way #1: Callbacks
* Let's use `fetch` as an example. What's fetch? A new feature in ES6.
* The `fetch` API that basically does the same thing as an async web request $.ajax (w/o needing the jQuery lib).
  - say `fetch('path_name/here')` makes a simple GET request
* With a callback, the success/error function might look like this:
```javascript
fetch('path_name/here', (err, res) => {
  if (err) {
    console.log("You got an " + err);
  } else {
    console.log("Here's your " + res);
  }
})
```

##Promises
* Do the same thing with a diff't syntax/order. Here's the same code w/ promises:
```javascript
var p = fetch('get/stuff');
p.then(res => {
  // do stuff with got stuff
})
p.catch(error => {
  // error handling
})
```
* You could say the same as
```javascript
fetch('get/stuff/again')
  .then(
    res => {
      // Response
    },
    err => {
      // Error
    }
  )
```

* The callback won't execute until the foo resource is fetched, meaning the console.log statements won't run until we receive an error or response.
* Note that, using this model, you could only do a *single* callback; that callback would be responsible for all functionality derived from the response.
  - What that means is, if you wanted to do multiple things with the response — like make other API calls — you would need to continue indenting functions like so:
```javascript
  var nestedWeirdness = fetch('path_name/here', (err, res) => {
    if (res) {
      var res1Time = Date.now();
      return function() {
        fetch('path_name/again', (err2, res2) => {
          if (res2) {
            var res2Time = Date.now();
            console.log(res1Time);
            console.log(res2Time);
          }
        })
      }
    }
  });
```
-->
^This isn't super useful... Moving to the promiseJS documentation
https://www.promisejs.org/

* Callbacks can be a messy way of doing asynchronous programming:
```javascript
function readJSON(filename, callback){
  fs.readFile(filename, 'utf8', function (err, res){
    if (err) return callback(err);
    try {
      res = JSON.parse(res);
    } catch (ex) {
      return callback(ex);
    }
    callback(null, res);
  });
}
```
... or take a common monkey-patching example:
```javascript
Array.prototype.myMap = function(cb) {
  result = [];
  this.forEach(function(el) {
    result.push(cb(el));
  });
  return result;
}
```

* Translate myMap into a function that returns a promise:
```javascript
Array.prototype.myMap = function() {
  return new Promise(function(fulfill, reject) {

  })
}

function fetchWorkspaces(params) {
  fetch({
    url: 'api/pathname',
    method: 'get',
    data: params,
    dataType: 'json',
    success: function() {
      console.log("I see you, " + params);
    },
    error: function(data) {
      console.log("Something went wrong!");
    }
  });
}

function fetchWorkspacesReturnP(params) {
  fetchp({url: 'api/pathname',
    method: 'get',
    data: params,
    dataType: 'json'})
  .then()
  .catch()
}

function fetch(obj) {
  var req = httpify(obj.params);
  var res = send(req, obj.success, obj.error)
}

function fetchp(obj) {
  var req = httpify(obj.params);
  sendp(req).then(obj.success).catch(obj.error);
}

function doStuffButWait(cb) {
  return setTimeout(cb, 2000);
}

function helloThenHi() {
  setTimeout(function() {
    var n = "hello";
    setTimeout(function() {
      console.log(n)
    }, 1000)
  }, 2000);
}

function helloThenHiOops() {
  setTimeout(function() {
    var n = "hello";
  }, 3000);
  console.log(n);
}
```
