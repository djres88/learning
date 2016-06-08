/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()
*/
function destroyer(arr) {
  var ultimateDestruction = arguments[0];
  var toDestroy = [];

  for (var i = 1; i < arguments.length; i ++) {
    toDestroy.push(arguments[i]);
  }

  var returnVal = ultimateDestruction.filter(function(value) {
    return (toDestroy.indexOf(value) === -1);
  });

  return returnVal;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// BETTER SOLUTION (STUDY THIS!!)
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  //splice removes the first element from the args array:
  args.splice(0,1);
  //could use arr instead of arguments[0] (by default, arr refers to the first argument():
  return arguments[0].filter(function(element) {
    return args.indexOf(element) === -1;
  });
   //This filter function waits until the callback finds all the conditions that evaluate to true. When the callback has the true elements (just the number 1, in this example), filter returns a "filtered" arguments[0] array — one containing only those elements that satisfy our condition.
}
