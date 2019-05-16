ponto = function(x, y, r, v) {
  this.pos = createVector(x, y);
  this.r = r;
  this.dis = 0;
  this.col = 0;
  this.v = v;

  this.desenha = function() {
    this.dis = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    this.col = map(this.dis, 0, width/2, 100, 200);
    noStroke();
    colorMode(HSB);
    fill(this.col, 255, 255, 0.4);
    ellipse(this.pos.x, this.pos.y, 2 * r, 2 * r);
  }

  this.move = function() {
    this.pos.x += random(-1 * this.v, this.v);
    this.pos.y += random(-1 * this.v, this.v);
    this.pos.x = constrain(this.pos.x, 0 + this.r, width - this.r);
    this.pos.y = constrain(this.pos.y, 0 + this.r, height - this.r);
  }

}
