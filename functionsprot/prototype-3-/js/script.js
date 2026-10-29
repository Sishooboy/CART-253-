/**
 * Pigeon Problem
 * Charbel Dagher
 *
 * A very serious statue stands in a park. Click anywhere on him and a
 * pigeon flies over and drops a white splat exactly where you clicked.
 * Press any key to clean him, and then start again.
 * Every click calls the same functions again (drawSplat() and
 * drawBird()), so the more you click, the more times they are used.
 *
 * Uses:
 * - mousePressed() to call drawSplat() and drawBird()
 * - keyPressed() to call drawScene() and clean the statue
 * - functions with parameters: drawSplat(x, y, size) and
 *   drawBird(x, y, size, r, g, b, wing)
 */

"use strict";

/**
 * Creates the canvas, sets up the drawing and draws the scene once.
 * There is no draw() because everything is drawn when you click.
 */
function setup() {
    createCanvas(400, 400);
    noStroke();
    cursor(CROSS);
    drawScene();
}

/**
 * Draws the park and the statue. It draws over everything, so calling
 * it again cleans off all the splats and the pigeons.
 */
function drawScene() {
    // Sky
    background(150, 205, 235);

    // Ground
    fill(100, 170, 80);
    rect(0, 350, 400, 50);

    // Pedestal
    fill(130);
    rect(135, 300, 130, 55);

    // Legs
    fill(160);
    rect(170, 235, 24, 65);
    rect(206, 235, 24, 65);

    // Body
    rect(165, 160, 70, 80);

    // Arms (one down, one pointing at the sky)
    rect(145, 165, 18, 70);
    rect(237, 95, 18, 80);

    // Head
    circle(200, 135, 44);

    // Face
    fill(60);
    circle(191, 133, 4);
    circle(209, 133, 4);
    rect(192, 148, 16, 3);
}

/**
 * Draws a white splat. x and y are the middle of it and size is how big
 * it is (1 is normal). It is a big blob with three drops around it.
 */
function drawSplat(x, y, size) {
    fill(255);
    ellipse(x, y, 22 * size, 12 * size);
    circle(x - 14 * size, y + 4 * size, 5 * size);
    circle(x + 13 * size, y - 3 * size, 4 * size);
    circle(x + 3 * size, y + 9 * size, 4 * size);
}

/**
 * Draws a flying bird. x and y are the middle of his body, size is how
 * long he is and r, g and b are his colour. wing is 1 if his wing is
 * up and -1 if it is down. Every part is worked out from the size.
 */
function drawBird(x, y, size, r, g, b, wing) {
    // Tail (a little darker than the body)
    fill(r - 40, g - 40, b - 40);
    triangle(
        x - 0.45 * size, y,
        x - 0.85 * size, y - 0.12 * size,
        x - 0.85 * size, y + 0.12 * size
    );

    // Body
    fill(r, g, b);
    ellipse(x, y, size, 0.5 * size);

    // Head
    circle(x + 0.45 * size, y - 0.05 * size, 0.3 * size);

    // Beak
    fill(255, 170, 0);
    triangle(
        x + 0.58 * size, y - 0.09 * size,
        x + 0.58 * size, y + 0.01 * size,
        x + 0.8 * size, y - 0.04 * size
    );

    // Eye
    fill(0);
    circle(x + 0.5 * size, y - 0.1 * size, 0.06 * size);

    // Wing (it points up if wing is 1 and down if wing is -1)
    fill(r - 40, g - 40, b - 40);
    triangle(
        x - 0.2 * size, y - 0.1 * size * wing,
        x + 0.2 * size, y - 0.1 * size * wing,
        x - 0.15 * size, y - 0.8 * size * wing
    );
}

/**
 * Every click is a pigeon dropping a splat where the mouse is
 */
function mousePressed() {
    // A splat where the mouse is, and every one is a different size
    drawSplat(mouseX, mouseY, random(0.6, 1.4));

    // A drop that is still on its way down
    fill(255);
    circle(mouseX, mouseY - 30, 6);

    // And the pigeon that dropped it, with his wing up or down
    let wing = 1;
    if (random(1) < 0.5) {
        wing = -1;
    }
    drawBird(mouseX - 8, mouseY - 70, 30, 140, 140, 155, wing);
}

/**
 * Any key cleans the statue by drawing the whole scene again
 */
function keyPressed() {
    drawScene();
}
