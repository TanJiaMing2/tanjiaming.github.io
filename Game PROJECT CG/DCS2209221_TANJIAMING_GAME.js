var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Events = Matter.Events;

let engine;
let world;
let basket;
let ground;
let eggs = [];
let score = 0;
let lives = 4;
let enemylives = 10;
let eggInterval = 1000; //sets the egg spawn speed
let basketWidth = 100; // baskets/platform size
let GameOver = false;
let GameState = "menu"; // Initialize game state to "menu"
let diff = 1; //difficulty level
let eggIntervalID; // a value to prevent 2 egg spawning

function setup() {
  createCanvas(1280, 720);

  engine = Engine.create();
  world = engine.world;

  // create basket or a platform
  basket = Bodies.rectangle(width / 2, height - 50, basketWidth, 20, {
    isStatic: true,
  });
  World.add(world, basket);

  // add ground to hold objects
  ground = Bodies.rectangle(width / 2, height, width, 20, { isStatic: true });
  World.add(world, ground);
}
function draw() {
  background(51);
  if (GameState === "menu") {
    drawMenu();
  } else if (GameState === "playing") {
    Engine.update(engine);
    drawGame();
  } else if (GameState === "GameOver") {
    drawGameOver();
  } else if (GameState === "Victory") {
    drawVictory();
  }
}

function drawMenu() {
  push();
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("Eggomania", width / 2, height / 2 - 100);
  text("Press Key 1 , 2 , 3 to Change Difficulty", width / 2, height / 2);
  text("Current Difficulty: " + diff, width / 2, height / 2 + 100);
  text(
    "Left Click to consume a score point to shoot",
    width / 2,
    height / 2 + 200
  );

  // Draw start button
  fill(0, 200, 0);
  rectMode(CENTER);
  rect(width / 2, 695, 1279, 50);
  fill(255);
  textSize(24);
  text("Start Game", width / 2, 695);
  pop();
}

function drawGame() {
  if (GameOver) {
    GameState = "GameOver";
    return;
  }

  // Draw basket
  fill(127);
  rectMode(CENTER);
  rect(basket.position.x, basket.position.y, basketWidth, 20);

  // Update basket position
  Body.setPosition(basket, { x: mouseX, y: height - 50 });

  // Draw eggs
  fill(255, 204, 0);
  for (let egg of eggs) {
    ellipse(egg.position.x, egg.position.y, 20, 30);
  }
  // Draw score and lives
  fill(255);
  textSize(24);
  text("Score: " + score, 10, 30);
  text("Lives: " + lives, 10, 60);
  text("Enemy Lives: " + enemylives, 10, 90);

  // Check for caught eggs
  checkForCaughtEggs();
}

function createEgg() {
  let x = random(20, width - 20);
  let egg = Bodies.circle(x, 0, 10);
  World.add(world, egg);
  eggs.push(egg);
}

function checkForCaughtEggs() {
  for (let i = eggs.length - 1; i >= 0; i--) {
    if (
      eggs[i].position.y > height - 70 &&
      abs(eggs[i].position.x - basket.position.x) < basketWidth / 2
    ) {
      // if egg land on platform
      World.remove(world, eggs[i]);
      eggs.splice(i, 1);
      score++;
    }
    //if eggs reach the bottom
    else if (eggs[i].position.y > height - 20) {
      World.remove(world, eggs[i]);
      eggs.splice(i, 1);
      // lose lives
      lives--;
      //sets the GameOver value to true when live reaches 0
      if (lives <= 0) {
        GameOver = true;
        clearInterval(eggIntervalId);
      }
    } else if (eggs[i].position.y <= height - 800) {
      World.remove(world, eggs[i]);
      eggs.splice(i, 1);
      enemylives--; // lose lives
      //sets the GameState value to "Victory" when live reaches 0
      if (enemylives <= 0) {
        GameState = "Victory";
        clearInterval(eggIntervalId);
      }
    }
  }
}

function shootEgg() {
  if (score > 0) {
    //lose score to shoot egg
    score--;
    let egg = Bodies.circle(basket.position.x, basket.position.y - 30, 10, {});
    // shoot the egg upwards
    Body.setVelocity(egg, { x: 0, y: -50 });
    World.add(world, egg);
    eggs.push(egg);
  }
}

function drawGameOver() {
  fill(255, 0, 0);
  textSize(48);
  // push pop to prevent overwriting other text
  push();
  textAlign(CENTER, CENTER);
  text("Game Over. Tap to reset", width / 2, height / 2);
  pop();
}

function drawVictory() {
  fill(0, 255, 0);
  textSize(48);
  // push pop to prevent overwriting other text
  push();
  textAlign(CENTER, CENTER);
  text("Victory. Tap to reset", width / 2, height / 2);
  pop();
}

function mousePressed() {
  //checks the GameState value when pressing a mouse button
  if (GameState === "menu") {
    if (mouseY >= 690) {
      // Start the game
      eggs = [];
      eggIntervalId = setInterval(createEgg, eggInterval);
      GameState = "playing";
    }
  }
  if (GameState === "playing") {
    // use the shoot egg function
    shootEgg();
  }

  if (GameState === "GameOver") {
    // resets score,lives and eggs
    score = 0;
    lives = 4;
    enemylives = 10;
    GameOver = false;
    World.remove(world, eggs);
    eggs = [];
    GameState = "menu";
  }

  if (GameState === "Victory") {
    // resets score,lives and eggs
    score = 0;
    lives = 4;
    enemylives = 10;
    World.remove(world, eggs);
    eggs = [];
    GameState = "menu";
  }
}

function keyPressed() {
  //set diff and egg spawning speed
  if (GameState === "menu") {
    if (key === "1") {
      diff = 1;
      eggInterval = 1000;
    } else if (key === "2") {
      diff = 2;
      eggInterval = 700;
    } else if (key === "3") {
      diff = 3;
      eggInterval = 400;
    }
  }
}
