var bubbles = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 40; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(50);
  for (var i = bubbles.length -1 ; i >=0 ; i--) {
    bubbles[i].move();
    bubbles[i].check(i);
    if (bubbles[i]) {
      bubbles[i].display();
    }
  }
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}
