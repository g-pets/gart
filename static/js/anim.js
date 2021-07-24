var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let canvas = document.getElementById('anim');
let context = canvas.getContext('2d');
canvasSize(canvas, context);

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var angle = 0;

function drawCircle() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    

    // draw the circle
    context.beginPath();
    var radius = 25 + 150 * Math.abs(Math.cos(angle));
    context.arc(225, 225, radius, 0, Math.PI * 2, false);
    context.closePath();

    // color in the circle
    context.fillStyle = "#006699";
    context.fill();
    angle += Math.PI / 180;

    // requestAnimationFrame(drawCircle);
    
}


function anim() {
    drawCircle();
};