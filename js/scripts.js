$(document).ready(function () {    // on document load
  $("form#vacation").submit(function (event) {    // on submit button event
    var locationAnswer = $("select#location").val();
    var importantAnswer = $("select#important").val();
    var foodAnswer = $("select#food").val();
    var activityAnswer = $("select#activity").val();
    var stayAnswer = $("select#stay").val();
    var answers = [locationAnswer, importantAnswer, foodAnswer, activityAnswer, stayAnswer]; // make an array of all the select ids

    console.log(answers);
    answers.forEach(function(answer) {
    if (answer === paris) {
                                    // for each answer (5 total)
                                                    // see how many of each equal result1, 2, or 3
    } else {
  })// for each answer (5 total)
        // see how many of each equal result1, 2, or 3

        // if >3 questions === result1 show result1 div
        // if >3 questions === result2 show result2 div
        // if >3 questions === result3 show result3 div
        // else show "Please try again"
        // if any === blank show "Please answer all questions"
    event.preventDefault();   // prevent submit event
  });
});


// this for loop could be helpful???
// for (index = 0; index < answers.length; ++index) {
//   console.log(answers[index]);
//   if (index )
// }
