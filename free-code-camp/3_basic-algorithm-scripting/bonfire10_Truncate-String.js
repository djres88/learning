function truncate(str, num) {
  var string = str.slice(0, num);
  if (string.length <= 3) {
    return string + "...";
  } else if (num >= str.length) {
    return string;
  } else {
    return string.slice(0, num-3) + "...";
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
