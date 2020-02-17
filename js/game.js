let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

let gap = 90;
let xBirdPos = 150;
let gravity = 1;

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';

let fly = new Audio();
let score_audio = new Audio();

fly.src = 'audio/fly.mp3';
score_audio.src = "audio/score.mp3";

function update() {
    xBirdPos += gravity;
}
function render() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bird, 10, xBirdPos);
}
document.addEventListener('keydown', moveUp);

function moveUp() {
    xBirdPos -= 5;
}
let frame = () => {
    update();
    render();
    requestAnimationFrame(frame);
}

pipeBottom.onload = frame;