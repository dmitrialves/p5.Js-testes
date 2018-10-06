var d;
var intervalo;
var h, m, s, dia;
var cmp_pt = 100;
var raio_rel = 140;

function setup() {
  createCanvas(300, 300);
  intervalo = setInterval(horas, 1000);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  relogio();
  mostrahora(h, m, s);
}

function relogio() {
  var ang;
  stroke(200);
  strokeWeight(8);
  fill(255);
  ellipse(0, 0, 2 * raio_rel, 2 * raio_rel);
  for (var i = 1; i <= 12; i++) {
    ang = i * (360 / 12);
    //textAlign(CENTER, CENTER);
    //textSize(15);
    //noStroke();
    //fill(0);
    //text(i, 0.9 * raio_rel * cos(ang - 90), 0.9 * raio_rel * sin(ang - 90) + 1);
    noStroke();
    fill(0, 0, 0);
    ellipse(0.9 * raio_rel * cos(ang - 90), 0.9 * raio_rel * sin(ang - 90), 10, 10);
  }

  for (var i = 1; i <= 60; i++) {
    ang = i * (360 / 60);
    if (ang % 5 != 0) {
      noStroke();
      fill(255, 0, 0);
      ellipse(0.9 * raio_rel * cos(ang - 90), 0.9 * raio_rel * sin(ang - 90), 3, 3);
    }
  }
}

function horas() {
  d = new Date();
  h = d.getHours();
  if (h > 12) {
    h = h - 12;
  }
  m = d.getMinutes();
  s = d.getSeconds();
  dia = d.getDate();
}

function mostrahora(h, m, s) {
  var angulo;
  angleMode(DEGREES);

  strokeWeight(8);
  stroke(0);
  angulo = (map(m, 0, 60, 0, 360));
  line(0, 0, 0.6 * cmp_pt * cos(h * 30 + angulo / 12 - 90), 0.6 * cmp_pt * sin(h * 30 + angulo / 12 - 90));

  strokeWeight(8);
  stroke(50, 200);
  angulo = (map(s, 0, 60, 0, 360));
  line(0, 0, 0.8 * cmp_pt * cos(m * 6 + angulo / 60 - 90), 0.8 * cmp_pt * sin(m * 6 + angulo / 60 - 90));

  strokeWeight(2)
  stroke(255, 0, 0, 200);
  fill(255, 0, 0, 255);
  angulo = (map(s, 0, 60, 0, 360));
  line(0, 0, cmp_pt * cos(angulo - 90), cmp_pt * sin(angulo - 90));;
}
