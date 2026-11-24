// alert("Let it snow, let it snow, let it snow! ☃️");

// ADD YOUR ARRAY OF WORDS HERE
var words = ["Candy Cane", "Santa", "Snow","December", "Christmas", "Frosty the Snowman", "Hot Coco", "Snowflake", "Saint Nick", "Gingerbread", "Custard", "Stockings"];

var snowmanParts = [".hat", ".face", ".scarf", ".hands", ".body-top", ".body-middle", ".body-bottom"];
var randomWord = getRandomWord(words);
var keyboardContainer = document.querySelector('#keyboard-container');
keyboardContainer.addEventListener("click", handleKeyboardClick);

generateHiddenWord(randomWord);

function handleKeyboardClick(event){
  var clickedElement = event.target;

  if (!clickedElement.classList.contains("letter") || clickedElement.classList.contains("selected")) return;

  clickedElement.classList.add("selected");
  
  var clickedLetter = clickedElement.textContent;
  var hasMatch = checkForMatch(clickedLetter);

//CHECK THIS

 function checkForLoser () {

    if (snowmanParts.length === 0) {
        var replace = docuement.querySelector("#snowman-container");
        replace.innerHTML = "<h2>You lost, game over!</h2>"
        keyboardContainer.innerHTML = "<h2>The word was:"+ randomWord.value + "</h2>";
    }
  }
 
  function checkForWinner () {
    var hiddenLetterElements = document.querySelectorAll(".hidden");
    if (hiddenLetterElements.length === 0) {
        keyboardContainer.innerHTML = "<h2>You Win!</h2>"
    }
  }

  if (!hasMatch) {
    // What function do we call??
    checkForWinner();
  } else {
    // What function do we call??
    checkForLoser();
  }
}

function checkForMatch(clickedLetter) {
 var hiddenLetterElements = document.querySelectorAll(".hidden");
 var hasMatch = false;
 
 hiddenLetterElements.forEach(hiddenLetterElement => {
  var hiddenLetter = hiddenLetterElement.textContent;
  console.log(hiddenLetter, clickedLetter)
    if (hiddenLetter === clickedLetter) {
      hiddenLetterElement.classList.remove("hidden");
      hasMatch = true;
    }
  
 })
 return hasMatch;
}

function removeSnowmanPart() {
  var snowmanPart = snowmanParts.shift();
  var partsToRemove = document.querySelectorAll(snowmanPart);
  
  partsToRemove.forEach(partToRemove =>{
    partToRemove.remove();

  })
}


function generateHiddenWord(word) {
  var letters = word.split("");
  var emptyLetterContainer = document.querySelector("#empty-letter-container");

  var lettersHTML = "";
  for (var letter of letters) {
    var letterHTML = `<p class="letter-container"><span class="letter hidden">${letter}</span></p>`;
    lettersHTML += letterHTML;
  }

  emptyLetterContainer.innerHTML = lettersHTML;
}

function getRandomWord(words) {
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  return randomWord;
}

// CHECK FOR LOSER FUNCTION HERE


// console.log(checkForLoser());


// CHECK FOR WINNER FUNCTION HERE
// console.log(checkForWinner());
 




