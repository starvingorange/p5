function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(220, 230, 240);

  // 상의
  fill(40, 150, 100);
  stroke(0);
  strokeWeight(2);
  rect(150, 320, 300, 100, 20);

  // 목
  fill(255, 220, 177);
  rect(270, 270, 60, 70, 20);

  // 얼굴
  fill(255, 220, 177);
  ellipse(300, 200, 160, 200);

  // 귀
  fill(255, 220, 177);
  ellipse(220, 200, 25, 40);
  ellipse(380, 200, 25, 40);

  // 귀걸이
  fill(150);
  strokeWeight(2);
  ellipse(220, 215, 10, 10);
  fill(180);
  strokeWeight(2);
  ellipse(380, 215, 10, 10);

  // 눈 흰자
  fill(255);
  strokeWeight(1);
  ellipse(265, 180, 30, 15);
  ellipse(335, 180, 30, 15);

  // 눈동자 (고정)
  fill(0);
  ellipse(265, 180, 10, 10);
  ellipse(335, 180, 10, 10);

  // 안경
  noFill();
  stroke(50);
  strokeWeight(3);
  rect(245, 165, 40, 30, 20);
  rect(315, 165, 40, 30, 20);
  line(285, 180, 315, 180);
  line(220, 180, 245, 180);
  line(380, 180, 355, 180);

  // 코
  strokeWeight(1);
  stroke(0);
  fill(240, 200, 150);
  triangle(300, 180, 290, 230, 310, 230);

  // 입
  fill(255, 100, 100);
  arc(300, 250, 60, 40, 0, PI, CHORD);

  // 눈썹
  fill(50, 30, 15);
  rect(250, 155, 30, 5);
  rect(320, 155, 30, 5);

  // 머리카락
  fill(50, 30, 15);
  arc(300, 150, 170, 120, PI, 0, CHORD);
  triangle(215, 150, 225, 200, 235, 150);
  triangle(365, 150, 375, 200, 385, 150);
}
