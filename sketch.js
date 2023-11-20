// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;
let paused = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (paused){

const middleX = width/2
const middleY = height/2
fill(255, 0, 0);
textSize(100);
textAlign(CENTER, CENTER);
text('PAUSED', middleX, middleY);
fill(180, 170, 50);
stroke(0, 0, 255);
rectMode(CENTER);
strokeWeight(5);
rect(100, 100, 100, 50);

  } else {
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
function keyPressed(){
   if (key === 'p'){
  paused = !paused
   } 
  }