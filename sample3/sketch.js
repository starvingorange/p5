let charX = 300;
let charY = 0;
let targetX = 300;
let jumping = false;
let jumpVel = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 230, 240);

  // 마우스 클릭 이동
  let dx = targetX - charX;
  if (abs(dx) > 1) {
    charX += dx * 0.08;
  }

  // 키보드 이동
  if (keyIsDown(LEFT_ARROW)) charX -= 3;
  if (keyIsDown(RIGHT_ARROW)) charX += 3;
  charX = constrain(charX, 50, 550);

  // 점프 물리
  if (jumping) {
    charY += jumpVel;
    jumpVel += 0.6;
    if (charY >= 0) {
      charY = 0;
      jumping = false;
      jumpVel = 0;
    }
  }

  // 눈동자 마우스 추적
  let eyeOffsetX = constrain((mouseX - charX) * 0.04, -3, 3);
  let eyeOffsetY = constrain((mouseY - 200) * 0.03, -2, 2);

  push();
  translate(charX - 300, charY); // 원본 좌표 유지하면서 위치 이동

  fill(40, 150, 100);
  stroke(0);
  strokeWeight(2);
  rect(150, 320, 300, 100, 20);

  fill(255, 220, 177);
  rect(270, 270, 60, 70, 20);

  fill(255, 220, 177);
  ellipse(300, 200, 160, 200);
  fill(255, 220, 177);
  ellipse(220, 200, 25, 40);
  ellipse(380, 200, 25, 40);

  fill(150);
  strokeWeight(2);
  ellipse(220, 215, 10, 10);
  fill(180);
  strokeWeight(2);
  ellipse(380, 215, 10, 10);

  fill(255);
  strokeWeight(1);
  ellipse(265, 180, 30, 15);
  ellipse(335, 180, 30, 15);
  fill(0);
  ellipse(265 + eyeOffsetX, 180 + eyeOffsetY, 10, 10); // 눈동자 마우스 추적
  ellipse(335 + eyeOffsetX, 180 + eyeOffsetY, 10, 10); // 눈동자 마우스 추적

  noFill();
  stroke(50);
  strokeWeight(3);
  rect(245, 165, 40, 30, 20);
  rect(315, 165, 40, 30, 20);
  line(285, 180, 315, 180);
  line(220, 180, 245, 180);
  line(380, 180, 355, 180);

  strokeWeight(1);
  stroke(0);
  fill(240, 200, 150);
  triangle(300, 180, 290, 230, 310, 230);
  fill(255, 100, 100);
  arc(300, 250, 60, 40, 0, PI, CHORD);

  fill(50, 30, 15);
  rect(250, 155, 30, 5);
  rect(320, 155, 30, 5);

  fill(50, 30, 15);
  arc(300, 150, 170, 120, PI, 0, CHORD);
  triangle(215, 150, 225, 200, 235, 150);
  triangle(365, 150, 375, 200, 385, 150);

  pop();
}

function mousePressed() {
  targetX = mouseX;
}
  
  function keyPressed() {
  if (key === ' ' && !jumping) {
    jumping = true;
    jumpVel = -14;
  }
  if (key === 'g' || key === 'G') {
    saveGif('character', 8); 
  }
}