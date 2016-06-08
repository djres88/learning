/*
Bonfire: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.reduce()
*/


function unite(arr1, arr2, arr3) {
  return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
unite([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
unite([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
