function largestOfFour(arr) {
  largestArray =[];
  for (var i = 0; i < arr.length; i++) {
    var currentArray = arr[i];
    var maxValue = 0;
    for (var j = 0; j < currentArray.length; j++) {
      if (currentArray[j] > maxValue) {
        maxValue = currentArray[j];
      }
    }
    largestArray.push(maxValue);
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
