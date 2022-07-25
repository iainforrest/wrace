const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]
const numberOfGuesses = 6;
const timerLength = 60;
const noOfWords = 10;
const lengthOfWordsArray = wordArray.length;
const seedValue = Math.floor((new Date() - new Date(2022,06,10))/86400000);
const noOfHints = [4,3,3,3,2,2,2,1,1,0];
const scoreEmojis = ["😢 Better luck next time.</p>","🙂 Well Done.</p>","😁 You're AWESOME!</p>"];

const modalStart = document.getElementById("startModal");
const modalGameOver = document.getElementById("gameOverModal");
const modalPause = document.getElementById("pauseModal");
const modalBtn = $("#modalCloseBtn");
const modalResumeBtn = $("#modalResumeBtn");


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
var playing=0, paused=1, gameFinished=3;

var xCountdown;
var mT = new MersenneTwister(seedValue);

var startGame = 0;
var letterBoxRowHTML = '<div class="letterBoxRow"></div>';
var letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

var currentState = {};


var testingSeed = seedValue;

//if there is a currentState saved in localStorage, load it, otherwise create new
function loadCurrentState(){
  if (localStorage.currentState && localStorage.pausedSeed == seedValue){ //if localStorage exists and if it is from today, load it
    currentState = JSON.parse(localStorage.getItem("currentState"));
  }else { //either is doesn't exist or it is from a previous day
    currentState = {
      gameState: playing,
      todaySeed: seedValue,
      guessesOnCurrentWord:['TAROT','IRATE'],
      wordsCorrect: 2,
      timeSpent:20,
      countdown: timerLength-1,
      randoArray: Array.from({length: (noOfWords*2)}, i => mT.random())

    }
  }
}



// Make Secret words arrays
function createSecretWordsArray(){

  for (i=0; i<noOfWords; i++){
    let newWord = wordArray[Math.floor(currentState.randoArray[i]*lengthOfWordsArray)];
    while (secretWordList.includes(newWord)) {
      newWord = wordArray[Math.floor(currentState.randoArray[i]*lengthOfWordsArray)];
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
    if (currentState.gameState == playing){
      $("#count").text(currentState.countdown)
      currentState.countdown--;
      if (currentState.countdown <= -1) {
        currentState.gameState = gameFinished;
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



//setup to work on the next row
function loadGameBoardRow() {
  rowComplete = 0; // reset so that enter doesn't work
  lastLetterBox = []; // clear delete list
  currentRow = $('.letterBoxRow').eq(attempt); // use "attempt" to set up the current row
  nextLetterBox = $('.letterBox:empty').first();
}

function createHints () {
  hints=[];
  for (i=0; i<noOfHints[currentState.wordsCorrect]; i++) {
    let hintToAdd = Math.floor(mT.random()*5);
    while (hints.includes(hintToAdd)) {
      hintToAdd = Math.floor(mT.random()*5);
    }
    hints.push(hintToAdd);
  }
}

function scoreBoard (){
  let scoreboardCount = currentState.wordsCorrect +1;
  let score10 = Math.floor(scoreboardCount/10);
  let score1 = scoreboardCount%10;
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
  for (i=0; i<5; i++){  //loop through boxes on the row and build out "currentGuess"
    currentGuess += currentRow.children().eq(i).html().toUpperCase();
  }
  isWord = (allowedWordList.has(currentGuess) || wordList.has(currentGuess));
  if (!isWord) {
    currentRow.children().addClass("wordDoesntExist");
  }
}

function checkWord(){
  Array.from(currentGuess).forEach(function(elt, i, guess){  //turn currentGuess string into an array and loop through each item eg "hello" = [h,e,l,l,o]
    let multiLetter = getAllIndexes(secretWord, elt); //check if the letter is in secretWord if it is, it will return an array of indexes eg. l in hello returns [2,3]
    multiLetter.forEach(function(MLElt, MLi) { //loop through array of indexes, if letter doesn't exist in secretWord, then list will be 0 length
      //MLElt is the index of the letter in the secret word eg 2
      //MLi is the position of the index of the letter in the arrary eg 0
      if (MLElt == i) { // eg does 2 = i (the current position we are in the guess word)
          //eg guess "lemon", secret = "hello"
          //MELt would be [2,3], i = 0 correct letter, wrong place
          //eg guess "yelow", secret = "hello"
          //MELt would be [2], i = 2 - correct letter, correct place
        currentRow.children().eq(i).addClass("correct");
        $("button[data-key='"+elt.toLowerCase()+"']").addClass("correct")
        return;
      }
      else if (secretWord[MLElt] == currentGuess[MLElt]) { //for when you guess a double letter but there is only 1
        return;
      }
      else if(multiLetter.length >= getAllIndexes(currentGuess, elt).length) { //makes sure letter doesn't exist more times
        currentRow.children().eq(i).addClass("wrongPosition");
        $("button[data-key='"+elt.toLowerCase()+"']").addClass("wrongPosition")
        return;
      }

    });
    //if length multiLetter = 0 then it is wrong.
    currentRow.children().eq(i).addClass("wrong");
    $("button[data-key='"+elt.toLowerCase()+"']").addClass("wrong")
  });
}

//This section is for if page is loading from a saved/paused state
function loadGuessesFromPreviousState() {
  currentState.guessesOnCurrentWord.forEach(function(guess){ //loop through any guesses saved in current state. If none then nothing happens
    Array.from(guess).forEach(function(letter,i){  //convert String:guess into array and iterate over
      currentRow.children().eq(i).text(letter);  // ad letter to box on row
    });

    currentGuess = guess;
    checkWord(); //run checkword to show correct colours etc`
    attempt ++; //increase attempts
    loadGameBoardRow(); // load next rows
    //repeat with next word in the guesses array. or revert to normal game play
  });
  currentState.gameState=playing;
}

function newWord () {
  isWord = false;
  rowComplete = 0;
  if (currentState.gameState == playing) { currentState.countdown = timerLength-1;} //dont reset if loading from saved data
  secretWord = secretWordList[currentState.wordsCorrect];
  createHints();
  newGameBoard();
  scoreBoard();
  $(".keyBtn").removeClass("correct wrongPosition wrong");
  loadGameBoardHintRow();
  attempt=1;
  loadGameBoardRow();
}

function getScore() {
  currentScore = timerLength;
  currentScore += (currentState.wordsCorrect*100);
  currentScore -= currentState.timeSpent;
  currentState.finalScore = currentScore;
  return;
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
  $('.keyBtn').off("click");
  $(document).off("keydown");
  $("#count").text("00");

  if (!currentState.finalScore) {getScore();}
  checkHighScore();

  if (currentState.wordsCorrect >= noOfWords){
    $("#gameOver").append("<p>CONGRATULATIONS, YOU WIN.</p>");
  } else {
    $("#gameOver").append("<p>Sorry, you lose. The Final word was : " +secretWord +"</p>");
  }
   $("#gameOver").append("<p>Your score today is " +currentState.finalScore + ". " );
   if (currentState.finalScore < 100) {$("#gameOver").append(scoreEmojis[0]);}
   else if (currentState.finalScore >=100 && currentState.finalScore < 700) {$("#gameOver").append(scoreEmojis[1]);}
   if (currentState.finalScore >=700) {$("#gameOver").append(scoreEmojis[2]);}

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
              currentState.timeSpent += timerLength - currentState.countdown;
              currentState.wordsCorrect++;
              if (currentState.wordsCorrect >= noOfWords){
                currentState.gameState = gameFinished;
                gameOver();
              }else {
                currentState.guessesOnCurrentWord =[]; //remove gueses from current state
                newWord();
              }
          } else {
            currentState.guessesOnCurrentWord.push(currentGuess);
            attempt ++;
            if (attempt == numberOfGuesses) {
              currentState.countdown = 0; //trigger game over
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


function startCountdown(){
  if (startGame == 0) { //start timer if game hasn't started
    startGame = 1;
    $('#count').text(timerLength);
    $(".btnPlayPause").show();
    countdownTimer();
    newWord();
    if (currentState.gameState == paused){
      $('#count').text(currentState.countdown + 1);
      loadGuessesFromPreviousState();
    }

  }
}

// function openingToastr(){
//   toastr.info(
//   'Click HERE to start...',
//   'Ready to Play?',
//   {
//     showDuration: 500,
//     hideDuration: 500,
//     positionClass: "toast-top-center",
//     onHidden: startCountdown
//   }
// );
// }

function gamePaused () {
  $(".modal").toggle("slide", {direction: 'down'},1000);
  if (startGame == 0) {startCountdown()}
  else if (currentState.gameState == playing) {
    currentState.gameState = paused;

  }else if (currentState.gameState == paused){

    currentState.gameState = playing;
  }

}

function selectStartScreen() {
  switch (currentState.gameState) {
    case playing:
        //modalStart.showModal();
        break;
    case paused:
      startCountdown();
      currentState.gameState = paused;
      modalPause.showModal();
      break;
    case gameFinished:
      startCountdown();
      currentState.gameState = gameFinished;
      gameOver();
      break;
    default:

  }
}

function userLeavingPage(){
  if (document.visibilityState === 'hidden') {
    if (currentState.gameState == playing){gamePaused();}
    localStorage.setItem("currentState", JSON.stringify(currentState));
    localStorage.setItem("pausedSeed",testingSeed);
  }
}

function setListeners(){
  //event listner for tap/click on keyboard
  $(document).keydown(function(e){
    if ( ((e.keyCode >= 65) && (e.keyCode <=90)) || (e.keyCode == 13) || (e.keyCode == 8)) {
      KeyboardPressed(e.key);
    }
  });

  //modal close and game start button
  modalBtn.click(startCountdown);

  //pause and unpause
  $(".btnPlayPause").click(gamePaused);

  modalResumeBtn.click(gamePaused);

  //event listner for keyboard presss then take action
  $('.keyBtn').click(function(){
    KeyboardPressed($(this).attr("data-key"));
  });

  //document.addEventListener("visibilitychange", userLeavingPage);

}

function gameStartSetup(){
  loadCurrentState();
  createSecretWordsArray();
  newGameBoard();
  createKeyboard();
  setListeners();

  selectStartScreen();

}


gameStartSetup();
