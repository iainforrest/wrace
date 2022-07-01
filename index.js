const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]
const numberOfGuesses = 5;
const timerLength = 14;

var startGame = 0;
var letterBoxRowHTML = '<div class="letterBoxRow"></div>';
var letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

var nextLetter = [0,1,2,3,4];

function gameOver(){
  $("#count").text("Game Over");
}

//countdown Timer
function countdownTimer(countdown) {
  var x = setInterval(function() {
    $("#count").text(countdown)
    countdown--;
    if (countdown == -1) {
      gameOver();
      clearInterval(x);
    }
  },1000);
}

//create game board rows
for (i=0; i<numberOfGuesses; i++) {- // 5 rows
  $('.wordContainer').append(letterBoxRowHTML);  //add row
  for (j=0; j<5; j++){
    $('.letterBoxRow').last().append(letterBoxHTML);  // ad 5 boxes to each row
  }

}

var nextLetterBox = $('.letterBox:empty').first(); //gets next box with nothing in it

//keyboard
for (i=0; i<3; i++){ // 3 rows
  $('.keyboard').append(keyboardRowHTML); //append row
  keyboardLetters[i].forEach(function(value, index, array) {  //for each letter in the array of letter arrays
    $('.keyboardRow').last().append(buttonKeyHTML); //append button HTML
    if ((value == '⌫') || (value == '↲') ){ //extra wide button for del and enter
      $('.keyBtn').last().addClass('col-15').attr("data-key", value).text(value);
    }else {
      $('.keyBtn').last().addClass('col-1').attr("data-key", value).text(value); //set data-key and inner text to the letter from the array
    }
  });
}



$('.keyBtn').click(function(){
  if (startGame == 1){
    let keyPressed = $(this).attr("data-key")
    switch (keyPressed) {
      case '⌫':
        alert('backspace pressed');
        break;
      case '↲':
          alert('enter pressed');
        break;
      default:
        nextLetterBox.text(keyPressed);
        nextLetterBox = $('.letterBox:empty').first();
    }
  }

});





$('#count').click(function(){
  if (startGame == 0) { //start timer if game hasn't started
    startGame = 1;
    $('#count').text(timerLength+1).removeClass("startButton");
    countdownTimer(timerLength);
  }
})
