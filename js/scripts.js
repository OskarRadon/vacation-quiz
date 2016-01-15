$(document).ready(function () {                           // on document load
  $("form#vacation").submit(function (event) {            // on submit button event
    var locationAnswer = parseInt($("select#location").val());
    var importantAnswer = parseInt($("select#important").val());
    var foodAnswer = parseInt($("select#food").val());
    var activityAnswer = parseInt($("select#activity").val());
    var stayAnswer = parseInt($("select#stay").val());

    var total = locationAnswer + importantAnswer + foodAnswer + activityAnswer + stayAnswer;

    console.log(total);
      if (total <= 23) {
        $("#paris").show();
      } else if (total > 23 && total < 12 || total == 29) {
        $("#tokyo").show();
      } else if (total > 29) {
        $("#bahamas").show();
      } else {
        $("#tryAgain").show();
      };

    event.preventDefault();

    });
});
