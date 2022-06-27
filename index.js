var countdown = 15;
var startGame = 0





$(document).keydown(function(){
  if (startGame == 0) {
    startGame = 1;
    var x = setInterval(function() {
      $("#count").text(countdown)
      countdown--;
      if (countdown == -1) {
        $("#count").text("Game Over")
        clearInterval(x);
      }
    },1000);

  }
})
