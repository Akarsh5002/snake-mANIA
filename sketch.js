// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

let s;
let scl = 20;
let food;
var bg
function preload(){
  bg = loadImage("Sparkle.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  
  food.mult(scl);
}



function draw() {
  background(bg);
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill("green");
  rect(food.x, food.y, scl, scl);

  if(s.death()<=10){
    fill("yellow")
    text("Ultimate Winner",300,300)
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.fire(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.fire(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.fire(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.fire(-1, 0);
  }
}
