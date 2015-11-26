var totalCorrect = 0;
var totalResponses = 0;
var userLevel = 0;

function nextQuestion(currentQuestion) {
  var userAnswer = String(prompt(currentQuestion,""));
  var truAnswer = "Babe Ruth";
    if (userAnswer == truAnswer) {
      totalCorrect += 1;
      totalResponses += 1;
      var percentage = (totalCorrect/totalResponses);
      if (percentage > 0.9)
        userLevel += 3;
      else if (percentage > 0.7 && percentage <= 0.9)
        userLevel += 2;
      else
        userLevel += 1;
      }
    if (userAnswer != truAnswer) {
      totalResponses += 1;
      var percentage = (totalCorrect/totalResponses);
      if (percentage > 0.9)
        userLevel -= 1;
      else if (percentage > 0.7 && percentage <= 0.9)
        userLevel -= 2;
      else
        userLevel -= 3;
    }
    console.log(percentage);
    console.log(userLevel);
    return userLevel;
  }
