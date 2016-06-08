/*
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
*/

function mutation(arr) {
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  var isMutant = true;
  for(var i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2.charAt(i)) === -1) {
      isMutant = false;
      break;
    }
  }
  return isMutant;
}

mutation(["hello", "hey"]);
