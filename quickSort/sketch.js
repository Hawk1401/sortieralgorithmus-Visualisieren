const menge = 100;
let breite;
let zahlenMenge = [];
let sizeTausch1 = [];
let sizeTausch2 = [];
let indexTausch1 = [];
let indexTausch2 = [];
let sizePivot = [];
let indexPivot = [];
let k = 0;
var pivotText;
var left;
var Right;

function setup() {
  createCanvas(800, 600);
  frameRate(3);
  stroke("#000000");
  breite = width / menge;
  for (let k = 0; k < menge; k++) {
    zahlenMenge.push((Math.random() * (350 - 40)) + 40);
  }
  zeichne("#ffffff");
  quickSort(0, menge - 1);
  setText();
}

function draw() {
  if (k <= indexTausch1.length) {
    let index1 = indexTausch1[k];
    let index2 = indexTausch2[k];
    fill("#000000");
    reset(index1, index2);
    zeichneEinen(index1, sizeTausch1[k], "#ff0000");
    zeichneEinen(index2, sizeTausch2[k], "#00ee00");
    zeichneEinen(indexPivot[k], sizePivot[k], "#ee00ee");
    if (k > 0) {
      index1 = indexTausch1[k - 1];
      index2 = indexTausch2[k - 1];
      reset(index1, index2);
      zeichneEinen(index2, sizeTausch1[k - 1], "#fff");
      zeichneEinen(index1, sizeTausch2[k - 1], "#fff");
      Sotierte(k - 1, index1, index2);
    }
    k++;
  } else {
    zeichne("#0000ff");
    noLoop();
  }
}

function Sotierte(n, index1, index2) {
  fill("#0000ff");
  if (sizeTausch1[n] === zahlenMenge[index2]) {
    rect(indexTausch2[n] * breite, 400 - sizeTausch1[n], breite, sizeTausch1[n]);
  }
  if (sizeTausch2[n] === zahlenMenge[index1]) {
    rect(indexTausch1[n] * breite, 400 - sizeTausch2[n], breite, sizeTausch2[n]);
  }
}

function quickSort(links, rechts) {
  if (links < rechts) {
    teil = teiler(links, rechts);
    quickSort(links, teil - 1);
    quickSort(teil + 1, rechts);
  }
}

function teiler(links, rechts) {
  let i = links;
  let j = rechts - 1;
  let pivot = zahlenMenge[rechts];
  do {
    while (i < rechts && zahlenMenge[i] < pivot) {
      i++;
    }
    while (j > links && zahlenMenge[j] >= pivot) {
      --j;
    }


    if (i < j) {
      posSave(zahlenMenge[i], zahlenMenge[j], pivot)
      indexSave(i, j, rechts)
      let holder = zahlenMenge[i];
      zahlenMenge[i] = zahlenMenge[j];
      zahlenMenge[j] = holder;
    }
  } while (i < j);
  if (zahlenMenge[i] > pivot) {
    indexSave(rechts, i, null);
    let holder = zahlenMenge[i];
    zahlenMenge[i] = pivot
    zahlenMenge[rechts] = holder;
    posSave(zahlenMenge[i], holder, null);
  }
  return i;
}

function posSave(n1, n2, n3) {
  sizeTausch1.push(n1);
  sizeTausch2.push(n2);
  sizePivot.push(n3);
}

function indexSave(n1, n2, n3) {
  indexTausch1.push(n1);
  indexTausch2.push(n2);
  indexPivot.push(n3);

}

function reset(index1, index2) {
  fill("#000000");
  rect(index1 * breite, 0, breite, 400);
  rect(index2 * breite, 0, breite, 400);
}

function zeichneEinen(index, size, f) { //zeichneEinen(ort, höhe, farbe);
  fill(f);
  rect(index * breite, 400 - size, breite, size);
}

function zeichne(f) {
  background("#000000");
  fill(f);
  for (let k = 0; k < menge; k++) {
    rect(k * breite, 400 - zahlenMenge[k], breite, zahlenMenge[k]);
  }
  setText();
}

function setText() {
  textSize(32);
  fill("#00ee00");
  text("Grün", 0, 440)
  fill("#ff0000");
  text("Rot", 0, 480)
  fill("#ee00ee");
  text("Pink", 0, 520)
  fill("#0000ff");
  text("Blau", 0, 560)
  fill("#ffffff")
  text(" = I", 70, 440)
  text(" = J", 70, 480)
  text(" = Pivot", 70, 520)
  text(" = sortierte", 70, 560)
}