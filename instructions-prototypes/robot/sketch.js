
// Robot prototype
"use strict";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(128);
    body();
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
        noStroke();
        fill(255, 245, 120);

        ellipse(100, 200, 50, 50);

        pop();
    }

    function rightEye() {
        push();

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
    fill(255);
    rectMode(CENTER);
    noStroke();
    rect(200, 230, 100, 50, 20);
    pop();
}

function body() {
    function base() {
        push();
        fill(190);
        rectMode(CENTER);
        noStroke();
        rect(200, 300, 150, 200);
        pop();
    }
    function shoulders() {
        push();
        fill(100);
        rectMode(CENTER);
        noStroke();
        rect(200, 330, 205, 50, 10);
        pop();
    }

    function Arms() {
        push();
        fill(190);
        rectMode(CENTER);
        noStroke();
        rect(200, 330, 370, 20, 5);
        pop();
        push();
        fill(190);
        rectMode(CENTER);
        noStroke();
        rect(200, 50, 370, 20, 5);
        pop();
        push();
        fill(128);
        rectMode(CENTER);
        noStroke();
        rect(200, 50, 200, 100, 5);
        pop();


        function leftArm() {
            push();
            fill(190);
            rectMode(CENTER);
            noStroke();
            rect(15, 190, 20, 300, 5);
            pop();
        }

        function rightArm() {
            push();
            fill(190);
            rectMode(CENTER);
            noStroke();
            rect(385, 190, 20, 300, 5);
            pop();
        }

        function rightHand() {
            push();
            fill(90);
            noStroke();
            circle(100, 50, 80);
            fill(128);
            circle(100, 50, 40);
            pop();
        }

        function leftHand() {
            push();
            fill(90);
            noStroke();
            circle(300, 50, 80);
            fill(128);
            circle(300, 50, 40);
            pop();
        }

        leftArm();
        rightArm();
        rightHand();
        leftHand();

        push();
        fill(128);
        noStroke();
        rectMode(CENTER);
        rect(200, 50, 200, 20, 5);
        pop();
    }
    Arms();
    shoulders();
    base();

}
