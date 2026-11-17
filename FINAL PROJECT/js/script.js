

"use strict";
let stone = {
    x: -100,
    y: 250,
    size: 200,
    speed: 5,
    targetX: 300,
    state: "walking",
    standTimer: 60,
    talkTimer: 180,
    walkImg: undefined,
    standImg: undefined,
    talkImg: undefined
};

let gamestate = "menu";
let brightness = 255;

async function setup() {
    createCanvas(600, 400);
    noSmooth();
    stone.walkImg = await loadImage("assets/stonegif.gif");
    stone.standImg = await loadImage("assets/stoneimg.png");
    stone.talkImg = await loadImage("assets/talkingif.gif");
}

function draw() {
    background(20, 10, 120);

    if (gamestate === "menu") {
        drawMenu();
    }
    if (gamestate === "game") {
        drawGame();
    }

    if (random() < 0.05) { brightness = random(60, 150); }
    else { brightness = 255; }


}
function drawMenu() {
    drawButton(300, 200, 200, 50, "Start Game");
}
function drawGame() {
    background(20, 10, 120);
    imageMode(CENTER);

    updateStone();
    drawStone();
}

function updateStone() {
    if (stone.state === "walking") {
        stone.x = stone.x + stone.speed;
        if (stone.x >= stone.targetX) {
            stone.x = stone.targetX;
            stone.state = "standing";
        }
    }
    else if (stone.state === "standing") {
        stone.standTimer = stone.standTimer - 1;
        if (stone.standTimer <= 0) {
            stone.state = "talking";
        }
    }
    else if (stone.state === "talking") {
        stone.talkTimer = stone.talkTimer - 1;
        if (stone.talkTimer <= 0) {
            stone.state = "done";
        }
    }
}

function drawStone() {
    let img = stone.standImg;
    if (stone.state === "walking") {
        img = stone.walkImg;
    }
    else if (stone.state === "talking") {
        img = stone.talkImg;
    }
    image(img, stone.x, stone.y, stone.size, stone.size);
}

function drawButton(x, y, w, h, label) {
    rectMode(CENTER);
    noFill();
    stroke(0, 200, 255, brightness * 0.15);
    strokeWeight(16);
    rect(x, y, w, h, 5);
    stroke(0, 200, 255, brightness * 0.3);
    strokeWeight(9);
    rect(x, y, w, h, 5);
    stroke(0, 200, 255, brightness);
    strokeWeight(3);
    rect(x, y, w, h, 5);
    noStroke();
    fill(0, 200, 255, brightness);
    textAlign(CENTER, CENTER);
    text(label, x, y);
}

function mousePressed() {
    if (mouseX > 200 && mouseX < 400 && mouseY > 175 && mouseY < 225) {
        gamestate = "game";
    }
}