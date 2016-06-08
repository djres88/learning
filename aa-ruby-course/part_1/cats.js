var cats = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function swap_hat(hat) {
  if (hat === 1) {
    hat = 0
  } else {
    hat = 1
  }
  return hat
}

for (var cycle = 1; cycle < cats.length; cycle++) {
  for (var cat_index = 1; cat_index < cats.length; cat_index++) {
    if (cat_index % cycle === 0) {
      cats[cat_index] = swap_hat(cats[cat_index]);
    }
  }
}

function getIfOne(array) {
  var result = [];
  arr.filter(function(element, index) {
    if (element === 1) {
      result.push(index)
    }
  })
  return result
}

var answer = getIfOne(cats);
