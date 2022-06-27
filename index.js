var startGame = 0

function countdownTimer(countdown) {
  var x = setInterval(function() {
    $("#count").text(countdown)
    countdown--;
    if (countdown == -1) {
      $("#count").text("Game Over")
      clearInterval(x);
    }
  },1000);
}



$(document).keydown(function(){
  if (startGame == 0) {
    startGame = 1;
    countdownTimer(15);
  }
})
