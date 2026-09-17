
"use strict";

function setup() {
    createCanvas(640, 640, WEBGL
    );

    noCursor();
}

function draw() {
    background(173, 216, 230);


}


function waves() {

  rotateY(frameCount * 0.01);

  // Draw the triangle.
  triangle(-20, 25, 8, -30, 36, 25);
}


