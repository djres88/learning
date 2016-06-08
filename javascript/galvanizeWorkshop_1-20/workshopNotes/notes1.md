#Initial Review

##Hoisting
* Function declarations are hoisted to the top; interpreter reads first
`function test() {}`
* Variable assignments are interpreted in order
`var test = function() {};`

##Block Scope
* Only functions can change scope. Block scope does not exist in JS
```javascript
var inBlock = false;

for (var i = 0; i < 5; i++) {
  inBlock = true;
}

if(inBlock){
  console.log('Is there block scope in JS? ' + !inBlock);
}
// false
```

##Exercise: Scope
Recap
* The first time the engine runs thru your code, all it does is pull the variables.
*
----

#Closures

When you assign a variable to a function, that new variable remembers all other variables that were in scope for that function.

```javascript
var closureAlert = function() {
  var x = 0;
  var alerter = function() {
    alert(x++);
  };
  return alerter;
};

//When you assign funcStorer to a function, you get access to all variables that function has access to. `alerter` has access to the first instance of x, but it also changes x.
var funcStorer = closureAlert(); --> RETURNS alerter
var funcStorer2 = closureAlert();
funcStorer(); //1
funcStorer(); //2  
funcStorer2(); // 1
```
To drive this point home:
```javascript
var powerOfN = function(exponent) {
  var calc = function(base) {
    var sum = 1;
    for (var i = 0; i < exponent; i++) {
      sum *= base;
    }
    return sum
  }
  return calc;
}
//CS concept called "currying"
var powerOf3 = powerOfN(3);
powerOf3(4); // 256;
var powerOf5 = powerOfN(5);
powerOf5(2); // 32
```
The new function is "hardcoded" using the information that you passed it.

###Closure Example
```javascript
  function counter() {
    var n = 0;

    return {
      count: function() { return ++n; },
      reset: function() { n-0; }
    };
  }

  var c = counter(), d = counter();
  d.count(); // 0
  d.count(); // 1
  c.count(); // 0
```
*Return value of the outer function IS the inner function*
**RECIPE FOR A CLOSURE**
```javascript
function checkscope() {
  var innerVar = "local scope";
  function innerFunc() {
    return innerVar;
  }
  return innerFunc;
}
```
User doesn't get access to the inner variables directly.

###Exercise -- Closures
```javascript
var Toaster = function() {
  var temp = 0;
  var isOn = false;

  return {
    toggle: function() {return !isOn;},
    incrementTemp: function() {return ++temp;},
    decrementTemp: function() {return --temp;},
    getTemp: function() {return temp}
  }
}

var myToaster = Toaster();
myToaster.incrementTemp()
console.log(myToaster.getTemp());
myToaster.isOn = true; // doesn't work! User doesn't have access.
```

## Higher-order Functions and Callbacks
```javascript
var ifElse = function(condition, isTrue, isFalse, arg) {
  if (condition) {
    isTrue(arg);
  } else {
    isFalse(arg);
  }
};

ifElse(true, function(x) {console.log(x)}, function(){}, 'hello')
```
###Exercises
* Once
```javascript
var once = function(func) {
  //create private variable
  var hasBeenCalled = false;
  //return function to the user (already a closure at this point)
  return function() {
    if(hasBeenCalled){
      //don't do anything
    }
    else if(!hasBeenCalled){
      func();
      hasBeenCalled = true;
    }
  };
};

var submitPayment = function(cardNumber, amount) {
  console.log("Charging", cardNumber, "Amount: ", amount);
};

var processCreditCard = once(sumbitPayment)

console.log(processCreditCard()); //does something
console.log(processCreditCard()); //does nothing
```

* Custom number of arguments

```javascript
func.apply(null, arguments)

add(2,3,4); //equivalent to
add.apply(null, [2,3,4])
```

##Underscore
Source code -- put the helper functions in as closures
```javascript
var _ = {};

var runCode = function() {

  _.each: function() {

  },
  _.uniq: function() {

  }
};
runCode();

```
Looping with `_.each`

```javascript
function AnimalMaker(name) {

  return {
    speak
  }
}
```

map then reduce: common for dealing with data
