const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]

var startGame = 0;
var letterBoxHTML = "<div class='letterBox col-15'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

var guess = 0;

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

//function to create multiple instances of the same html
function insertHTMLBlock (container, htmlText, loops) {
  for (i=0; i<loops; i++) {
    $(container).append(htmlText);
  }
}

insertHTMLBlock('.wordContainer', letterBoxHTML, 5);
var nextLetterBox = $('.letterBox:empty').first();

//keyboard
insertHTMLBlock('.keyboard',keyboardRowHTML,3); //create 3 rows

$('.keyboardRow').each(function(ind){  //for each row
  $(this).addClass("row-" + (ind+1));  //add class row-x
  keyboardLetters[ind].forEach(function(value, index, array) {  //for each letter in the array of letter arrays
    $('.row-'+(ind+1)).append(buttonKeyHTML); //append button HTML
    if ((value == '⌫') || (value == '↲') ){ //extra wide button for del and enter
      $('.keyBtn').last().addClass('col-15').attr("data-key", value).text(value);
    }
    else {
      $('.keyBtn').last().addClass('col-1').attr("data-key", value).text(value); //set data-key and inner text to the letter from the array
    }
  });
});

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
    countdownTimer(15);
  }
})
