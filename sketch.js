// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;
let reset = false;
let paused = false;
function miniSetup() {
  colorMode(HSB);
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(4);
  background(0);
  
};
function setup() {
  createCanvas(windowWidth, windowHeight);
miniSetup();
};
function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  function mouseMoved(){
    console.log(mouseX && mouseY);
  };
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
rectAllign(CENTER);
strokeWeight(3);
rect(width / 2, height / 1.5, 225, 120);
stroke(25);
strokeWeight(2);
fill(60, 0, 60)
textSize(60);
textAlign(CENTER, CENTER);
text('RESET', width / 2, height / 1.3);
let resetX = width / 2 - 125;
let resetY = height / 1.5 - 57.5;
let resetLength = 250;
let resetHeight = 125;
function mouseClicked(){
    var d = dist()
  if (paused && mouseX > resetX && mouseX < (resetX + resetLength) && mouseY > resetY && mouseY < (resetY + resetHeight)){
      reset = true;
    }
  }
  if (reset === true) {
    miniSetup();
   }
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
  