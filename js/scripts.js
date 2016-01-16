$(document).ready(function () {
  $("form#vacation").submit(function (event) {
    $(".result").hide();

    var locationAnswer = parseInt($("select#location").val());
    var importantAnswer = parseInt($("select#important").val());
    var foodAnswer = parseInt($("select#food").val());
    var activityAnswer = parseInt($("select#activity").val());
    var stayAnswer = parseInt($("select#stay").val());

    var total = locationAnswer + importantAnswer + foodAnswer + activityAnswer + stayAnswer;

    console.log(total);
      if (total <= 11) {
        $("#paris").show();
      } else if (total > 11 && total <= 14) {
        $("#tokyo").show();
      } else if (total > 13 && total <= 18) {             // this logic isn't working :/
        $("#bahamas").show();                             // the answers have overlaps
      } else if (total > 19 && total <= 24) {
        $("#space").show();
      } else {
        $("#tryAgain").show();
      };

    event.preventDefault();

    });
});
