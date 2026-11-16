

"use strict";

let gamestate = "menu";
let brightness = 255;

function setup() {
    createCanvas(600, 400);
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