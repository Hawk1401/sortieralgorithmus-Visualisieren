let zahlenMenge = [];
const menge = 50;
let breite;
let i = 0;
let j;
let sotirte = menge - 1;
let sotirt = false;


function setup() {
  createCanvas(400, 400);
  frameRate(25);
  breite = width / menge;
  for (let k = 0; k < menge; k++) {
    zahlenMenge.push((Math.random() * (350 - 50)) + 50);
  }
}

function draw() {
  if (i == sotirte) {
    i = 1;
    j = 0;
    --sotirte;
  } else {
    i++;
    j = i - 1;
  }
  zeichne();
  if (zahlenMenge[i] < zahlenMenge[j]) {
    let hold = zahlenMenge[i];
    zahlenMenge[i] = zahlenMenge[j];
    zahlenMenge[j] = hold;
  }
  reset();
  fill(220);
}

function reset() {
  fill(000);
  noStroke();
  rect(i * breite, 0, breite, 400);
  rect(j * breite, 0, breite, 400);
  fill("#ff0000");
  stroke(000);
  rect(i * breite, 400 - zahlenMenge[i], breite, zahlenMenge[i]);
  fill("#fff");
  rect(j * breite, 400 - zahlenMenge[j], breite, zahlenMenge[j]);
}

function zeichne() {
  background(000);
  fill("#fff");
  stroke(000);
  for (let k = 0; k < menge; k++) {
    rect(k * breite, 400 - zahlenMenge[k], breite, zahlenMenge[k]);
  }
}