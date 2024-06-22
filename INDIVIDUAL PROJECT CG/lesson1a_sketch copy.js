let vertex1 = 50;
let direction = 0.5;
let lastChangeTime = 0; // Variable to track the last change time
let state = "increasing"; // State of the vertex movement
let translateX = 1;

let rotateXSlider, rotateYSlider, rotateZSlider;
function setup() {
  createCanvas(1280, 720, WEBGL); // WEBGL to render the graphic
  noFill();
  angleMode(DEGREES);
  // Create sliders for rotation around X, Y, and Z axes
  rotateXSlider = createSlider(0, 360, 0, 0.01);
  rotateYSlider = createSlider(0, 360, 0, 0.01);
  rotateZSlider = createSlider(0, 360, 0, 0.01);

  // Position the sliders
  rotateXSlider.position(10, height + 10);
  rotateYSlider.position(10, height + 40);
  rotateZSlider.position(10, height + 70);
}

function draw() {
  background(50);
  // rotateY(135);
  // Rotate the entire scene
  //rotateY(frameCount * 0.01);
  //rotateX(frameCount * 0.5);
  let c = color(255);
  stroke(c);

  // strokeWeight(4);

  let pyramidVertices = [
    [-50, 50, 50], // Top vertex of the pyramid
    [50, vertex1 - 100, 50], // Bottom-left vertex of the pyramid
    [50, 50, 50], // Bottom-right vertex of the pyramid

    [-50, 50, 50], // Top vertex of the pyramid
    [50, vertex1 - 100, 50], // Bottom-left vertex of the pyramid
    [50, 50, -50], // Bottom-right vertex of the pyramid

    [-50, 50, 50], // Top vertex of the pyramid
    [50, 50, 50], // Bottom-left vertex of the pyramid
    [50, 50, -50], // Bottom-right vertex of the pyramid
  ];

  // translate(-width / 3, -height / 3, 0);

  // if (vertex1 >= 100 || vertex1 <= 10) {
  //   direction *= -0.5; //
  // }
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

  push();
  rotateX(180); //
  rotateY(135); //
  translate(-50, -100, -50);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  }
  endShape(CLOSE);
  pop();

  push();
  rotateX(180); //
  rotateY(135); //
  translate(-50, -100, -50);
  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 3; i < 6; i++) {
    vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 6; i < 9; i++) {
    vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  }
  endShape(CLOSE);
  pop();

  // push();
  // translate(0, 0, 400);
  // rotateX(219); //
  // rotateY(315); //

  // beginShape();
  // for (let i = 0; i < 3; i++) {
  //   vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  // }
  // endShape(CLOSE);

  // beginShape();
  // for (let i = 3; i < 6; i++) {
  //   vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  // }
  // endShape(CLOSE);

  // beginShape();
  // for (let i = 6; i < 9; i++) {
  //   vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  // }
  // endShape(CLOSE);
  // pop();

  // push();

  // translate(0, -250, -100);
  // let angleX = rotateXSlider.value();
  // let angleY = rotateYSlider.value();
  // let angleZ = rotateZSlider.value();
  // rotateX(25); //
  // rotateY(135); //
  // rotateZ(angleZ); //

  // beginShape();
  // for (let i = 0; i < 3; i++) {
  //   vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  // }
  // endShape(CLOSE);

  // beginShape();
  // for (let i = 3; i < 6; i++) {
  //   vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  // }
  // endShape(CLOSE);

  // beginShape();
  // for (let i = 6; i < 9; i++) {
  //   vertex(pyramidVertices[i][0], pyramidVertices[i][1], pyramidVertices[i][2]);
  // }
  // endShape(CLOSE);
  // pop();

  orbitControl();
}

// }
//the Piramid creation 1st
// let pyramidVertices = [
//   [0, 100, 100], // Top vertex of the pyramid
//   [100, vertex1 - 100, 100], // Bottom-left vertex of the pyramid
//   [100, 100, 100], // Bottom-right vertex of the pyramid

//   [0, 100, 100], // Top vertex of the pyramid
//   [100, vertex1 - 100, 100], // Bottom-left vertex of the pyramid
//   [100, 100, 0], // Bottom-right vertex of the pyramid

//   [0, 100, 100], // Top vertex of the pyramid
//   [100, 100, 100], // Bottom-left vertex of the pyramid
//   [100, 100, 0], // Bottom-right vertex of the pyramid
// ];

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
