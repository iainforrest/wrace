
const keyboardLetters1 = ['q','w','e','r','t','y','u','i','o','p'];
const keyboardLetters2 = ['a','s','d','f','g','h','j','k','l'];
const keyboardLetters3 = ['←','z','x','c','v','b','n','m','enter'];
const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]

var startGame = 0;
var letterBoxHTML = "<div class='letterBox col-15'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

//countdown Timer
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

//function to create multiple instances of the same html
function insertHTMLBlock (container, htmlText, loops) {
  for (i=0; i<loops; i++) {
    $(container).append(htmlText);
  }
}

insertHTMLBlock('.wordContainer', letterBoxHTML, 5);

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







$(document).keydown(function(e){
  if (startGame == 0) { //start timer if game hasn't started
    startGame = 1;
    countdownTimer(15);
  }
  //else if (key = letter) { //do this with key if game is running
    //find what key
    //add letter to next empty box
//  }
  //else if key = enter
    //submit
//
  //else if key = backspace
    //remove last input
})
