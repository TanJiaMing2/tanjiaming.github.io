let vertex1 = 50;
let direction = 0.5;
let lastChangeTime = 0;
let state = "increasing";
let translateX = 100;
// let rotateXSlider, rotateYSlider, rotateZSlider;
let img;
let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "magenta",
  "cyan",
  "orange",
  "purple",
];
// Load the image.
function preload() {
  img = loadImage("ciclogohigh.png");
}
function setup() {
  createCanvas(1280, 720, WEBGL);
  noFill(); // see through shape/ make shape color transparent
  angleMode(DEGREES);
}

function draw() {
  background(50);
  strokeWeight(4);

  let triangle3d = [
    //side
    [-50, 50, 50],
    [50, vertex1 - 100, 50],
    [50, 50, 50],
    // side
    [-50, 50, 50],
    [50, vertex1 - 100, 50],
    [50, 50, -50],
    // bottom
    [-50, 50, 50],
    [50, 50, 50],
    [50, 50, -50],
  ];
  // Rotate Screen / Shape / Obj
  //rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.5);
  // push();
  if (vertex1 >= 200 || vertex1 <= -50) {
    direction *= -0.5; //
  }
  if (millis() - lastChangeTime > 3000) {
    // Check if 1 second has passed
    if (state === "increasing") {
      state = "pauseAfterIncrease";
    } else if (state === "pauseAfterIncrease") {
      state = "decreasing";
    } else if (state === "decreasing") {
      state = "pauseAfterDecrease";
    } else if (state === "pauseAfterDecrease") {
      state = "increasing";
    }
    lastChangeTime = millis(); // Reset the timer
  }

  // Update vertex1 based on the current state
  if (state === "increasing") {
    vertex1 += direction;
    translateX -= direction / 2;
    if (vertex1 >= 200) {
      direction = -0.5; // change value
      state = "pauseAfterIncrease"; // next state
      lastChangeTime = millis(); // Reset the timer immediately after the change
    }
  } else if (state === "decreasing") {
    vertex1 -= direction;
    translateX += direction / 2;
    if (vertex1 <= -50) {
      direction = 0.5; // change value
      state = "pauseAfterDecrease"; // next state
      lastChangeTime = millis(); // reset timer
    }
  }

  push();
  rotateX(-90);
  image(img, -50, -100, 100, 100);
  pop();

  //Below / Bottom back
  push();
  stroke(colors[0]);
  rotateX(180); //
  rotateY(135); //
  translate(-50, -translateX, -50);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  //bot left
  push();
  stroke(colors[1]);
  rotateX(180); //
  rotateY(45); //
  translate(-50, -translateX, -150);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  //bot front
  push();
  stroke(colors[2]);
  rotateX(180); //
  rotateY(315); //
  translate(-150, -translateX, -150);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  //bot right
  push();
  stroke(colors[3]);
  rotateX(180); //
  rotateY(230); //
  translate(-150, -translateX, -50);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  //Above / Top back
  push();

  stroke(colors[4]);
  rotateY(315); //
  translate(-50, -translateX, -50);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  // top left
  push();
  stroke(colors[5]);
  rotateY(45); //
  translate(-150, -translateX, -50);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  //top front
  push();
  stroke(colors[6]);
  rotateY(135);
  translate(-150, -translateX, -150);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  //top right
  push();
  stroke(colors[7]);
  rotateY(220);
  translate(-50, -translateX, -150);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(triangle3d[i][0], triangle3d[i][1], triangle3d[i][2]);
  }
  endShape(CLOSE);
  pop();

  orbitControl();
}

//Testing template
// let angleX = rotateXSlider.value();
// let angleY = rotateYSlider.value();
// let angleZ = rotateZSlider.value();
// rotateX(angleX); //
// rotateY(angleY); //
// rotateZ(angleZ); //

// if (millis() - lastChangeTime > 2000) {
//   // Check if 1 second has passed
//   if (state === "increasing") {
//     state = "pauseAfterIncrease";
//   } else if (state === "pauseAfterIncrease") {
//     state = "decreasing";
//   } else if (state === "decreasing") {
//     state = "pauseAfterDecrease";
//   } else if (state === "pauseAfterDecrease") {
//     state = "increasing";
//   }
//   lastChangeTime = millis(); // Reset the timer
// }

// // Update vertex1 based on the current state
// if (state === "increasing") {
//   vertex1 += direction;
//   if (vertex1 >= 150) {
//     direction = -0.5; // Reverse direction to decrease
//     state = "pauseAfterIncrease"; // Transition to pause state
//     lastChangeTime = millis(); // Reset the timer immediately after the change
//   }
// } else if (state === "decreasing") {
//   vertex1 -= direction;
//   if (vertex1 <= -50) {
//     direction = 0.5; // Reverse direction to increase
//     state = "pauseAfterDecrease"; // Transition to pause state
//     lastChangeTime = millis(); // Reset the timer immediately after the change
//   }
// }

//SETUP AND testing
// // Create sliders for rotation around X, Y, and Z axes
// rotateXSlider = createSlider(0, 360, 0, 0.01);
// rotateYSlider = createSlider(0, 360, 0, 0.01);
// rotateZSlider = createSlider(0, 360, 0, 0.01);

// // Position the sliders
// rotateXSlider.position(10, height + 10);
// rotateYSlider.position(10, height + 40);
// rotateZSlider.position(10, height + 70);
