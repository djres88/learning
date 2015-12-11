/*
Bonfire: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the original arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
Array.slice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Array.filter() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Array.indexOf() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.concat() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/


function diff(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i ++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
