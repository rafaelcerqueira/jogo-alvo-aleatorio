var screen = document.querySelector('canvas');
var pincel = screen.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var ray = 10;

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

    var xRandom = rafflePosition(600);
    var yRandom = rafflePosition(400);
    drawTarget(xRandom, yRandom);
}

//setInterval(refreshScreen, 1000);
