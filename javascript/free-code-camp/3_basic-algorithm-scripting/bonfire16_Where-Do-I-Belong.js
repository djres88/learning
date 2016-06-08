/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.sort() -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*BIGGEST LESSON: To sort numbers, you need to use the comparison operator (see below).
*/

function where(arr, num) {
  //use the comparison operator as a callback to sort():
  var sorted = arr.sort(function(a,b) {
    return a-b;
  });
  var position = 0;

  for (var i = 0; i < sorted.length; i ++) {
    if (num <= sorted[i]) {
      position = i;
      break;
    } else {
      position = sorted.length;
    }
  }
  return position;
}

where([40, 60], 50);
where([10, 20, 30, 40, 50], 35) //should return 3.
where([10, 20, 30, 40, 50], 30) //should return 2.
where([40, 60,], 50) //should return 1.
where([3, 10, 5], 3) //should return 0.
where([5, 3, 20, 3], 5) //should return 2.
where([2, 20, 10], 19) //should return 2.
where([2, 5, 10], 15) //should return 3.
