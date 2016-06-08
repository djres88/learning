/*
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.filter() -- https://msdn.microsoft.com/en-us/library/ff679973(v=vs.94).aspx
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var noFalsy = arr.filter(function (element) {
    return (Boolean(element) === true);
  });
  return noFalsy;
}

bouncer([7, "ate", "", false, 9]);
