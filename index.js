
const keyboardLetters1 = ['q','w','e','r','t','y','u','i','o','p'];
const keyboardLetters2 = ['a','s','d','f','g','h','j','k','l'];
const keyboardLetters3 = ['←','z','x','c','v','b','n','m','enter'];
const keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['←','z','x','c','v','b','n','m','enter']]

var startGame = 0;
var letterBoxHTML = "<div class='letterBox'></div>";

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

function insertHTMLBlock (container, htmlText, loops) {
  for (i=0; i<loops; i++) {
    $(container).append(htmlText);
  }
}

insertHTMLBlock('.wordContainer', letterBoxHTML, 5);
insertHTMLBlock('.keyboard','<div class="keyboardRow"></div>',3);

//add row-x to each row to allow selection
$('.keyboardRow').each(function(index){
  $(this).addClass("row-" + (index+1));
});

insertHTMLBlock('.row-1',"<button class='keyBtn'></button>",keyboardLetters1.length);
$('.row-1 .keyBtn').each(function(index){
    $(this).text(keyboardLetters1[index]);
});
insertHTMLBlock('.row-2',"<button class='keyBtn'></button>",keyboardLetters2.length);
$('.row-2 .keyBtn').each(function(index){
    $(this).text(keyboardLetters2[index]);
});
insertHTMLBlock('.row-3',"<button class='keyBtn'></button>",keyboardLetters3.length);
$('.row-3 .keyBtn').each(function(index){
    $(this).text(keyboardLetters3[index]);
});


// keyboardLetters1.forEach((item, i) => {
//   $
// });


$(document).keydown(function(){
  if (startGame == 0) {
    startGame = 1;
    countdownTimer(15);
  }
})
