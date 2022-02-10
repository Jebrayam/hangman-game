var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

screen.width = 750;
screen.height = 550;

var background = new Image();
background.src = "img/canvasBackground.jpg";

background.onload = function(){
    brush.drawImage(background,0,0);   
}

function drawLines(wordLength){
    let xInicial = 140;
    let yInicial = 540;


    for(let i=0; i < wordLength; i++){
        brush.moveTo(xInicial, yInicial); 
        brush.lineTo(xInicial + 20, yInicial);
        brush.stroke();
        xInicial += 30;
    }   
}

function showRightLetter(letter, idxs){
    let yInicial = 535;

    idxs.forEach((idx) => {
        let xInicial = 143;
        xInicial += (30 * idx)
        brush.fillText(letter, xInicial, yInicial);
    });
}