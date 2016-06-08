Slide deck link: http://slides.com/mattlane-2/deck/live
Link to codepen: http://codepen.io/mmmaaatttttt/pen/OMzNqY?editors=001

#Roadmap - Native JS Iterators
1. `forEach`
2. `map`
3. `filter`
4. `reduce`

Those are the four main ones. Understand these and you can look up the rest.

##forEach


##Map
* Key dif from forEach:

```javascript
[1,2,3,4].forEach(function(el) {
  return el * el;
});
// undefined

[1,2,3,4].map(function(el) {
  return el * el;
});
// [1, 4, 9, 16];
```
  - Also:
  ```javascript
  var arr1 = [1, 2, 3, 4];
  var arr2 = arr1.map(function(el) { return el * el; });
  var arr3 = arr1.forEach(function(el) { return el * el; });
  arr2;
  // [1, 4, 9, 16]
  arr3;
  // undefined
  ```

* Note that `.map` really does give you a new array; it doesn't do anything to the old array.
```javascript
var arr1 = [5, 10, 15, 20];
//undefined
var arr2 = arr1.map(function(el) { return el * el; });
//undefined
arr2;
//[25, 100, 225, 400]
arr1;
// [5, 10, 15, 20]
```
  - Also, a new shorthand in ES2015:
  ```javascript
  var arr2 = arr1.map(el => el * el);
  //WORKS in ES2015! If you need idx, left-hand side needs parentheses.
  var arr3 = arr1.map((el, idx) => el * idx);
  ```

##`filter`
* Filter returns a *smaller* array with only the elements that meet the criteria
```javascript
function isEven(n) {
  return n % 2 === 0;
}
[1,2,3,4,5,6,7,8,9,10].filter(isEven);
// [2,4,6,8,10]
```
* The callback in `filter` should always return a Boolean (t/f)
* The old array is not destroyed; if we had saved the array in a variable, we would still have access to it.


##`reduce`
* The granddaddy
* Can return a number, string, object based on your needs

Example
```javascript
var arr = [2,4,6,8];

var sumArray = arr.reduce(function(prev, cur) {
  return prev + cur;
}, 0);

var productArray = arr.reduce(function(prev, cur) {
  prev = 1, cur = 2;
  return prev * cur;
}, 1); // initial condition
```
- `prev` refers to the number before `cur`. The second argument (1) indicates the starting number.
- If you don't pass an initial value, it will automatically start at `prev`

##How is this functional?
* https://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming
* **Non-immutable:** Not changing the data you're operating on (?). Just manipulating the old array.
  - in functional programming, want to avoid changing old data
* **Non-stateless:** Related to functions w/o side effects
  - Pure functions have same output for same input
  - For example, `doSomeMath(3)` should always produce the same output
  - In functional programming, you want to avoid non-pure functions

##TAKEAWAYS
* How do I know when to use which iterator? There are a few litmus tests:
  - Map (**modified array of same length**): Want to return a new/modified array of the *same length* as my old array
  - Filter (**sub-array**): Want to return a sub-array
  - Reduce (**different data type**): taking elements from an array and returning another data type
* Triple vs double =
```javascript
"0" == 0
//true
"0" === 0
//false
```

##TO-DO
* Study `reduce`
* Study method chaining
* Practice the libraries underscore.js and lodash.js
