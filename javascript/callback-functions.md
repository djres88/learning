#Learning Callback Functions

##Resource A: CW Buecheler
http://cwbuecheler.com/web/tutorials/2013/javascript-callbacks/

###Example 1: `jQuery Document Ready`
You're already familiar with one callback function:
```javascript
$(document).ready(function() {
  $("#textGoesHere").text("Hello World!");  
})
```
Let's take a closer look at what's happening here. Specifically, what is `ready`?

Ready is a *method* built in to the jQuery code. This method (function), which is being applied to the entire *document*, takes one argument - in this case (and in all cases, actually), its argument is another function. What does that mean?

Recall that the functions you've already seen take variables as their arguments. You're familiar with functions such as
```javascript
function sum(x, y) {
  console.log(x + y);
}
```
But remember that variables can also be assigned to *functions*. This means that a function could take another function as an argument. **That's essentially what callbacks are: functions that are passed as arguments to other functions.**

This isn't explaining anything.... trying another resource.

##Resource B: Recurial Post
http://recurial.com/programming/understanding-callback-functions-in-javascript/

In JavaScript, functions are actually objects. To illustrate this, see how you can create a new function using a Function constructor:
```javascript
var func_multiply = new Function("arg1", "arg2", "return arg1 * arg2;");
4
func_multiply(5,10); // => 50
```
This works in the same way as would a Person constructor:
```JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var becky = new Person("becky", 30);
```
The only difference is, the Function constructor is already built into JavaScript. We can define all kinds of functions:
```JavaScript
var func_divide = new Function("x", "y", "return x/y");
func_divide(540, 54); // => 10
```

One benefit to the function-as-object concept is that you can pass code to another function in the same way you would pass another variable or object (such as strings or numbers). Here we ditch the constructor syntax:
```JavaScript
function randomness(arg1, arg2, callback) {
  
}
