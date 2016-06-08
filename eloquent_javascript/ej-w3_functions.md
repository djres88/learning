##Self-Invoking Functions
Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression:

```JavaScript
(function () {
    var x = "Hello!!";      // I will invoke myself
})();
```

##Functions are Objects
The typeof operator in JavaScript returns "function" for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The **arguments.length** property returns the number of arguments received when the function was invoked:
```JavaScript
function myFunction(a, b) {
    return arguments.length;
}

myFunction(3, 4); // 2
```

The **toString()** method returns the function as a string:
```JavaScript
function myFunction(a, b) {
    return a * b;
}

var txt = myFunction.toString();

myFunction.toString; // function myFunction(a, b) { return a * b; }
```

##Closure
###Counter Dilemma (from w3 -- http://www.w3schools.com/js/js_function_closures.asp)
Suppose you want to use a variable for counting something, and you want this counter to be available to all functions. You could use a global variable, and a function to increase the counter:

```JavaScript
var counter = 0;

function add() {
    counter += 1;
}

add();
add();
add();

// the counter is now equal to 3
```
Problem is, any script on the page can change the counter, without calling add(). You could write ```counter += 6``` and change the counter that way.

But if you declare the counter inside the function, nobody will be able to change it without calling add():

```JavaScript
function add() {
    var counter = 0;
    counter += 1;
}

add();
add();
add();

// the counter should now be 3, but it does not work !
```

But now the function doesn't work; every time we call add(), counter is reset to 0 and increased by 1.

To solve this correctly, you use a **closure**. Here's an example:

####Closure Example
```JavaScript
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// the counter is now 3
```

Let's look at an example that DOESN'T use a self-invoking function. The following code defines a function, wrapValue, which creates a local variable. It then returns a function that accesses and returns this local variable.

```JavaScript
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```
This feature — the ability to reference a specific instance of local variables in an enclosing function — is called *closure*. An inner function that “closes over” some local variables is called *a* closure. Think of the inner function — the one that returns ```localVariable``` — as "freezing over" the instance of localVariable.  
