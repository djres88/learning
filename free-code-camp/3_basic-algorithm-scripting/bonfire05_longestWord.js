function findLongestWord(str) {
  var array = str.split(" ");
  var longestWordLength = 0;
    for(var i = 0; i < array.length; i++) {
       if(array[i].length > longestWordLength) {
         longestWordLength = array[i].length;
       }
    }
  return longestWordLength;
}

//tests
findLongestWord("The quick brown fox jumped over the lazy dog") === 6;
findLongestWord("What if we try a super-long word such as otorhinolaryngology") === 19.
