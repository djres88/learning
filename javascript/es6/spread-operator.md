##A note on the ES6 spread operator
* It's just like Ruby's splat operator
* Takes an array (of arguments, often) and separates them by commas


###For Arguments
```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
// With ES6 spread you can now write the above as:
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
// Any argument in the argument list can use the spread syntax and it can be used multiple times.
function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
// ^ [3] gets splatted (spread)
```

###For an Array Literal
```javascript
var JapaneseCars = ['Toyota', 'Honda']
var GermanCars = ['Mercedes-Benz', 'BMW']
var USCars = ['Dodge', 'Chevrolet', 'Ford']
var cars = ['Alfa Romeo', ...JapaneseCars, 'Datsun', ...GermanCars, ...USCars]
```

###Apply for `new`
Example: In ES5 it is not possible to compose new with apply. (In ES5 terms, apply does a [[Call]] and not a [[Construct]].) In ES6 the spread syntax naturally supports this:
```javascript
var dateFields = readDateFields(database);
var d = new Date(...dateFields);
```

###Copy an array
```javascript
var arr = [1,2,3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); // arr2 becomes [1,2,3,4], arr stays unaffected
```
