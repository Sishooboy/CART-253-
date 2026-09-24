
"use strict";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(128);
    head();
    eyes();
    mouth();
}

function head() {
    push();
    fill(190);
    rectMode(CENTER);
    stroke(200);
    strokeWeight(10);
    rect(200, 200, 300, 170, 20);
    pop();
}

function eyes() {
    function leftEye() {
        push();
        fill(190);
        stroke(128);
        strokeWeight(5);

        ellipse(100, 200, 70, 70);
        noStroke();
        fill(255, 245, 120);

        ellipse(100, 200, 50, 50);

        pop();
    }

    function rightEye() {
        push();
        fill(190);
        stroke(128);
        strokeWeight(5);
        ellipse(300, 200, 70, 70);
        noStroke();
        fill(255, 245, 120);

        ellipse(300, 200, 50, 50);
        pop();
    }
    leftEye();
    rightEye();
}

function mouth() {
    push();
    fill(190);
    stroke(128);
    strokeWeight(5);
    ellipse(200, 250, 100, 50);
    pop();
}