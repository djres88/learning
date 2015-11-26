function repeat(str, num) {
  if (num < 0) {
    return "";
  } else {
    var string = "";
    for (var i = 0; i < num; i++) {
      string += str;
    }
    return string;
  }
}

repeat("abc", 4);
