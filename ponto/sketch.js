var pontos = [];
var numpontos = 500;
var raio = 5;
var velocidade = 10;

function setup() {
  createCanvas(500, 500);
  background(0);
  for (var i = 0; i < numpontos; i++) {
    pontos[i] = new ponto(floor(random(0, width)), floor(random(0, height)), random(2,10), velocidade);
  }
}

function draw() {
  for (var i = 0; i < pontos.length; i++) {
    pontos[i].desenha();
    pontos[i].move();
  }
}
