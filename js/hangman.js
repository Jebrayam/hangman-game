var words = ["autumn", "bathroom", "body", "christmas", "clothes", "colours", "animals", 
            "drinks", "easter", "family", "feelings", "food", "fruits", "furniture", "halloween",
            "insects", "kitchen", "pencase", "pets", "school", "sport", "spring", "summer",
            "time", "town", "toys", "transport", "vegetables", "verbs", "weather", "winter"];

var startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function(){
     var randomWord = returnRandomWord(words);  
     console.log(words);     
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