var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

screen.width = 750;
screen.height = 550;

var background = new Image();
background.src = "img/canvasBackground.jpg";

background.onload = function(){
    brush.drawImage(background,0,0);   
}