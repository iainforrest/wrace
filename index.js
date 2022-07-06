const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['⌫','z','x','c','v','b','n','m','↲']]
const numberOfGuesses = 5;
const timerLength = 14;
const secretWord = "HELLO"//wordArray[Math.floor(Math.random()*2315)];

var hints = [0,1,3];
var lettersToCheck = [];
var attempt = 0;
var currentRow;
var nextLetterBox;
var lastLetterBox =[];
var currentGuess = "";

var rowComplete = 0;

var startGame = 0;
var letterBoxRowHTML = '<div class="letterBoxRow"></div>';
var letterBoxHTML = "<div class='letterBox' data-type='empty'></div>";
var keyboardRowHTML = '<div class="keyboardRow"></div>';
var buttonKeyHTML = "<button type='button' data-key='' class='keyBtn'></button>"

//create game board rows
for (i=0; i<numberOfGuesses; i++) {- // 5 rows
  $('.wordContainer').append(letterBoxRowHTML);  //add row
  for (j=0; j<5; j++){
    $('.letterBoxRow').last().append(letterBoxHTML);  // ad 5 boxes to each row
  }

}

//create keyboard
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


// // get the indexs of the letters that are left to check.
// function lettersLeft() {
//   let x = [];  // create empty array
//   for (i=0; i<5; i++){  //loop through indexs 0-4
//     if (hints.indexOf(i) == -1) { // if index is NOT in correct letters, then add to index
//         x.push(i);
//     }
//   }
//   return x; // return index of letters left to get
// }



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
  currentGuess = ""
  for (i=0; i<5; i++){
    currentGuess += currentRow.children().eq(i).html().toUpperCase();
  }
  if (!wordList.has(currentGuess)) {
    currentRow.children().addClass("wordDoesntExist");
  }
}

function checkWord(){
  Array.from(currentGuess).forEach(function(elt, i, guess){
    currentRow.children().eq(i).addClass("wrong");
    let multiLetter = getAllIndexes(secretWord, elt);
    multiLetter.forEach(function(MLElt, MLi) {
      if (MLElt == i) {
        currentRow.children().eq(i).removeClass("wrong").removeClass("wrongPosition").addClass("correct");
      }
      else if (secretWord[MLElt] == currentGuess[MLElt]) {
        return;
      }
      else if(multiLetter.length >= getAllIndexes(currentGuess, elt).length) {
        currentRow.children().eq(i).removeClass("wrong").addClass("wrongPosition");
      }
    });
  });
}

//check if word is correct on enter
function checkWordOLD() {
  lettersToCheck = lettersLeft();  //make coopy of letters left so that we can edit letters left if letter is found
  lettersToCheck.forEach(function(value,index,array) { //for each letter left eg.[0,3]
    let letterToCheck = currentRow.children().eq(value).html().toUpperCase(); //letterbox[0].text -what the player has guessed.
    let instances = getAllIndexes(secretWord, letterToCheck);//get indexes of all instances of guessed letter in the secret word. eg l in hello = [2,3] / p in hello = []
    if (instances.length == 0) { //is [] then leter is not in secret word
      currentRow.children().eq(value).addClass("wrong");
      return;                    //do nothing - go to next guessed letter
    }
    else {  //letter exists in secret word
      instances.some(function(inst) { // for each index of the letter in secret ie l = [2,3]
        if (!hints.includes(inst)){  // check if [2] is in correct letters- if it is then skip it (helps for doubble letters)
          if (inst == value){ // if it isn't in correct letters and the index of the instance matches the index of the guest then it is right word right place
            currentRow.children().eq(value).removeClass("wrongPosition").addClass("correct");
            hints.push(value);
            return true;
          }else {
            currentRow.children().eq(value).addClass("wrongPosition");
          // correct letter wrong position
          console.log("correct letter, wrong position");
          }
        }
      });
    }
  });

}


//start game
$('#count').click(function(){
  if (startGame == 0) { //start timer if game hasn't started
    startGame = 1;
    $('#count').text(timerLength+1).removeClass("startButton");
    countdownTimer(timerLength);
    loadGameBoardHintRow();
    attempt++;
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
        deleteButtonPressed();
        break;
      case '↲':
        if (rowComplete == 1){
          if (hints.length < 5) {
            checkWord();
            attempt ++;
            loadGameBoardRow();
          }else {
            console.log("you win");
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

});
