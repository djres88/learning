#Array Methods
* `array[i]` to access the index number of an array.
```javascript
var array = [132, 312, 4004, 137];
var two = array[1];
console.log(two); // 312
```

* `.pop()` - Used to remove elements from end of an array.
```javascript
var array = ["a", "b", "c"];
var removedLast = array.pop();
console.log(removedLast); // ["a", "b"]
```

* `.push()` - Push elements onto the end of an array.
```javascript
var array = ["Concorde", "A320"];
var newArray = array.push("Spruce Moose");
console.log(newArray); // ["Concorde", "A320", "Spruce Moose"]
```

* `.shift()` - Removes the first value of the array.
```javascript
var breakfast = ["huevos rancheros", "omelette", "eggs benedict"];
var myEggs = breakfast.shift();
console.log(myEggs); // ["huevos rancheros"]
console.log(breakfast); // ["omelette", "eggs benedict"]
```

* `.unshift()` - Adds a value to the beginning of the array.
```javascript
var numbers = [1, 2, 3, 4];
var withZero = numbers.unshift(0);
console.log(withZero); // [0, 1, 2, 3, 4]
```

* `.map()` - The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it.
  ```javascript
  var array = [1, 2, 3]
  var plusTwo = array.map(function(val) {
    return val + 2;
  });
  console.log(plusTwo); // [3, 4, 5]
  ```

* `.reduce()` - The array method reduce is used to iterate through an array and condense it into one value. To use reduce, you pass in a callback whose arguments are an accumulator (below, previousVal) and the current value (currentVal). `reduce` has an optional second argument that can be used to set the initial value of the accumulator. If no initial value is specified, the first accumulator will be the first array element and currentVal will start with the second array element.
```javascript
var array = [4,5,6,7,8]
var singleVal = array.reduce(function(previous, current) {
  return previous + current;
}, 0);
console.log(singleVal); // 30
```

* `.filter()` - The filter method is used to iterate through an array and filter out elements where a given condition is **not** true. filter is passed a callback function which takes the current value (here, `key`) as an argument.
```javascript
var unfiltered = [1,2,3,4,5];
var filtered = unfiltered.filter(function(key) {
  return key < 4;
});
console.log(filtered); // [1, 2, 3]
```

* `.sort()` - You can use the method sort to easily sort the values in an array alphabetically or numerically. Unlike the other methods, `sort` *changes the array in place* and returns the result. can be passed a compare function as a callback. If no compare function is passed in it will convert the values to strings and sort alphabetically.
```javascript
var array = [1, 12, 21, 2];
array.sort(function(a,b) {
  return b-a;
});
console.log(array); // [21, 12, 2, 1]
```

* `.reverse()` - You can use the reverse method to reverse the elements of an array. `reverse` is another array method that alters the array in place, but it also returns the reversed array.
```javascript
var array = [1,2,3,4,5];
var newArray = array.reverse();
console.log(newArray); // [5,4,3,2,1]
```

* `.concat()` - Merge the contents of two arrays into one.
```javascript
var x = [1, "bill", 7];
var y = ["timepiece", 90, "biff"];
var xy = x.concat(y);
console.log(xy); // [1, "bill", 7, "timepiece", 90, "biff"]
