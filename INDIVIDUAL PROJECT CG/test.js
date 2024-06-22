let vertex1 = 50;
let direction = 0.5;
let lastChangeTime = 0;
let state = "increasing";
let translateX = 100;
let img;

function preload() {
  img = loadImage("ciclogohigh.png");
}

function setup() {
  createCanvas(1280, 720, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(50);

  // Rotate the entire scene
  rotateX(frameCount * 0.5);

  // Logic for changing vertex1 and translateX
  if (vertex1 >= 200 || vertex1 <= -50) {
    direction *= -0.5;
  }
  if (millis() - lastChangeTime > 3000) {
    if (state === "increasing") {
      state = "pauseAfterIncrease";
    } else if (state === "pauseAfterIncrease") {
      state = "decreasing";
    } else if (state === "decreasing") {
      state = "pauseAfterDecrease";
    } else if (state === "pauseAfterDecrease") {
      state = "increasing";
    }
    lastChangeTime = millis();
  }

  if (state === "increasing") {
    vertex1 += direction;
    translateX -= direction / 2;
    if (vertex1 >= 200) {
      direction = -0.5;
      state = "pauseAfterIncrease";
      lastChangeTime = millis();
    }
  } else if (state === "decreasing") {
    vertex1 -= direction;
    translateX += direction / 2;
    if (vertex1 <= -50) {
      direction = 0.5;
      state = "pauseAfterDecrease";
      lastChangeTime = millis();
    }
  }

  // Draw the image at the bottom center
  push();
  rotateX(-90);
  image(img, -50, -100, 100, 100);
  pop();

  // Define the 3D shape coordinates
  let triangle3d = [
    // Bottom back
    [-50, 50, 50],
    [50, vertex1 - 100, 50],
    [50, 50, 50],
    // Bottom side
    [-50, 50, 50],
    [50, vertex1 - 100, 50],
    [50, 50, -50],
    // Bottom front
    [-50, 50, 50],
    [50, 50, 50],
    [50, 50, -50],
  ];

  // Draw each part of the 3D shape with different rotations and translations
  drawShape(-50, -translateX, -50, 315); // Bottom back
  drawShape(-50, -translateX, -150, 45); // Bottom left
  drawShape(-150, -translateX, -150, 135); // Bottom front left
  drawShape(-150, -translateX, -50, 220); // Bottom front right
  drawShape(-50, -translateX, -150, 315); // Top back
  drawShape(-150, -translateX, -50, 45); // Top left
  drawShape(-150, -translateX, -150, 135); // Top front left
  drawShape(-50, -translateX, -50, 230); // Top front right

  orbitControl();
}

function drawShape(x, y, z, rotationY) {
  push();
  rotateY(rotationY);
  translate(x, y, z);
  // Set fill color for each shape
  //fill(255, 0, 0); // Example color (red)
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  //fill(0, 255, 0); // Example color (green)
  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  //fill(0, 0, 255); // Example color (blue)
  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();
}
