function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();
}

function draw() {
  background(0, 0, 94);

  // 1) 분홍 타원
  fill(0, 70, 100, 60);
  noStroke();
  ellipse(275, 180, 250, 250);

  // 2) 파란 타원
  fill(240, 70, 100, 60);
  ellipse(350, 195, 250, 250);

  // 3) 사각형
  fill(75, 60, 100, 60);
  rect(185, 200, 230, 130);

  // 4) 삼각형
  fill(25, 80, 100, 60);
  triangle(300, 80, 500, 320, 100, 320);

  // 5) 원
  noFill();
  stroke(180, 80, 80);
  strokeWeight(3);
  circle(300, 200, 330);

  // 6) 사선
  stroke(0, 70, 50);
  strokeWeight(2);
  line(0, 350, 600, 50);

  // 7) 중심점
  stroke(0, 0, 0);
  strokeWeight(8);
  point(300, 200);

  // 8) 왼쪽 작은 타원
  noStroke();
  fill(300, 60, 100, 60);
  ellipse(50, 68, 40, 80);

  // 9) 오른쪽 위 사각형
  fill(200, 70, 100, 60);
  rect(520, 30, 50, 60);

  // 10) 왼쪽 하단 삼각형
  fill(10, 60, 100, 60);
  triangle(20, 355, 150, 385, 40, 295);

  // 11) 오른쪽 하단 원
  fill(140, 60, 100, 60);
  ellipse(550, 350, 110, 110);

  // 12) 보라 사선
  stroke(270, 80, 70);
  strokeWeight(3);
  line(0, 300, 600, 0);
  stroke(350, 80, 80);
  strokeWeight(3);
  line(800, 0, 0, 400);

  // 13) 아크들
  noFill();
  stroke(30, 90, 80);
  strokeWeight(4);
  arc(300, 200, 200, 200, radians(90), radians(360));
  stroke(80, 90, 80);
  strokeWeight(4);
  arc(300, 200, 100, 100, radians(180), radians(90));
}
