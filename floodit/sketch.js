var blocos = [];
var tamanho = 20;
var novojogo = false;
var desenha = false;
var posbotao = [];
var raiobotao = 20;
var lado = 10;
var vidas = 25;
var button;
var soma = 0;

function setup() {
  createCanvas(400, 450);
  background(220);
  button = createButton('Novo Jogo');
  button.position(315, 10);
  button.mousePressed(newgame);
}

function newgame() {
  novojogo = true;
  desenha = true;
  vidas = 25;
  soma = 0;
  loop();
}

function draw() {
  if (novojogo) {
    sorteiaquadro(lado);
    pintaquadro(lado);
    desenha = true;
    novojogo = false;
  }
  if (desenha) {
    pintaquadro(lado);
  }
  if (vidas === 0 && soma !== lado * lado) {
    strokeWeight(1);
    textSize(25);
    fill(0);
    textStyle(BOLD);
    text("PERDEDOR", width / 2 - 95, 350);
    desenha = false;
    vidas = 0
    noLoop();
  }
  if (vidas >= 0 && soma == lado * lado) {
    strokeWeight(1);
    textSize(25);
    fill(0);
    textStyle(BOLD);
    text("VENCEDOR", width / 2 - 95, 350);
    desenha = false;
    vidas = 0;
    noLoop();
  }
}

function sorteiaquadro(lado_) {
  blocos.splice(0, blocos.length);
  for (var i = 0; i < lado_; i++) {
    for (var j = 0; j < lado_; j++) {
      blocos.push(new bloco(i, j));
    }
  }
}

function pintaquadro(lado_) {
  var index;
  var cor;
  background(220);

  for (var i = 0; i < lado_; i++) {
    for (var j = 0; j < lado_; j++) {
      index = lado_ * i + j;
      cor = pegacor(blocos[index].cor);
      push();
      translate(j * tamanho, i * tamanho);
      noStroke();
      fill(cor);
      rect(tamanho, tamanho, tamanho, tamanho);
      //fill(0);
      //textAlign(CENTER, CENTER);
      //text(blocos[index].isflooded, 3 / 2 * tamanho, 3 / 2 * tamanho);
      //text(blocos[index].cor, 3 / 2 * tamanho, 3 / 2 * tamanho);
      //text(index, 3 / 2 * tamanho, 3 / 2 * tamanho);
      pop();
    }
  }
  strokeWeight(0);
  textSize(15);
  fill(0);
  textStyle(BOLD);
  text("MOVES", 330, 50)
  textStyle(NORMAL);
  text(vidas, 350, 70)
  desenhabotoes(6);
}

function desenhabotoes(numbotoes) {
  var d = 0;
  var corbotao;

  for (var i = 0; i < numbotoes; i++) {
    corbotao = pegacor(i);
    stroke(0);
    strokeWeight(2);
    fill(corbotao);
    posbotao[i] = 2 * raiobotao + d;
    ellipse(posbotao[i], 400, 2 * raiobotao, 2 * raiobotao);
    strokeWeight(1);
    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text(i + 1, posbotao[i], 400);
    d = d + 50;
  }
}

function pegacor(cor_) {
  var c;

  switch (cor_) {
    case 0:
      c = color(255, 0, 0);
      break;
    case 1:
      c = color(0, 255, 0);
      break;
    case 2:
      c = color(0, 0, 255);
      break;
    case 3:
      c = color(255, 255, 0);
      break;
    case 4:
      c = color(255, 0, 255);
      break;
    case 5:
      c = color(0, 255, 255);
      break;
    default:
      c = color(0, 0, 0);
      break;
  }
  return c;
}

function keyPressed() {
  if (keyCode === 78) { //N - novo bloco aleatorio
    novojogo = true;
  }

  if (keyCode === 38) { //CIMA - aumenta bloco
    if (lado == 14) {
      lado = 14;
    } else {
      lado += 1;
      novojogo = true;
    }
  }

  if (keyCode === 40) { //BAIXO - diminui bloco
    if (lado == 2) {
      lado = 2;
    } else {
      lado -= 1;
      novojogo = true;
    }
  }

  if (keyCode === 49) { //1
    if (blocos[0].cor !== 0) {
      floodit(0, blocos[0].cor, 0);
      vidas--;
      somatotal();
    }
  }

  if (keyCode === 50) { //2
    if (blocos[0].cor !== 1) {
      floodit(0, blocos[0].cor, 1);
      vidas--;
      somatotal();
    }
  }

  if (keyCode === 51) { //3
    if (blocos[0].cor !== 2) {
      floodit(0, blocos[0].cor, 2);
      vidas--;
      somatotal();
    }
  }

  if (keyCode === 52) { //4
    if (blocos[0].cor !== 3) {
      floodit(0, blocos[0].cor, 3);
      vidas--;
      somatotal();
    }
  }

  if (keyCode === 53) { //5
    if (blocos[0].cor !== 4) {
      floodit(0, blocos[0].cor, 4);
      vidas--;
      somatotal();
    }
  }

  if (keyCode === 54) { //6
    if (blocos[0].cor !== 5) {
      floodit(0, blocos[0].cor, 5);
      vidas--;
      somatotal();
    }
  }
  return false;
}

function mouseClicked() {
  var x = mouseX;
  var y = mouseY;
  var numbotao;
  var d = 0;

  for (numbotao = 0; numbotao < 6; numbotao++) {
    d = dist(x, y, posbotao[numbotao], 400);
    if (d < raiobotao && blocos[0].cor != numbotao) {
      floodit(0, blocos[0].cor, numbotao);
      vidas--;
      somatotal();
      break;
    }
  }
}

function floodit(i, coratual, novacor) {
  var pos = i;
  if (blocos[i].x < 0 || blocos[i].x >= (lado) || blocos[i].y < 0 || blocos[i].y >= (lado) || blocos[i].cor == novacor) {
    if (blocos[i].cor == novacor) blocos[i].isflooded = 1;
    return;
  }

  if (blocos[i].cor != coratual) {
    return;
  }

  blocos[i].cor = novacor;
  blocos[i].isflooded = 1;

  if (blocos[i].x !== 0) floodit(i - 1, coratual, novacor); // primeira coluna
  if (blocos[i].y !== 0) floodit(i - lado, coratual, novacor); // primeira linha
  if (blocos[i].x != lado - 1) floodit(i + 1, coratual, novacor); // ultima coluna
  if (blocos[i].y != lado - 1) floodit(i + lado, coratual, novacor); // ultima linha
}

function somatotal() {
  soma = 0;
  for (var i = 0; i < blocos.length; i++) {
    soma = soma + blocos[i].isflooded;
  }
}

var bloco = function(linha_, coluna_) {
  this.x = coluna_;
  this.y = linha_;
  this.cor = round(random(0, 5));
  this.isflooded = 0;
}
