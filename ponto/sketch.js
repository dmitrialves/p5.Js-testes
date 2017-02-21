var pontos = [];
var numpontos = 700;
var raio = 3;
var velocidade = 5;

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
