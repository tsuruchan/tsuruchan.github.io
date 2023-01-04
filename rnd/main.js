let r = 0;
let heightWithoutBar = 0;
const allArc = 300;
let lengthArc = allArc;
let size = 0;
let barWeight = 0
let rand = Math.floor(Math.random()*100);
let lastTouched = 0;

function setup() {
  if (windowHeight > windowWidth) {
      barWeight = windowWidth*0.08;
      heightWithoutBar = windowHeight - barWeight;
      r = windowWidth*0.87;
  } else {
      barWeight = windowHeight*0.06;
      heightWithoutBar = windowHeight - barWeight;
      r = heightWithoutBar*0.87;
  }
  size = r*0.4;

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  lengthArc--;
  if (lengthArc == 0) {
    reset();
  }

  // 画面リセット
  noStroke();
  fill(30);
  rect(0, 0, windowWidth, windowHeight);

  fill("#5ab966");
  textSize(size);
  textAlign(CENTER, CENTER);
  text(rand, windowWidth*0.5, heightWithoutBar*0.5);

 }

function touchStarted() {
  // 普通のタップで touchStarted() はなぜか2回発火してしまうので、調整。
  if (millis()-lastTouched > 300) {
    lastTouched = millis();
    reset();
  }
}

// 乱数と周囲の輪をリセット
function reset() {
  lengthArc = allArc;
  rand = Math.floor(Math.random()*100);
}
