// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

let fireworks;
let gravity;
let paused;
let reset;
let resetX;
let resetY;
let resetLength;
let resetHeight;
let r;
let g;
let b;
function miniSetup() {
  colorMode(HSB);
  fireworks = [];
  gravity = createVector(0, 0.15);
  resetX = width / 2 - 125;
  resetY = height / 1.5 - 57.5; 
  resetLength = 250;
  resetHeight = 125;
  stroke(255);
  strokeWeight(4);
  background(0);
  reset = false;
  paused = false;
  r = 10;
  g = 60;
  b = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  miniSetup();
  
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (paused) {
    const middleX = width/2
    const middleY = height/2
    stroke(255, 255, 255)
    strokeWeight(4)
    fill(0, 255, 205);
    textSize(100);
    textAlign(CENTER, CENTER);
    text('PAUSED', middleX, middleY);
    fill(255, 0, 196);
    stroke(255, 255, 255);
    rectMode(CENTER);
    strokeWeight(3);
    rect(width / 2, height / 1.5, 225, 120);
    stroke(25);
    strokeWeight(2);
    fill(60, 0, 60)
    textSize(60);
    textAlign(CENTER, CENTER);
    text('RESET', width / 2, height / 1.5);
    
    
  } else {

    stroke(r, g, b);
    if (random(1) < 0.04) {
      fireworks.push(new Firework());
    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();

      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  }
}

function mouseMoved(){
  console.log('' + mouseX + ' ' + mouseY);
}
function mouseClicked(){
if (r < 255 && g < 255 && b < 255){
  r = 10;
  g = 60;
  b = 0;
} else {
  r += 30;
  g += 10;
  b += 40;
}
}
function mouseClicked(){
  var d = dist(mouseX, mouseY, resetX, resetY);
  if (paused && mouseX > resetX && mouseX < (resetX + resetLength) && mouseY > resetY && mouseY < (resetY + resetHeight)){
      setup();
    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].updateColor();
    }
}

function keyPressed() {
  if (key === 'p') {
    paused = !paused
 } 
}
