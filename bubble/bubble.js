function Bubble(x_, y_) {
  this.x = x_;
  this.y = y_;
  this.diam = random(20, 40);
  this.col = color(random(0, 255), random(0, 255), random(0, 255));

  this.display = function() {
    stroke(0);
    fill(this.col);
    ellipse(this.x, this.y, this.diam, this.diam);
  }

  this.move = function() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  this.check = function(i_) {
    var i = i_;
    if (this.x + this.diam / 2 >= width || this.x - this.diam / 2 <= 0 ||
      this.y + this.diam / 2 >= height || this.y - this.diam / 2 <= 0) {
      bubbles.splice(i, 1);
      bubbles.push(new Bubble(random(width), random(height)));
    }
  }

  this.clicked = function() {
    for (var i = 0; i < bubbles.length; i++) {
      this.col = color(random(0, 255), random(0, 255), random(0, 255));
    }
  }
}