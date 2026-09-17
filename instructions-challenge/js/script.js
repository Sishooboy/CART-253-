
"use strict";

function setup() {
    createCanvas(400, 400);


}

function draw() {
    background(173, 216, 230);
    noStroke();
    drawlandscape();
    Sun();
    tree();
}


function drawlandscape(){
    push();
    fill(240,130,20);
    square(200,350,400);
    pop();
}

function Sun(){
    push();
    fill(255, 255, 0);
    ellipse(300, 100, 50, 50);
    pop();
}

function tree(){

    push();
    fill(0, 200, 0);
    circle(300, 300, 30);
    pop();

    push();
    fill(0, 200, 0);
    circle(330, 280, 40);
    pop();

    push();
    fill(0, 190, 0);
    circle(300, 250, 60);
    pop();

    push();
    fill(0, 230, 0);
    circle(280, 270, 20);
    pop();

    push();
    // fill("brown");
    fill(240,130,20);
    rect(300,270,20,100);
    pop();
    
}