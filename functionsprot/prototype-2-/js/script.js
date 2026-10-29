/**
 * Colored Penguin Colony
 * Charbel Dagher
 *
 * Three penguins sliding across the snow on their stomachs. They shoot
 * in fast and slow down as they slide off the screen. Each one has their
 * own size, glide and belly colour. A function creates the data for each
 * penguin and gives it back with a return value, and other functions
 * move and draw a penguin from that data. Click to make a brand new
 * colony.
 *
 * Uses:
 * - a function with a return value: createPenguin(y)
 * - functions with a parameter: movePenguin(penguin), drawPenguin(penguin)
 * - mousePressed() to make a new colony
 */

"use strict";

// The three penguins
let penguin1;
let penguin2;
let penguin3;

/**
 * Creates the canvas and the first colony
 */
function setup() {
    createCanvas(400, 400);
    makeColony();
}

/**
 * Draws the snow, then moves and draws the penguins. The one furthest
 * back is drawn first so the others can slide in front of him.
 */
function draw() {
    background(180, 220, 245);
    noStroke();

    // Snow
    fill(245);
    rect(0, 230, 400, 170);

    movePenguin(penguin1);
    movePenguin(penguin2);
    movePenguin(penguin3);

    drawPenguin(penguin1);
    drawPenguin(penguin2);
    drawPenguin(penguin3);
}

/**
 * Creates the three penguins, each on their own row of snow
 */
function makeColony() {
    penguin1 = createPenguin(250);
    penguin2 = createPenguin(295);
    penguin3 = createPenguin(340);
}

/**
 * Makes a penguin on the row y with a random place, size, glide and
 * belly colour, and returns it so it can be stored in a variable
 */
function createPenguin(y) {
    let penguin = {
        x: random(0, 400),
        y: y,
        size: random(40, 70),
        glide: random(0.008, 0.015), // How quickly he slows down
        r: random(100, 255), // The colour of his belly
        g: random(0, 255),
        b: random(0, 255)
    };
    return penguin;
}

/**
 * Makes a penguin slide to the right. He is fast at first and slows
 * down as he goes, but he still slides off the screen. Then he starts
 * again from the left.
 */
function movePenguin(penguin) {
    // He is fast at first and slows down as he goes. His target is past
    // the right edge, so he still slides off the screen
    penguin.x = penguin.x + (width + 200 - penguin.x) * penguin.glide;

    // Once he is off the screen he starts again from the left
    if (penguin.x > width + 100) {
        penguin.x = -100;
    }
}

/**
 * Draws a penguin lying on his stomach from his data. Every part is
 * worked out from the middle of his body and his size, so a smaller
 * penguin is just a scaled down penguin.
 */
function drawPenguin(penguin) {
    let x = penguin.x;
    let y = penguin.y;
    let s = penguin.size;

    // Body (he is lying on his stomach)
    fill(30);
    ellipse(x, y, 1.4 * s, 0.6 * s);

    // Belly (every penguin has his own colour)
    fill(penguin.r, penguin.g, penguin.b);
    ellipse(x, y + 0.12 * s, 1.2 * s, 0.3 * s);

    // Head
    fill(30);
    circle(x + 0.65 * s, y - 0.05 * s, 0.4 * s);

    // Beak
    fill(255, 160, 0);
    triangle(
        x + 0.82 * s, y - 0.1 * s,
        x + 0.82 * s, y + 0.02 * s,
        x + s, y - 0.04 * s
    );
}

/**
 * Clicking makes a whole new colony
 */
function mousePressed() {
    makeColony();
}
