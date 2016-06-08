function end(str, target) {
  if(str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "n");
