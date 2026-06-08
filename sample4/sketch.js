function setup() {
  saveGif('abstract_animation', 3);
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
}


function draw() {
  background(0, 0, 94); 

  let t = frameCount * 0.02;

  // 1) 빨간 타원 — 좌우 이동 + 색상 변화
  let h1 = (frameCount * 0.5) % 360;
  let x1 = 250 + sin(t) * 40;
  fill(h1, 70, 100, 60);
  noStroke();
  ellipse(x1, 180, 250, 250);

  // 2) 파란 타원 — 상하 이동 + 색상 변화
  let h2 = (frameCount * 0.5 + 120) % 360;
  let y2 = 180 + cos(t) * 30;
  fill(h2, 70, 100, 60);
  ellipse(350, y2, 250, 250);

  // 3) 초록 사각형 — 크기 변화
  let rw = 200 + sin(t * 1.5) * 40;
  let rh = 120 + cos(t * 1.5) * 30;
  let h3 = (frameCount * 0.5 + 240) % 360;
  fill(h3, 60, 100, 60);
  rect(300 - rw / 2, 200, rw, rh);

  // 4) 노란 삼각형 — 색상 변화
  let h4 = (frameCount * 0.8) % 360;
  fill(h4, 80, 100, 60);
  triangle(300, 80, 500, 320, 100, 320);

  // 5) 원 — 크기 진동
  noFill();
  let circleSize = 300 + sin(t * 2) * 40;
  stroke(180, 80, 80);
  strokeWeight(3);
  circle(300, 200, circleSize);

  // 6) 사선 — 색상 변화
  let h6 = (frameCount * 1.2) % 360;
  stroke(h6, 70, 50);
  strokeWeight(2);
  line(0, 350, 600, 50);

  // 7) 중심점
  stroke(0, 0, 0);
  strokeWeight(8);
  point(300, 200);

  // 8) 왼쪽 작은 타원 — 상하 이동
  let ey = 50 + sin(t * 1.3 + 1) * 20;
  noStroke();
  fill(300, 60, 100, 60);
  ellipse(50, ey, 40, 80);

  // 9) 오른쪽 위 사각형 — 크기 변화
  let bw = 40 + cos(t * 0.9) * 15;
  fill(200, 70, 100, 60);
  rect(520, 30, bw, 60);

  // 10) 왼쪽 하단 삼각형 — 위아래 이동
  let ty = sin(t * 0.7) * 15;
  fill(10, 60, 100, 60);
  triangle(20, 350 + ty, 150, 380 + ty, 40, 290 + ty);

  // 11) 오른쪽 하단 원 — 크기 진동
  let es = 90 + sin(t * 1.1 + 2) * 25;
  fill(140, 60, 100, 60);
  ellipse(550, 350, es, es);

  // 12) 보라 사선 — 색상 변화
  let h12 = (frameCount * 0.6 + 60) % 360;
  stroke(h12, 80, 70);
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