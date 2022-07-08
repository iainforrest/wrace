const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]
const numberOfGuesses = 6;
const timerLength = 49;

var countdown = timerLength;
var secretWord;
var hints = [1,3];
var lettersToCheck = [];
var attempt = 0;
var currentRow;
var nextLetterBox;
var lastLetterBox =[];
var currentGuess;
var rowComplete;

var wordsCorrect = 0;

var startGame = 0;
var letterBoxRowHTML = '<div class="letterBoxRow"></div>';
var letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

//create game board rows
function newGameBoard(){
  $('.wordContainer').html("");
  for (i=0; i<numberOfGuesses; i++) {- // 5 rows
    $('.wordContainer').append(letterBoxRowHTML);  //add row
    for (j=0; j<5; j++){
      $('.letterBoxRow').last().append(letterBoxHTML);  // ad 5 boxes to each row
    }

  }
  scoreBoard();
}


//create keyboard
function createKeyboard () {
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
}

//countdown Timer
function countdownTimer() {
  var x = setInterval(function() {
    $("#count").text(countdown)
    countdown--;
    if (countdown == -1) {
      gameOver();
      clearInterval(x);
    }
  },1000);
}


//Load hints onto the current row
function loadGameBoardHintRow() {
  currentRow = $('.letterBoxRow').eq(0); // Top row
  for (i=0; i<secretWord.length; i++){
    if (hints.indexOf(i) != -1) {
      currentRow.children().eq(i).addClass("correct").text(secretWord[i]);
    } else {
      currentRow.children().eq(i).addClass("wrong").text("*");
    }
  }
  nextLetterBox = $('.letterBox:empty').first();
}



//Load hints onto the current row
function loadGameBoardRow() {
  rowComplete = 0; // reset so that enter doesn't work
  lastLetterBox = []; // clear delete list
  currentRow = $('.letterBoxRow').eq(attempt); // use "attempt" to set up the current row
  nextLetterBox = $('.letterBox:empty').first();
}

function scoreBoard (){
  let score10 = Math.floor(wordsCorrect/10);
  let score1 = wordsCorrect%10;
  $('.score-10').text(score10);
  $('.score-1').text(score1);
}

//delete button
function deleteButtonPressed(){
  let delBox = lastLetterBox.pop(); // get last item from letterbox list
  if (delBox != null){ // if it's not empty ie. no letters currently entered
    delBox.text(""); //delete it`
    nextLetterBox = $('.letterBox:empty').first(); // reset next letterbox
    if (rowComplete == 1){
      currentRow.children().removeClass("wordDoesntExist");
      rowComplete = 0;
    }
  }
}

//check if letter exists in more than one place
function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
      if (arr[i] === val)
          indexes.push(i);
  return indexes;
  }


function checkRow(){
  rowComplete = 1;
  currentGuess = "";
  for (i=0; i<5; i++){
    currentGuess += currentRow.children().eq(i).html().toUpperCase();
  }
  if (!allowedWordList.has(currentGuess) && !wordList.has(currentGuess)) {
    currentRow.children().addClass("wordDoesntExist");
  }
}

function checkWord(){
  Array.from(currentGuess).forEach(function(elt, i, guess){
    let multiLetter = getAllIndexes(secretWord, elt);
    multiLetter.forEach(function(MLElt, MLi) {
      if (MLElt == i) {
        //currentRow.children().eq(i).removeClass("wrongPosition").addClass("correct");
        currentRow.children().eq(i).addClass("correct");
        $("button[data-key='"+elt.toLowerCase()+"']").addClass("correct")
        return;
      }
      else if (secretWord[MLElt] == currentGuess[MLElt]) {
        return;
      }
      else if(multiLetter.length >= getAllIndexes(currentGuess, elt).length) {
        currentRow.children().eq(i).addClass("wrongPosition");
        $("button[data-key='"+elt.toLowerCase()+"']").addClass("wrongPosition")
        return;
      }

    });
    currentRow.children().eq(i).addClass("wrong");
    $("button[data-key='"+elt.toLowerCase()+"']").addClass("wrong")
  });
}

function newWord () {
  rowComplete = 0;
  countdown = timerLength;
  secretWord = wordArray[Math.floor(Math.random()*2315)];
  newGameBoard();
  $(".keyBtn").removeClass("correct").removeClass("wrongPosition").removeClass("wrong");
  loadGameBoardHintRow();
  attempt=1;
  loadGameBoardRow();
}

function gameOver(){
  $("#count").text("Game Over");
  //$(document).removeEventList
}


function KeyboardPressed(keyPressed){
  if (startGame == 1){ // do nothing if the countdown hasn't startedd
      //get the key
    //case statement del, enter, other letter
    switch (keyPressed) {
      case '⌫':
      case 'Backspace':
        deleteButtonPressed();
        break;
      case '↲':
      case 'Enter':
        if (rowComplete == 1){
          checkWord();
          if (currentGuess == secretWord) {
              wordsCorrect++;
              newWord();
          } else {
            attempt ++;
            loadGameBoardRow();
          }
        }
        break;
      default:
        if (nextLetterBox.parent()[0] == currentRow[0]){ //only enter text if the next empty box is on the current row
          nextLetterBox.text(keyPressed);
          lastLetterBox.push(nextLetterBox); // add letterbox reference to last letter box for deleteing if needed
          nextLetterBox = $('.letterBox:empty').first();
          if (nextLetterBox.parent()[0] != currentRow[0]){
            checkRow();
          }
        }

    }
  }
}

function setListeners(){
  //event listner for tap/click on keyboard
  $(document).keydown(function(e){
    console.log(e.key + " : " +e.keyCode);
    if ( ((e.keyCode >= 65) && (e.keyCode <=90)) || (e.keyCode == 13) || (e.keyCode == 8)) {
      KeyboardPressed(e.key);
    }

  });

  //event listner for keyboard presss then take action
  $('.keyBtn').click(function(){
    KeyboardPressed($(this).attr("data-key"));
  });

  //start game
  $('#count').click(function(){
    if (startGame == 0) { //start timer if game hasn't started
      startGame = 1;
      $('#count').text(timerLength+1).removeClass("startButton");
      countdownTimer();
      newWord();
    }
  })
}

function gameStartSetup(){
  newGameBoard();
  createKeyboard();
  setListeners();
}


gameStartSetup();
