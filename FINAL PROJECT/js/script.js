

"use strict";
let stonegif;
let stoneimg;
let talkingif;
let stoneX = -100;
let stoneState = "walking";
let standTimer = 60;
let talkTimer = 180;
let gamestate = "menu";
let brightness = 255;

async function setup() {
    createCanvas(600, 400);
    noSmooth();
    stonegif = await loadImage("assets/stonegif.gif");
    stoneimg = await loadImage("assets/stoneimg.png");
    talkingif = await loadImage("assets/talkingif.gif");
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

    if (stoneState === "walking") {
        stoneX = stoneX + 5;
        image(stonegif, stoneX, 250, 200, 200);
        if (stoneX >= 300) {
            stoneState = "standing";
        }
    }
    else if (stoneState === "standing") {
        image(stoneimg, 300, 250, 200, 200);
        standTimer = standTimer - 1;
        if (standTimer <= 0) {
            stoneState = "talking";
        }
    }
    else if (stoneState === "talking") {
        image(talkingif, 300, 250, 200, 200);
        talkTimer = talkTimer - 1;
        if (talkTimer <= 0) {
            stoneState = "done";
        }
    }
    else if (stoneState === "done") {
        image(stoneimg, 300, 250, 200, 200);
    }
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