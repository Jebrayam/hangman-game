var idxWrongLetter = 0;
let xInicialWrongLetter = 735;
let yInicialWrongLetter = 15;

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
        brush.fillStyle = "black";
        brush.fillText(letter, xInicial, yInicial);
    });
}

function showWrongLetter(letter){
    yInicialWrongLetter += (20*idxWrongLetter);
    brush.fillStyle = "red";
    brush.fillText(letter, xInicialWrongLetter, yInicialWrongLetter);
    yInicialWrongLetter = 15;
    idxWrongLetter++;
}

function drawHangmanPart(){
    switch (idxWrongLetter) {
        case 1:
            brush.beginPath();
            brush.fillStyle = "black";
            brush.arc(500,300,30, 0, 2*Math.PI);
            brush.fill();
            brush.stroke();
            break;
        
        case 2:
            brush.moveTo(500,330);
            brush.lineTo(500,430);
            brush.stroke();
            break;

        case 3:
            brush.moveTo(443,490);
            brush.lineTo(500,430);
            brush.stroke();
            break;

        case 4:
            brush.moveTo(557,490);
            brush.lineTo(500,430);
            brush.stroke();
            break;

        case 5:
            brush.moveTo(443,440);
            brush.lineTo(500,390);
            brush.stroke();
            break;

        case 6:
            brush.moveTo(557,440);
            brush.lineTo(500,390);
            brush.stroke();
            break;

        case 7:
            brush.moveTo(500,80);
            brush.lineTo(500,270);
            brush.stroke();
    
        default:
            break;
    }
}

function clearCanvas(){
    idxWrongLetter = 0;
    brush.clearRect(0,0,screen.width,screen.height);

    brush = screen.getContext("2d");
    screen.width = 750;
    screen.height = 550;

    var background = new Image();
    background.src =  "img/canvasBackground.jpg";

    brush.drawImage(background,0,0);   
}
