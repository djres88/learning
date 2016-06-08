#Higher-order Functions

##Abstraction
* h-o functions make code cleaner and easier to understand, which helps to eliminate bugs
* For example, which is less likely to contain bugs?
```javascript
var total = 0, count = 1; while (count <= 10) {
total += count;
count += 1; }
console.log(total);
```
OR
```javascript
console.log(sum(range(1, 10)));
```
(Where the functions `sum` and `range` are defined elsewhere.) Summing ranges isn't about `for-`loops; it's about sums and ranges.

* *Abstraction* hides the often-confusing details behind a program. These "helper" functions are re-used throughout the program, saving you lines and headache.
  - Whenever you find yourself repeating some concept over and over, you have a candidate for abstraction.

###Abstraction Example: forEach
* For-loops are ugly and repetitive. It's easy enough to abstract them into a function:
```javascript
function logEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}
```

* You can do more than just log elements. You can pass a custom action as a function value like so:
```javascript
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}
```
  - The code block performs the action for each element of the array.

* You don't need to pass a predefined function like `console.log`; you can create a function on the fly:
```javascript
var numbers = [7, 8, 10, 32], average = 0;
forEach(numbers, function(number) {
  average += (number/numbers.length);
})
console.log(average);
//
//A weird but mathematically correct way to calculate the average; (x + y)/4 = x/4 + y/4.
```
  - Turns out forEach is a predefined method on arrays, so you could also write something like:
  ```javascript
  numbers.forEach(function(number) {
    average += (number/numbers.length);
  })
  ```
  - In each case, the variable `number` replaces something like numbers[i].

##Higher-order Functions
* **Higher-order Function:** A function that operates on other function(s), either by
  - (1) taking them as arguments
    ```javascript
    var people = ["me", "you", "everyone else"];
    people.forEach(function(person) {
        console.log(person);
    })
    ```
  - or (2) returning them
  ```javascript
  function nPower(exponent) {
    return function(base) {
      var sum = 1;
      for (var i = 0; i < exponent; i++) {
        sum *= base;
      }
      return sum;
    }
  }
  var powerOf5 = nPower(5);
  console.log(powerOf5(2));
  ```

* For example, we can use higher-order functions to:
  1. Create new functions
    `(see nPower example above)`
  2. Change other functions
    ```javascript
    function narration(myFunction, functionName) {
      return function(arg) {
        console.log("passing", arg, "to", functionName);
        var val = myFunction(arg);
        console.log("passed", arg, "to", functionName, "- got", val);
        return val;
      };
    }
    narration(Boolean, "Boolean")(0);
    // --> passing 0 to Boolean
    // --> called with 0 - got false
    ```

  3. Provide new types of control flow
  ```javascript
  function ifElse(test, ifTrue, ifFalse) {
    if (!test) {
      ifTrue();
    } else {
      ifFalse();
    }
  };

  function repeat(times , body) {
    for (var i = 0; i < times; i++) {
      body(i);
    }
  }

  repeat(10, function(n) {
    ifElse(n % 2, function() {
      console.log(n, "is even");
    }, function() {
      console.log(n, "is odd");
    });
  });
  ```

###Dealing an with uncertain number of arguments
