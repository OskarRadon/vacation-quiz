$(document).ready(function () {                           // on document load
  $("form#vacation").submit(function (event) {            // on submit button event
    var locationAnswer = $("select#location").val();
    var importantAnswer = $("select#important").val();
    var foodAnswer = $("select#food").val();
    var activityAnswer = $("select#activity").val();
    var stayAnswer = $("select#stay").val();

    // make an array of all the select ids
    var answers = [locationAnswer, importantAnswer, foodAnswer, activityAnswer, stayAnswer];

    console.log(answers);
    answers.forEach(function(answer) {      // for each answer
      if (3 <= "paris") {                                 // if 3 or more answers = paris
        $("#paris").show();                   // show paris div
      } else if (3 <= "tokyo") {                          // else if 3 or more answers = tokyo
        $("#tokyo").show();                   // show tokyo div
      } else if (3 <= "bahamas") {                          // else if 3 or more answers = bahamas
        $("#bahamas").show();                 // show bahamas div
      } else {                                // else
        $("#tryAgain").show();                // show tryAgain div
      }                
    });

    event.preventDefault();   // prevent submit event
  });
});


// this for loop could be helpful???
// for (index = 0; index < answers.length; ++index) {
//   console.log(answers[index]);
//   if (index )
// }
