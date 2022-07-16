const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]
const numberOfGuesses = 6;
const timerLength = 60;
const noOfWords = 10;
const lengthOfWordsArray = wordArray.length;
const seedValue = Math.floor((new Date() - new Date(2022,06,11))/86400000);
const noOfHints = [4,3,3,3,2,2,2,1,1,0];
const scoreEmojis = ["😢 Better luck next time.</p>","🙂 Well Done.</p>","😁 You're AWESOME!</p>"];

const modalStart = document.getElementById("startModal");
const modalGameOver = document.getElementById("gameOverModal");
const modalPause = document.getElementById("pauseModal");
const modalBtn = $("#modalCloseBtn");
const modalResumeBtn = $("#modalResumeBtn");

var countdown = timerLength-1;
var secretWordList = [];
var secretWord;
var hints = [];
var attempt = 0;
var currentRow;
var nextLetterBox;
var lastLetterBox =[];
var currentGuess;
var isWord = false;
var rowComplete;
var startTime, endTime;
var currentScore, highScore;
var isPaused = false;

var xCountdown;
var mT = new MersenneTwister(seedValue);
const randoArray = Array.from({length: (noOfWords*2)}, i => mT.random());

var wordsCorrect = 0;

var startGame = 0;
var letterBoxRowHTML = '<div class="letterBoxRow"></div>';
var letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"



// Make Secret words arrays
function createSecretWordsArray(){

  for (i=0; i<noOfWords; i++){
    let newWord = wordArray[Math.floor(randoArray[i]*lengthOfWordsArray)];
    while (secretWordList.includes(newWord)) {
      newWord = wordArray[Math.floor(randoArray[i]*lengthOfWordsArray)];
    }

    secretWordList.push(newWord);
  }
}


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
  startTime = performance.now();
  xCountdown = setInterval(function() {
    if (!isPaused){
      $("#count").text(countdown)
      countdown--;
      if (countdown == -1) {
        gameOver();

      }
    }

  },1000);
}


//Load hints onto the current row
function loadGameBoardHintRow() {
  currentRow = $('.letterBoxRow').eq(0); // Top row
  for (i=0; i<secretWord.length; i++){
    if (hints.includes(i)) {
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

function createHints () {
  hints=[];
  for (i=0; i<noOfHints[wordsCorrect]; i++) {
    let hintToAdd = Math.floor(mT.random()*5);
    while (hints.includes(hintToAdd)) {
      hintToAdd = Math.floor(mT.random()*5);
    }
    hints.push(hintToAdd);
  }
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
  isWord = (allowedWordList.has(currentGuess) || wordList.has(currentGuess));
  if (!isWord) {
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
  isWord = false;
  rowComplete = 0;
  countdown = timerLength-1;
  secretWord = secretWordList[wordsCorrect];
  createHints();
  newGameBoard();
  $(".keyBtn").removeClass("correct wrongPosition wrong");
  loadGameBoardHintRow();
  attempt=1;
  loadGameBoardRow();
}

function getScore() {
  currentScore = timerLength;
  currentScore += (wordsCorrect*100);
  currentScore -= endTime;
  return currentScore;
}

function checkHighScore (){
  if (!localStorage.highScore) {
    highScore = currentScore
  }else {
    highScore = localStorage.highScore
  }
  if (currentScore > highScore) {highScore = currentScore}
  localStorage.highScore = highScore;

}

function gameOver(){
  clearInterval(xCountdown);
  endTime = Math.floor((performance.now()-startTime)/1000);
  $('.keyBtn').off("click");
  $(document).off("keydown");
  $("#count").text("00");

  getScore();
  checkHighScore();

  if (wordsCorrect >= noOfWords){
    $("#gameOver").append("<p>CONGRATULATIONS, YOU WIN.</p>");
  } else {
    $("#gameOver").append("<p>Sorry, you lose. The Final word was : " +secretWord +"</p>");
  }
   $("#gameOver").append("<p>Your score today is " +currentScore + ". " );
   if (currentScore < 100) {$("#gameOver").append(scoreEmojis[0]);}
   else if (currentScore >=100 && currentScore < 700) {$("#gameOver").append(scoreEmojis[1]);}
   if (currentScore >=700) {$("#gameOver").append(scoreEmojis[2]);}

   $("#gameOver").append("<p>Your all time High Score is " + highScore + ".</p>" );
  modalGameOver.showModal();

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
        if (rowComplete == 1 && isWord){
          checkWord();
          if (currentGuess == secretWord) {
              wordsCorrect++;
              if (wordsCorrect >= noOfWords){
                gameOver();
              }else {
                newWord();
              }
          } else {
            attempt ++;
            if (attempt == numberOfGuesses) {
              countdown = 0; //trigger game over
            } else {
              loadGameBoardRow();
            }

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

function playedToday (){
  if (!localStorage.playedToday){
    //check if seed values match
  }
  localStorage.playedToday = seedValue;
}

function startCountdown(){
  if (startGame == 0) { //start timer if game hasn't started
    modalStart.close();
    startGame = 1;
    $('#count').text(timerLength);
    $(".btnPlayPause").show();
    countdownTimer();
    newWord();
  }
}

function openingToastr(){
  toastr.info(
  'Click HERE to start...',
  'Ready to Play?',
  {
    showDuration: 500,
    hideDuration: 500,
    positionClass: "toast-top-center",
    onHidden: startCountdown
  }
);
}

function setListeners(){
  //event listner for tap/click on keyboard
  $(document).keydown(function(e){
    if ( ((e.keyCode >= 65) && (e.keyCode <=90)) || (e.keyCode == 13) || (e.keyCode == 8)) {
      KeyboardPressed(e.key);
    }

  });

  $(".btnPlayPause").click(function(){
    isPaused=true;
    modalPause.showModal();
  });

  //modal close and game start button
  modalBtn.click(startCountdown);

  modalResumeBtn.click(function(){
    modalPause.close();
    isPaused=false;
  })

  //event listner for keyboard presss then take action
  $('.keyBtn').click(function(){
    KeyboardPressed($(this).attr("data-key"));
  });

}

function gameStartSetup(){
  createSecretWordsArray();
  newGameBoard();
  createKeyboard();
  setListeners();
  modalStart.showModal();
}


gameStartSetup();
//console.log(secretWordList);
