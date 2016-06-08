//The following function is run only AFTER the players are sorted by contest and position.

//Within a single position (e.g. QB) in a particular fantasy game (e.g. SundayOnly), if Player A has a higher projected point total AND a lower cost than Player B, then Player B can be eliminated from consideration. Why? Because Player A will ALWAYS be the best alternative. By switching from Player B to Player A, you would be gaining free (or better) points.

var eliminator = function(array) {
  var newArray = [];
  var test = "";
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if ((array[i].cost >= array[j].cost) && (array[i].projectedPts < array[j].projectedPts)) {
        test = "kickout";
      };
    };
    if(test != "kickout") {
      newArray.push(array[i]);
    };
    test = "";
  };
  return newArray;
};
