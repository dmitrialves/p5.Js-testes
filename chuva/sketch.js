var pingos = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1500; i++) {
    pingos[i] = new pingo(random(width), random(-500, -50));
  }
}

function draw() {
  background(0);
  for (var i = pingos.length - 1; i >= 0; i--) {
    pingos[i].update(i);
    if (pingos[i]) {
      pingos[i].show();
    }
  }
}

var pingo = function(x, y) {
  this.pos = createVector(x, y);
  this.z = random(0, 50);
  if (this.z <= 30) {
    this.vel = map(this.z, 0, 30, 2, 3);
    this.tam = map(this.z, 0, 30, 1, 3);
  } else {
    this.vel = map(this.z, 31, 50, 4, 7);
    this.tam = map(this.z, 31, 50, 4, 8);
  }

  this.update = function(i_) {
    this.vel += 0.02;
    var i = i_;
    if (this.pos.y >= height) {
      pingos.splice(i, 1);
      pingos.push(new pingo(random(width), random(-500, -50)));
    } else {
      this.pos.y += this.vel;
    }
  }
  this.show = function() {
    var j = map(this.z, 0, 50, 1, 4);
    strokeWeight(j);
    stroke(0, 50, 230);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.tam);
  }
}
