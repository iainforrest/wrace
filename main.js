import MersenneTwister from './assets/rando.js';
import {wordArray, wordList, allowedWordList} from './assets/words.js';

const keyboardLetters = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['⌫', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '↲']
];
const numberOfGuesses = 6;
const timerLength = 60;
const noOfWords = 10;
const lengthOfWordsArray = wordArray.length;
const seedValue = Math.floor((new Date() - new Date(2022, 6, 10)) / 86400000);
const noOfHints = [4, 3, 3, 3, 2, 2, 2, 1, 1, 0];

const scoreEmojis = ["😢 Better luck next time.", "🙂 Well Done.", "😁 You're AWESOME!"];

const playPauseBtnHTML = `<div class="playPause">
  <span class="material-symbols-outlined playPauseBtn correct" id="btnPlayPauseInline"> play_pause </span>
</div>`;

const modalText = {
  start: `<h3>Welcome to Wrace</h3>
  <p>The word racing game inspired by Wordle</p>
  <p>Battle the clock and race through the 10 words. You get points for every word correct and lose points when you can't solve them in time.<br>
  Everyone gets the same words every day, so share your score with your friends and see who wins.</p>`,
  firstTimer: `<p>If this is your first time here, then you might want to try a Practice session first. There's only 1 daily challenge each day.</p>
  <p>Just click on the Practice tab above then on the Play button up the top</p>`,
  pause: `<h3>Game Paused</h3>
  <p>You have paused Wrace</p>
  <p>The clock has stopped and you can come back any time you want. However, daily games reset at midnight.</p>`,
  gameOver: function() {
    let emojis = emojiresult();
    return `<p class="results">CONGRATULATIONS, You Made It.</p>
    <div id="shareScore">
    <p class="results">${emojis}<br>
    You got ${currentState.wordsCorrect}/10 words correct.</p>
    <p class="results">Your score today is ${currentState.finalScore}. ${(currentState.finalScore < 100) ? `${scoreEmojis[0]}` : (currentState.finalScore < 1000 ? `${scoreEmojis[1]}` : `${scoreEmojis[2]}`) } </p>
    </div>
    <p class="results">Your all time ${tabTxt} High Score is ${(currentTab == dailyTab) ? localStorage.dailyHighScore : localStorage.practiceHighScore }.</p>
    <button type="button" class="shareMe startButton"><span class="material-symbols-outlined share-icon">share</span> Share</button>`
  },
  practiceStats: `Practice Stats are coming soon`,
  dailyStats:`Daily Stats are coming soon`,
  howToPlay:`<p>More information on how to play coming soon</p>
  <h3>How to play</h3>
  <p>For now, the simplest way to explain this is to go and play a gamme of <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> over at the NY Times.<br>
  Then come back here, this is the same basic gameplay, except instead of only haveing one word to solve, you have Ten!</p>
  <p>Then to add to the fun, there is a 60 second time limit to get each word.</p>
  <p>Every round comes with a hint at the top, we start buy giving you 4 of the 5 letters, then as you progress you get less letters and on the final word, you get none.</p>
  <h3>Scoring</h3>
  <p>You get 150 points for evey correct word<br>
  You loose 1 point for every second that it takes you to guess the word,<br>
  You loose 10 points for every guess that you take.<br>
  Fail to solve the word and you loose 60 points.</p>
  <p>So less guesses and completed faster earns you more points!<br>
  ie. if you get the word right in 5 gusesses and 20 seconds, you would get 80 points,<br>
  if you get it right in 2 guesses and 40 seconds you would get 90 points.</p>
  <p>Everyone gets the same words and hints every day, so share your score with your friends and see who the best is!</p>`,
  donate:`<h3>Donate to help keep this running</h3>
  <p>If you love Wrace.me as much as I do, then please consider donating the price of a coffee to help keep this site up and running</p>
  <p>We really don't want to have to use Ads to pay for everything.</p>
  <p>So THANK YOU for donating and helping keep this site pure and simple</p>
  <a href="https://www.buymeacoffee.com/kindredworld" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>`

};

const toastText ={
  wordCorrect: function (scoreThisWord) {return `CONGRATULATIONS!\nYou got the word right!\n\nYou Scored ${scoreThisWord} on this word.`},
  wordWrong:function (scoreThisWord) {return `Sorry\nYou got the word wrong.\nThe final word was ${secretWord}\n\nYou Scored ${scoreThisWord} on this word.`}

};

var currentTab, pauseTab;
const practiceTab = $('#practiceTab')[0];
const dailyTab = $('#dailyTab')[0];
const menuTab = $('#menuTab')[0];

var currentMenuItemTab = $('#menu-info')[0];
const menuInfoTab = $('#menu-info')[0];
const menuStatsTab = $('#menu-stats')[0];
const menuhowToPlayTab = $('#menu-howToPlay')[0];
const menuDonateTab = $('#menu-donate')[0];


var tabTxt;
var secretWordList = [];
var secretWord;
var attempt = 0;
var currentRow;
var nextLetterBox;
var lastLetterBox = [];
var currentGuess;
var isWord = false;
var rowComplete;
var highScore;

var tabSwitch = false;

var notStarted = "notStarted",
  playing = "playing",
  paused = "paused",
  gameFinished = "gameFinished",
  leftSite = "leftSite";


var xCountdown;


var startGame = 0;
const letterBoxRowHTML = '<div class="letterBoxRow"></div>';
const letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
const keyboardRowHTML = '<div class="keyboardRow"></div>';
const buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

var currentState = {};



//if there is a currentState saved in localStorage, load it, otherwise create new
function loadCurrentState(location) {
  if (localStorage.pausedSeed != seedValue){localStorage.removeItem("dailyState"); }
  let savedState = localStorage.getItem(location);
  if (savedState) {currentState = JSON.parse(savedState);} //if localStorage exists and if it is from today, load it

  else { //either is doesn't exist or it is from a previous day
    let mT = new MersenneTwister(currentTab == dailyTab ? seedValue : Math.floor(Math.random()*10000));
    currentState = {
      gameState: notStarted,
      guessesOnCurrentWord: [],
      wordCounter: 0,
      wordsCorrect:0,
      wordChecker:[],
      finalScore: timerLength,
      reloadSite: "false",
      gameOver: false,
      countdown: timerLength - 1,
      randoArray: Array.from({
        length: (noOfWords * 2)
      }, i => mT.random()),
      hintsArray: Array.from({
        length: noOfWords
      },(x,i) => createHints(i, mT) )

    }
  }
}



// Creates the secret words lists based off the array of random numbers that is stored in the currentState
function createSecretWordsArray() {
  secretWordList = [];
  for (let i = 0; i < noOfWords; i++) {
    let newWord = wordArray[Math.floor(currentState.randoArray[i] * lengthOfWordsArray)];
    while (secretWordList.includes(newWord)) {
      newWord = wordArray[Math.floor(currentState.randoArray[i] * lengthOfWordsArray)];
    }

    secretWordList.push(newWord);
  }
}

function createHints(indexNo, rando) {
  let hints = [];
  for (let i = 0; i < noOfHints[indexNo]; i++) {
    let hintToAdd = Math.floor(rando.random() * 5);
    while (hints.includes(hintToAdd)) {
      hintToAdd = Math.floor(rando.random() * 5);
    }
    hints.push(hintToAdd);
  }
  return hints;
}

//create game board rows
function newGameBoard() {
  $('.wordContainer').html("");
  for (let i = 0; i < numberOfGuesses; i++) {
    - // 5 rows
    $('.wordContainer').append(letterBoxRowHTML); //add row
    for (let j = 0; j < 5; j++) {
      $('.letterBoxRow').last().append(letterBoxHTML); // ad 5 boxes to each row
    }

  }
}


//create keyboard
function createKeyboard() {
  for (let i = 0; i < 3; i++) { // 3 rows
    $('.keyboard').append(keyboardRowHTML); //append row
    keyboardLetters[i].forEach(function(value, index, array) { //for each letter in the array of letter arrays
      $('.keyboardRow').last().append(buttonKeyHTML); //append button HTML
      if ((value == '⌫') || (value == '↲')) { //extra wide button for del and enter
        $('.keyBtn').last().addClass('col-15').attr("data-key", value).text(value);
      } else {
        $('.keyBtn').last().addClass('col-1').attr("data-key", value).text(value); //set data-key and inner text to the letter from the array
      }
    });
  }
}



//Load hints onto the current row
function loadGameBoardHintRow() {
  currentRow = $('.letterBoxRow').eq(0); // Top row
  for (let i = 0; i < secretWord.length; i++) {
    if (currentState.hintsArray[currentState.wordCounter].includes(i)) {
      currentRow.children().eq(i).addClass("correct").text(secretWord[i]);
    } else {
      currentRow.children().eq(i).addClass("wrong").text("*");
    }
  }
  nextLetterBox = $('.letterBox:empty').first();
}


//This section is for if page is loading from a saved/paused state
function loadGuessesFromPreviousState() {
  currentState.guessesOnCurrentWord.forEach(function(guess) { //loop through any guesses saved in current state. If none then nothing happens
    Array.from(guess).forEach(function(letter, i) { //convert String:guess into array and iterate over
      currentRow.children().eq(i).text(letter); // ad letter to box on row
    });

    currentGuess = guess;
    checkWord(); //run checkword to show correct colours etc`
    attempt++; //increase attempts
    loadGameBoardRow(); // load next rows
    //repeat with next word in the guesses array. or revert to normal game play
  });

}

//setup to work on the next row
function loadGameBoardRow() {
  rowComplete = 0; // reset so that enter doesn't work
  lastLetterBox = []; // clear delete list
  currentRow = $('.letterBoxRow').eq(attempt); // use "attempt" to set up the current row
  nextLetterBox = $('.letterBox:empty').first();
}


function scoreBoard() {
  //if reloading from finshed game then you want to show 10 not 11
  let scoreboardCount = currentState.wordCounter + (currentState.wordCounter == 10 ? 0:1);
  let score10 = Math.floor(scoreboardCount / 10);
  let score1 = scoreboardCount % 10;
  $('.score-10').text(score10);
  $('.score-1').text(score1);
}


//check if letter exists in more than one place
function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
}


function checkRow() {
  rowComplete = 1;
  currentGuess = "";
  for (let i = 0; i < 5; i++) { //loop through boxes on the row and build out "currentGuess"
    currentGuess += currentRow.children().eq(i).html().toUpperCase();
  }
  isWord = (allowedWordList.has(currentGuess) || wordList.has(currentGuess));
  if (!isWord) {
    currentRow.children().addClass("wordDoesntExist");
  }
}

function checkWord() {
  Array.from(currentGuess).forEach(function(elt, i, guess) { //turn currentGuess string into an array and loop through each item eg "hello" = [h,e,l,l,o]
    let multiLetter = getAllIndexes(secretWord, elt); //check if the letter is in secretWord if it is, it will return an array of indexes eg. l in hello returns [2,3]
    let guessMultiLetter = getAllIndexes(currentGuess, elt);
    multiLetter.forEach(function(mLElt, mLi) { //loop through array of indexes, if letter doesn't exist in secretWord, then list will be 0 length
      //MLElt is the index of the letter in the secret word eg 2
      //MLi is the position of the index of the letter in the arrary eg 0
      if (mLElt == i) { // eg does 2 = i (the current position we are in the guess word)
        //eg guess "lemon", secret = "hello"
        //MELt would be [2,3], i = 0 correct letter, wrong place
        //eg guess "yelow", secret = "hello"
        //MELt would be [2], i = 2 - correct letter, correct place
        currentRow.children().eq(i).addClass("correct");
        $("button[data-key='" + elt.toLowerCase() + "']").addClass("correct");
        return;
      } else if (secretWord[mLElt] == currentGuess[mLElt]) { //for when you guess a double letter but there is only 1
        return;
      } else if (multiLetter.length >= guessMultiLetter.length) { //makes sure letter doesn't exist more times
        currentRow.children().eq(i).addClass("wrongPosition");
        $("button[data-key='" + elt.toLowerCase() + "']").addClass("wrongPosition");
        return;
      // So far, letter exists in the word, is not in the correct position but has been guessed more than once. ie. guess = hello, secret = lemon
      // loop through the guesses to ensure none of the other ones are correct,
      // if none of them do, then mark this one as wrong position and exit so that you don't do the other ones.
      }else if (guessMultiLetter.length > multiLetter.length) {
        if (i == guessMultiLetter[guessMultiLetter.length -1]){
          currentRow.children().eq(i).addClass("wrongPosition");
          $("button[data-key='" + elt.toLowerCase() + "']").addClass("wrongPosition");
          return;
        }

      }

    });
    //if length multiLetter = 0 then it is wrong.
    currentRow.children().eq(i).addClass("wrong");
    $("button[data-key='" + elt.toLowerCase() + "']").addClass("wrong")
  });
}


function newWord() {
  isWord = false;
  rowComplete = 0;
  if (currentState.gameState == playing) {
    currentState.countdown = timerLength - 1;
  } //dont reset if loading from saved data
  secretWord = secretWordList[currentState.wordCounter - (currentState.wordCounter ==10 ? 1:0 )];
  newGameBoard();
  scoreBoard();
  $(".keyBtn").removeClass("correct wrongPosition wrong");
  loadGameBoardHintRow();
  attempt = 1;
  loadGameBoardRow();
}

function emojiresult () {
  let x ="";
  if (currentState.wordChecker.length == noOfWords){
    for (let i=0; i< noOfWords; i++){
      x += (currentState.wordChecker[i] ? "🟩" : "🟥");
    }
  }

  return x;
}

function CopyToClipboard (shareText) {
  // Create a new textarea element and give it id='temp_element'
  const textarea = document.createElement('textarea');
  textarea.id = 'temp_element';
  // Optional step to make less noise on the page, if any!
  textarea.style.height = 0;
  // Now append it to your page somewhere, I chose <body>
  document.body.appendChild(textarea);
  // Give our textarea a value of whatever inside the div of id=containerid
  textarea.value = shareText;
  textarea.value += document.getElementById("shareScore").innerText;

  // Now copy whatever inside the textarea to clipboard
  const selector = document.querySelector('#temp_element');
  selector.select();
  document.execCommand('copy');
  // Remove the textarea
  document.body.removeChild(textarea);
  Toastify({
    text: "copied to clipboard",
    className: "info",
    offset: {
    x: '40vw', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    y: '80vh' // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    duration: 1000,
    stopOnFocus: false,
    style: {
      background: "#000000",
    }
  }).showToast();
}

function mobileShare (shareText) {
  shareText += $('#shareScore').text().replace(/(<([^>]+)>)/gi, "");
  let shareData = {
    title: "Wrace Score",
    text : shareText
  }
  navigator.share(shareData);
}


function checkHighScore() {
  let testHighScoreExists = localStorage.getItem(currentTab == dailyTab ? "dailyHighScore" : "practiceHighScore")
  if (!testHighScoreExists) {
    highScore = currentState.finalScore;
  } else {
    highScore = testHighScoreExists;
  }
  if (currentState.finalScore > highScore) {
    highScore = currentState.finalScore
  }
  localStorage.setItem((currentTab == dailyTab ? "dailyHighScore" : "practiceHighScore"), highScore);

}

//countdown Timer
function countdownTimer() {
  if (xCountdown) {clearInterval(xCountdown);}
  xCountdown = setInterval(function() {
    if (currentState.gameState == playing) {
      $("#count").text(currentState.countdown)
      currentState.countdown--;
      if (currentState.countdown <= -1) {
        wordOver(false);
      }
    }

  }, 1000);
}

function countdownToast(i) {
  if (i==0){
    if (currentState.wordCounter == noOfWords) {
      gameOver();
    }else {
      currentState.guessesOnCurrentWord = []; //remove gueses from current state
      currentState.gameState = playing;
      startCountdown();
    }
    return;
  }
  if (currentState.wordCounter == noOfWords) {
    setTimeout(function(){
      countdownToast(i-1);
    },300);
  }else {
    Toastify({
      text: (i == 1)? "Loading Next Word..." : i ,
      className: `pauseGame`,
      gravity: "top", // `top` or `bottom`
      position: "center",
      offset: {
      // x: '40vw', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: '25vh' // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      duration: 750,
      stopOnFocus: false,
      callback: function() {countdownToast(i-1)},

    }).showToast();
  }

}


function wordOver(correct) {
  currentState.gameState = paused;
  currentState.wordChecker.push((correct)? true : false );
  currentState.wordsCorrect += (correct)? 1 :0;
  let scoreThisWord = 0;
  if (!correct){
    scoreThisWord = -60;
  }else {
    // minus time taken
    scoreThisWord -= timerLength - currentState.countdown;
    // add 100 for a correct word
    scoreThisWord += (correct) ? 100 : -currentState.countdown ;
    // add 10 for guesses taken 5 gueses = 0, 1 guess = 50
    scoreThisWord += (numberOfGuesses - attempt)*10;
  }
  currentState.finalScore += scoreThisWord;
  currentState.wordCounter++;
  Toastify({
    text: (correct)? toastText.wordCorrect(scoreThisWord) : toastText.wordWrong(scoreThisWord) ,
    className: `word-complete ${(correct)?"correct":"wrong"}`,
    gravity: "top", // `top` or `bottom`
    position: "center",
    offset: {
    // x: '40vw', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    y: '25vh' // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    duration: 3000,
    stopOnFocus: false,
    // callback: function () {
    //
    // },

  }).showToast();
  setTimeout(function(){
    countdownToast(1);
  },2000);
}

function startCountdown() {
  $('#count').text(currentState.countdown + 1);
  if(currentState.gameState != gameFinished){countdownTimer();}
  newWord();

}


function setUpScreenFromState(){
  createSecretWordsArray();
  startCountdown();
  loadGuessesFromPreviousState();
}


function toggleModal() {
  $(".mainModal").slideToggle(1000);
  $('#btnPlayPause').toggleClass('correct pauseGame');
  // $(".mainModal").toggle("slide", {
  //   direction: 'down'
  // }, 1000);
}

function gamePlayPause() {
  if (currentState.gameState ==  gameFinished){ //if reloading from a saved state
    tabSwitch = true;
    // if ($('.mainModal').is(":visible")) {
    //   if (((localStorage.lastPlayed == "dailyState") ? dailyTab : practiceTab )!= currentTab){
    //     setUpScreenFromState();
    //   }
    // }else {
    //   localStorage.setItem("lastPlayed", (currentTab == dailyTab ? "dailyState" : "practiceState"));
    // }
  }else if (localStorage.leftSite) {
    setUpScreenFromState();
    if (currentState.gameState == paused || currentState.gameState == notStarted ){ currentState.gameState = playing; }
    localStorage.removeItem("leftSite");

  }else if (currentState.gameState == playing){
    currentState.gameState = paused;
    localStorage.setItem("lastPlayed", currentTab == dailyTab ? "dailyState" : "practiceState");
  }else if (currentState.gameState == paused || currentState.gameState == notStarted){
    if ((localStorage.lastPlayed == "dailyState" ? dailyTab : practiceTab )!= currentTab || currentState.gameState == notStarted) {
      setUpScreenFromState();
    }
    currentState.gameState = playing;
  }

  selectTxtOutput();
}


function gameOver() {
  if(currentState.countdown >= 0){
    currentState.countdown = -1;
    $("#count").text(currentState.countdown +1);
  }
  currentState.gameState = gameFinished;
  currentState.gameOver = true;
  currentState.lastWord = secretWord;
  localStorage.setItem("lastPlayed", (currentTab == dailyTab ? "dailyState" : "practiceState"));
  clearInterval(xCountdown);
  if (!currentState.finalScore) {
    getScore();
  }
  checkHighScore();
  selectTxtOutput();
}

function practiceReset(){
  localStorage.removeItem("practiceState");
  loadCurrentState("practiceState");
  gamePlayPause();
}

function selectTxtOutput() {
  tabTxt = currentTab == practiceTab ? "Practice" : "Daily";
  let txt = "";
  if (currentMenuItemTab == menuhowToPlayTab){
    txt = modalText.howToPlay;
  }else if (currentMenuItemTab == menuDonateTab){
    txt = modalText.donate;
  }else if (currentMenuItemTab == menuStatsTab) {
    txt = (currentTab == dailyTab) ? modalText.dailyStats : modalText.practiceStats;

  } else {
    switch (currentState.gameState) {
      case notStarted:
        txt = modalText.start;
        if (!localStorage.dailyHighScore && currentTab == dailyTab){
          txt += modalText.firstTimer;
        }
        txt+= playPauseBtnHTML;
        break;
      case paused:
        txt = modalText.pause;
        txt+= playPauseBtnHTML;
        break;
      case gameFinished:
        txt = modalText.gameOver();
        break;
      default:
    }

    //add practicing to if on Practice Tab
    if (currentState.gameOver){
      if (currentTab == practiceTab){
        txt += `<p class="results">Would you like to practice again?</p>
        <button type="button" class="startButton" id="btn-TryAgain">Try Again</button>`;
      }
    }
  }


  $("#startModal").empty().append(txt);
  $('#btn-TryAgain').click(practiceReset);
  //pause and unpause
  $("#btnPlayPauseInline").click(gamePlayPause);

  $('.shareMe').click(function() {
    let shareText = `Wrace.me - ${(currentTab == dailyTab) ?"Daily " : "Practice "} #${seedValue} \n`;
    if (window.innerWidth <= 991) {
      mobileShare(shareText);
    }else {
      CopyToClipboard(shareText);
    }
  });

  tabSwitch ? tabSwitch = false : toggleModal();
}

function tabSwitching() {
  tabSwitch = true;
  $(currentTab).toggleClass("wrong correct black-bottom-border");
  $(this).toggleClass("wrong correct black-bottom-border");
  saveCurrentStateToLocalStorage(currentTab == dailyTab ? "dailyState" : "practiceState");
  currentTab = $(this)[0];
  $('.menu-item').removeClass('correct');
  $('#menu-info').addClass('correct');
  currentMenuItemTab = $('#menu-info')[0];
  loadCurrentStateText();
}

function saveCurrentStateToLocalStorage(location){
  localStorage.setItem(location, JSON.stringify(currentState));
  localStorage.setItem("pausedSeed", seedValue);

}

function userLeavingPage() {
  if (document.visibilityState === 'hidden') {
    if (currentState.gameState == playing) {gamePlayPause(); }
    clearInterval(xCountdown);
    saveCurrentStateToLocalStorage((currentTab == dailyTab ? "dailyState" : "practiceState"));
    localStorage.setItem("leftSite", "true");
  }else {

  }
}




//delete button
function deleteButtonPressed() {
  let delBox = lastLetterBox.pop(); // get last item from letterbox list
  if (delBox != null) { // if it's not empty ie. no letters currently entered
    delBox.text(""); //delete it`
    nextLetterBox = $('.letterBox:empty').first(); // reset next letterbox
    if (rowComplete == 1) {
      currentRow.children().removeClass("wordDoesntExist");
      rowComplete = 0;
    }
  }
}


function KeyboardPressed(keyPressed) {
  if (currentState.gameState == playing) { // do nothing if the countdown hasn't startedd
    //get the key
    //case statement del, enter, other letter
    switch (keyPressed) {
      case '⌫':
      case 'Backspace':
        deleteButtonPressed();
        break;
      case '↲':
      case 'Enter':
        if (rowComplete == 1 && isWord) {
          checkWord();
          currentState.guessesOnCurrentWord.push(currentGuess);
          if (currentGuess == secretWord) {
            wordOver(true);
          } else {

            attempt++;
            if (attempt == numberOfGuesses) {
               wordOver(false);
            } else {
              loadGameBoardRow();
            }
          }
        }
        break;
      default:
        if (nextLetterBox.parent()[0] == currentRow[0]) { //only enter text if the next empty box is on the current row
          nextLetterBox.text(keyPressed);
          lastLetterBox.push(nextLetterBox); // add letterbox reference to last letter box for deleteing if needed
          nextLetterBox = $('.letterBox:empty').first();
          if (nextLetterBox.parent()[0] != currentRow[0]) {
            checkRow();
          }
        }

    }
  }
}


function setListeners() {
  //event listner for tap/click on keyboard
  $(document).keydown(function(e) {
    if (((e.keyCode >= 65) && (e.keyCode <= 90)) || (e.keyCode == 13) || (e.keyCode == 8)) {
      KeyboardPressed(e.key);
    }
  });

  //event listner for keyboard presss then take action
  $('.keyBtn').click(function() {
    KeyboardPressed($(this).attr("data-key"));
  });

  //pause and unpause
  $("#btnPlayPause").click(gamePlayPause);

  //switching between daily and practice tabs
  $('.playTab').click(tabSwitching);

  //menu tab items
  $('.menu-item').click(menuTabSwitch);

  //save current state if the user leaves the screen
  document.addEventListener("visibilitychange", userLeavingPage);
}

function menuTabSwitch () {
  $('.menu-item').removeClass('correct');
  $(this).addClass('correct');
  currentMenuItemTab = $(this)[0];
  tabSwitch = true;
  selectTxtOutput();
}

function loadCurrentStateText (){
  loadCurrentState(currentTab == dailyTab ? "dailyState" : "practiceState");
  selectTxtOutput();
}

function gameStartSetup() {
  if (localStorage.pausedSeed < 61 ){
    localStorage.removeItem("practiceState");
    localStorage.removeItem("dailyState");
  }
  createKeyboard();
  setListeners();  //Set play/pause and Tab switching listeners
  //If reloading after the player has left the site.
    //currentTab = the lastPlayed tabs
    //remove left site trigger
  //else create new current state on Daily
  if (localStorage.leftSite) {
    currentTab =  localStorage.lastPlayed == "dailyState" ? dailyTab : practiceTab;
    if (currentTab != dailyTab){
      $(dailyTab).toggleClass("wrong correct black-bottom-border");
      $(currentTab).toggleClass("wrong correct black-bottom-border");
    }
  }else {
    currentTab = dailyTab;
    localStorage.setItem("lastPlayed", "dailyState");
  }
  tabSwitch = true; // to keep modal up
  loadCurrentStateText();

}


gameStartSetup();
