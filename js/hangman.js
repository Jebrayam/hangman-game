var splittedWord;
var letterIdxs = [];
var lettersCheck = [];
var wrongLetters = [];
var randomWord;
const TRIES = 7;

var words = ["autumn", "bathroom", "body", "christmas", "clothes", "colours", "animals", 
            "drinks", "easter", "family", "feelings", "food", "fruits", "furniture", "halloween",
            "insects", "kitchen", "pencase", "pets", "school", "sport", "spring", "summer",
            "time", "town", "toys", "transport", "vegetables", "verbs", "weather", "winter"];

var startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function(){
    clearCanvas();
    resetVariables();
    
    randomWord = returnRandomWord(words);  
    splittedWord = randomWord.split('');
    
    drawLines(splittedWord.length);

    document.addEventListener("keyup", pressedKey);
});

var addBtn = document.querySelector("#addBtn");
var inputField = document.querySelector("#inputField");

addBtn.addEventListener("click", function(){
    var newWord  = inputField.value;

    if (newWord != ""){
        words.push(newWord);
        alert("New word added to the game.")
        inputField.value = "";
    } else {
        alert("Please enter a word.")
    }
    
});

function returnRandomWord(words){
    var word = words[Math.floor(Math.random()*words.length)];

    return word.toUpperCase();
}

function pressedKey(event){ 
    if (!isValidKey(event.keyCode)){
        return;
    }

    var okLetter = event.key.toUpperCase();
    
    if(isInArray(okLetter, lettersCheck) || isInArray(okLetter, wrongLetters)){
        return;
    }

    if (!isInSecredWord(okLetter)){
        showWrongLetter(okLetter);
        wrongChoose(okLetter);
        drawHangmanPart();
        setTimeout(checkLoose, 500);
        return;
    }

    showRightLetter(okLetter, letterIdxs);
    setTimeout(checkWin, 500);
}

function isValidKey(letterCode){
    if(letterCode >= 65 && letterCode <= 90 || letterCode == 186){
        return true;
    }
}

function isInArray(letter, array){
    if(array.indexOf(letter) == -1){
        return false;
    }
        return true;
}

function isInSecredWord(letter){
    var isInWord = false;
    letterIdxs = [];

    splittedWord.forEach((iLetter, index) => {
        if (iLetter == letter){
            isInWord = true;
            letterIdxs.push(index);
            lettersCheck.push(iLetter);
        }
    });
    return isInWord;
}

function wrongChoose(letter){
    wrongLetters.push(letter);
}

function checkWin(){
    if(lettersCheck.length == splittedWord.length){
        removeKeyUpListener();
        alert("You win!!");
        resetVariables();
        clearCanvas();
    }
}

function resetVariables(){
    splittedWord = [];
    letterIdxs = [];
    lettersCheck = [];
    wrongLetters = [];   
}

function checkLoose(){
    if(wrongLetters.length >= TRIES){
        removeKeyUpListener();
        alert("You loose!! The word was " + randomWord);
        resetVariables();
        clearCanvas();
    }
}

function removeKeyUpListener(){
    document.removeEventListener('keyup', pressedKey);
}