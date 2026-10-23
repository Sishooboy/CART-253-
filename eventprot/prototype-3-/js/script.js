/**
 * Pick Up the Bird
 * Charbel Dagher
 *
 * A bird that you can pick up and play with, and he does not
 * enjoy it. Drag him around and he flaps frantically, let go
 * and he falls. Scroll to tickle him, double click to make him
 * squawk. Drop him enough times and he gets offended.
 *
 * Uses:
 * - mousePressed(), mouseDragged() and mouseReleased() to pick him up
 * - mouseWheel() to tickle him
 * - doubleClicked() to make him squawk
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
    y: 320,
    size: 80,
    flap: 0, // How far his wing tip is moved up or down
    held: false, // Is the mouse holding him?
    vy: 0, // His falling speed
    groundY: 320, // Where he stands on the ground
    drops: 0 // How many times he has been dropped
};

// These count down in frames, while they are above 0 he is tickled or squawking
let tickleTimer = 0;
let squawkTimer = 0;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Makes the bird fall, flap, shake and speak, then draws everything
 */
function draw() {
    background(sky.r, sky.g, sky.b);

    // When he is let go, gravity pulls him down to the ground
    if (!bird.held) {
        bird.vy = bird.vy + 0.6;
        bird.y = bird.y + bird.vy;

        // He stops when he lands on the ground
        if (bird.y >= bird.groundY) {
            bird.y = bird.groundY;
            bird.vy = 0;
        }
    }

    // His wing flaps frantically while he is held or falling
    if (bird.held || bird.y < bird.groundY) {
        bird.flap = random(-25, 25);
    }
    else {
        bird.flap = 0;
    }

    // While he is tickled he shakes from side to side
    if (tickleTimer > 0) {
        tickleTimer = tickleTimer - 1;
        bird.x = bird.x + random(-3, 3);
    }

    // The squawk goes away once its timer runs out
    if (squawkTimer > 0) {
        squawkTimer = squawkTimer - 1;
    }

    drawGround();
    drawBird();
    drawMessage();
}

/**
 * Draws the grass he stands on
 */
function drawGround() {
    noStroke();
    fill(90, 160, 70);
    rect(0, 360, width, 40);
}

/**
 * Draws the bird: a body, a wing, a beak and an eye.
 * Everything is based on his position and size.
 */
function drawBird() {
    noStroke();

    // Body
    fill(255, 220, 0);
    circle(bird.x, bird.y, bird.size);

    // Wing (the tip moves up and down with bird.flap)
    fill(230, 180, 0);
    triangle(
        bird.x - bird.size / 4, bird.y,
        bird.x - bird.size / 2 - 15, bird.y - 10 + bird.flap,
        bird.x - bird.size / 8, bird.y + bird.size / 4
    );

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
 * Writes what the bird is saying. Later messages in the list
 * win over earlier ones, so squawking beats everything else.
 */
function drawMessage() {
    let message = "pick me up (drag, scroll, double click)";
    if (bird.drops >= 5) {
        message = "I HAVE WINGS, YOU KNOW";
    }
    if (bird.held) {
        message = "PUT ME DOWN!";
    }
    if (tickleTimer > 0) {
        message = "HAHA STOP IT!";
    }
    if (squawkTimer > 0) {
        message = "SQUAWK!";
    }

    noStroke();
    fill(30);
    textSize(18);
    text(message, 30, 40);
}

/**
 * Picks the bird up if the mouse is on him
 */
function mousePressed() {
    // Grab the bird if the mouse is on him
    let d = dist(mouseX, mouseY, bird.x, bird.y);
    if (d < bird.size / 2) {
        bird.held = true;
        bird.vy = 0;
    }
}

/**
 * Moves the bird with the mouse while he is held
 */
function mouseDragged() {
    // The bird follows the mouse while he is held
    if (bird.held) {
        bird.x = constrain(mouseX, 40, 360);
        bird.y = constrain(mouseY, 40, bird.groundY);
    }
}

/**
 * Lets the bird go
 */
function mouseReleased() {
    // Letting go of him in the air counts as a drop
    if (bird.held && bird.y < bird.groundY) {
        bird.drops = bird.drops + 1;
    }
    bird.held = false;
}

/**
 * Scrolling the mouse wheel tickles him
 */
function mouseWheel() {
    tickleTimer = 60;
}

/**
 * Double clicking him makes him squawk
 */
function doubleClicked() {
    let d = dist(mouseX, mouseY, bird.x, bird.y);
    if (d < bird.size / 2) {
        squawkTimer = 60;
    }
}
