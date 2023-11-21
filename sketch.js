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
rect(width / 2, height / 1.25, 250, 115);

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