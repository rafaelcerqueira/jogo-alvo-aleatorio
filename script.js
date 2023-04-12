//configurando o pincel:
var screen = document.querySelector('canvas');
var pincel = screen.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var ray = 10;
var xRandom;
var yRandom;

function drawCicle(x, y, ray, color) {
    
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, ray, 0, 2 * Math.PI);
    pincel.fill();
}

function clearScreen() {

    pincel.clearRect(0, 0, 600, 400);
}

function drawTarget(x, y) {

    drawCicle(x, y, ray+20, 'red');
    drawCicle(x, y, ray+10, 'white');
    drawCicle(x, y, ray, 'red');
}

function rafflePosition(max) {

    return Math.floor(Math.random() * max);
}

function refreshScreen() {

    clearScreen();

    xRandom = rafflePosition(600);
    yRandom = rafflePosition(400);
    drawTarget(xRandom, yRandom);
}

setInterval(refreshScreen, 1000);

function trigger(event) {
    
    var x = event.pageX - screen.offsetLeft;
    var y = event.pageY - screen.offsetTop;

    var xRandomTarget = (x > xRandom - ray) && (x < xRandom + ray);

    var yRandomTarget = (y > yRandom - ray) && (y < yRandom + ray);

    if(xRandomTarget && yRandomTarget) {
        alert('Acertou!');
    }


}

screen.onclick = trigger;