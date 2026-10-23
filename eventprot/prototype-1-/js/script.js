/**
 * Hungry Bird
 * Charbel Dagher
 *
 * A very hungry bird who wants you to mash the space bar.
 * Every press feeds him and makes him bigger, but if you stop
 * feeding him for a few seconds he starts to shrink again.
 * If you feed him too much he gets too fat to fly and sinks.
 *
 * Uses:
 * - keyPressed() to feed the bird
 * - millis() to know how long it has been since he last ate
 */

"use strict";

// The colour of the sky
let sky = {
    r: 173,
    g: 216,
    b: 230
};

// Everything about the bird
let bird = {
    x: 200,
    y: 200,
    size: 60,
    minSize: 60, // He can't get smaller than this
    maxSize: 220, // He can't get bigger than this
    groundY: 320 // Where he ends up when he is too fat to fly
};

// What the bird is currently saying
let message = "FEED ME (press space)";

// The time (in milliseconds) he was last fed
let lastFed = 0;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Checks on the bird's hunger, then draws him and what he is saying
 */
function draw() {
    background(sky.r, sky.g, sky.b);

    // If nobody has fed him for 3 seconds he starts to shrink
    if (millis() - lastFed > 3000 && bird.size > bird.minSize) {
        bird.size = bird.size - 0.5;
        message = "I'M STARVING...";
    }

    // Too fat to fly, so he sinks to the ground
    if (bird.size >= bird.maxSize) {
        message = "I CAN'T FLY ANYMORE";
        if (bird.y < bird.groundY) {
            bird.y = bird.y + 2;
        }
    }
    // Back in the air once he is light enough
    else if (bird.y > 200) {
        bird.y = bird.y - 2;
    }

    drawBird();

    // The speech
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text(message, 200, 40);
}

/**
 * Draws the bird: a round body, a beak and an eye.
 * Everything is based on bird.size so he grows and shrinks as one piece.
 */
function drawBird() {
    noStroke();

    // Body
    fill(255, 220, 0);
    circle(bird.x, bird.y, bird.size);

    // Beak
    fill(255, 140, 0);
    triangle(
        bird.x + bird.size / 2, bird.y - bird.size / 10,
        bird.x + bird.size / 2 + bird.size * 0.3, bird.y,
        bird.x + bird.size / 2, bird.y + bird.size / 10
    );

    // Eye
    fill(0);
    circle(bird.x + bird.size / 6, bird.y - bird.size / 6, bird.size / 10);
}

/**
 * Space feeds the bird
 */
function keyPressed() {
    // Space feeds the bird, so he gets bigger (but not past his max size)
    if (key === " ") {
        bird.size = min(bird.size + 10, bird.maxSize);
        lastFed = millis();
        message = "NOM NOM NOM";
    }
    // Stops the page from scrolling when space is pressed
    return false;
}
