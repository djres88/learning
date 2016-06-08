var MathFunctions = {
  roundProjecteds(array) {
    for (var i = 0; i < array.length; i++) {
      array[i].projectedPts = round(array[i].projectedPts, 2)
    }
  }
}
