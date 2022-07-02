const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]
const numberOfGuesses = 5;
const timerLength = 14;
const secretWord = "mined";

var correctLetters = [4,2,1];
var lettersLeft = [];
var attempt = 0;
var currentRow;
var nextLetterBox;

var startGame = 0;
var letterBoxRowHTML = '<div class="letterBoxRow"></div>';
var letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

for (i=0; i<5; i++){
  if (correctLetters.indexOf(i) == -1) {
      lettersLeft.push(i);
  }
}


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


//Load hints onto the current row
function loadGameBoardRow() {
  currentRow = $('.letterBoxRow').eq(attempt);
  correctLetters.forEach(function (position){
    currentRow.children().eq(position).addClass("correct").text(secretWord[position]);
  });
  nextLetterBox = $('.letterBox:empty').first();
}

//check if letter exists in more than one place
function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
      if (arr[i] === val)
          indexes.push(i);
  return indexes;
  }

//check if word is correct on enter
function checkWord() {
  let lettersToCheck = lettersLeft;
  lettersToCheck.forEach(function(value,index,array) {
    let letterToCheck = currentRow.children().eq(value).html();
    let instances = getAllIndexes(secretWord, letterToCheck);//check for multiple letters
    if (instances.length == 0) {
      return;
    } else if (instances.length == 1){ //letter is in word one time
        if (instances[0] == value){
          //correct position
          console.log("correct position");
          lettersLeft.splice(index,1);
          correctLetters.push(value);
        }else {
        // correct letter wrong position
        console.log("correct letter, wrong position");
        }
    } else {
      //multiple instances
    }
  });

}

//start game
$('#count').click(function(){
  if (startGame == 0) { //start timer if game hasn't started
    startGame = 1;
    $('#count').text(timerLength+1).removeClass("startButton");
    countdownTimer(timerLength);
    loadGameBoardRow();
  }
})


//event listner for keyboard presss then take action
$('.keyBtn').click(function(){
  if (startGame == 1){ // do nothing if the countdown hasn't startedd
    let keyPressed = $(this).attr("data-key") //get the key
    //case statement del, enter, other letter
    switch (keyPressed) {
      case '⌫':
        alert('backspace pressed');
        break;
      case '↲':
          alert('enter pressed');
          checkWord();
          if (lettersLeft.length > 0) {
            attempt ++;
            loadGameBoardRow();
          }else {
            alert("you win")
          }

        break;
      default:
        if (nextLetterBox.parent()[0] == currentRow[0]){ //only enter text if the next empty box is on the current row
          nextLetterBox.text(keyPressed);
          nextLetterBox = $('.letterBox:empty').first();
        }

    }
  }

});
