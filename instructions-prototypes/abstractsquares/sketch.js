// Abstract squares
"use strict";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(128);
    squares();
}
function squares() {

    push();
    fill(0, 0, 100);
    noStroke();
    rectMode(CENTER);
    rect(200, 300, 240, 400);
    pop();

    push();
    fill(200, 0, 0);
    noStroke();
    rectMode(CENTER);
    rect(200, 300, 200, 400);
    pop();

    push();
    fill(200, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 240);
    pop();

    push();
    fill(190, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 220);
    pop();

    push();
    fill(180, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 200);
    pop();

    push();
    fill(170, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 180);
    pop();

    push();
    fill(160, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 160);
    pop();

    push();
    fill(140, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 140);
    pop();

    push();
    fill(120, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 120);
    pop();


    push();
    fill(80, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 90);
    pop();

    push();
    fill(60, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 80);
    pop();

    push();
    fill(40, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 70);
    pop();

    push();
    fill(20, 0, 0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 60);
    pop();

    push();
    fill(0);
    noStroke();
    rectMode(CENTER);
    square(200, 0, 50);
    pop();

    push();
    fill(90, 0, 0);
    stroke(0, 0, 100);
    strokeWeight(3);
    rectMode(CENTER);
    square(200, 150, 50);
    pop();
    push();
    fill(90, 0, 0);
    stroke(0, 0, 100);
    strokeWeight(3);
    rectMode(CENTER);
    square(200, 250, 50);
    pop();

    push();
    fill(90, 0, 0);
    stroke(0, 0, 100);
    strokeWeight(3);
    rectMode(CENTER);
    square(200, 350, 50);
    pop();
}
