// Arrow Function Basics
[10,20,30].map((num, idx) => {
  console.log("Doubling the number " + num + " at index " + idx);
  return (num * 2) + idx;
});
// "Doubling the number 10 at index 0...)";
// "Doubling the number 20 at index 1...)";
// "Doubling the number 30 at index 2...)";
// [20, 40, 60]

// Old way:
[10,20,30].map(function(num, idx) {
  return (num * 2) + idx;
});

// TL;DR: The arrow function is just a callback. You can use shortcuts if the callback takes no arguments:
[10,20,30].map(() => console.log("What"));
// "What"
// "What"
// "What"


// NOTE: SHORTCUTS
// If the callback contains just a single line, you can also omit the curly braces
[10,20,30].map((num, idx) => num * idx);
// [0, 20, 60]



// NOTE: CLOSURES
// Here's what closures look like using an arrow function:
var arr = [10, 20, 30];
var n = arr.map((num) => {
  return function() {
    return num * num;
  }
});

n[0]();
// 100
n[1]();
// 400



// NOTE: RETURNING OBJECTS
// To return an object literal, you need to wrap it in parens. This prevents the object from being misinterpreted as a statement block.
[10, 20, 30].map((num, idx) => ({ num: num, idx: idx} ));
// Of course you could also avoid the problem w/ a return statement.
[10, 20, 30].map((num, idx) => {
  return { num: num, idx: idx}
});

function setTimeoutPromise(duration) {
    return function(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            }, duration)
        });
    };
};


function hiThenHiAgain() {
  setTimeoutPromise(3)
  .then(function() {
    console.log("Hello");
    return setTimeoutPromise(2);
  })
  .then(function() {
    console.log("hi");
  });
}
