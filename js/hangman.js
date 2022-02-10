var splittedWord;
var letterIdxs = [];

var words = ["autumn", "bathroom", "body", "christmas", "clothes", "colours", "animals", 
            "drinks", "easter", "family", "feelings", "food", "fruits", "furniture", "halloween",
            "insects", "kitchen", "pencase", "pets", "school", "sport", "spring", "summer",
            "time", "town", "toys", "transport", "vegetables", "verbs", "weather", "winter"];

var startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function(){
    var randomWord = returnRandomWord(words);  
    splittedWord = randomWord.split('');

    console.log(splittedWord);   
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
    console.log(event.key);
    console.log(splittedWord);

    var okLetter = event.key.toUpperCase();

    if (!isInSecredWord(okLetter)){
        return;
    }

    showRightLetter(okLetter, letterIdxs);
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
        }
    });
    return isInWord;
}