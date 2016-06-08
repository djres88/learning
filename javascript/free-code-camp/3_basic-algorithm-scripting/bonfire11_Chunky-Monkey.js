function chunk(arr, size) {
  var twoDimArray = [];
  var arrayCount = 0;
  for (var i = 0; i < arr.length/size; i++) {
    var tempArray = [];
    for (var j = 0; j < size; j ++) {
      if(arr[j + arrayCount] !== undefined) {
        tempArray.push(arr[j + arrayCount]);
      }
    }
    twoDimArray.push(tempArray);
    arrayCount += size;
  }
  return twoDimArray;
}

chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 4);
