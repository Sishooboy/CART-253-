"use strict";
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(20, 10, 120);
    drawButton(300, 200, 200, 50, "Start Game");
}

function drawButton(x, y, w, h, label) {
    stroke(0, 170, 255);
    strokeWeight(2);
    rectMode(CENTER);
    noFill();
    rect(x, y, w, h, 5);
    fill(0, 170, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(label, x, y);
}