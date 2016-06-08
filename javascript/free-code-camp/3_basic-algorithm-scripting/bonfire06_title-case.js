//Keep trying to do these with callbacks...

function titleCase(str) {
  return str.replace(/\S+/g, function(keyString) {
    return keyString.charAt(0).toUpperCase() + keyString.substr(1).toLowerCase();
  });
}

titleCase("I'm a little tea pot");
