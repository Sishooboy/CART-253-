/**
 * Bird Dating
 * Charbel Dagher
 *
 * A dating app for birds. Each bird has a profile card with a drawing, a
 * name and a bio, and you swipe through them: the right arrow likes a
 * bird and the left arrow says nope. The birds you like are collected in
 * an array, and when there is nobody left it tells you who you matched
 * with. Press any key at the end to look again.
 *
 * Uses:
 * - arrays that go together, one for names, colours, sizes and bios
 * - an array that starts empty and grows with push(): the matches
 * - join() to turn the matches array into one line of text
 * - keyPressed() to swipe
 */

"use strict";

// Everything about each bird. The arrays go together: the bird at
// number 0 is Gerald, who is gray, big, and has the first bio.
let names = [
    "Gerald",
    "Pinky",
    "Captain Beak",
    "Doug",
    "Sir Flaps",
    "Tweety Jr.",
    "Beatrice"
];

let colours = [
    "gray",
    "hotpink",
    "deepskyblue",
    "orange",
    "limegreen",
    "gold",
    "orchid"
];

let sizes = [90, 70, 100, 60, 85, 50, 75];

let bios = [
    "Loves long flights and stealing fries. Not sorry.",
    "Stands on one leg. Still the most balanced bird you will meet.",
    "I have seen things. Mostly windows. I hit most of them.",
    "Early riser. Will sing at 5 am. It is not a bug, it is a feature.",
    "Fly with me. Just not near the airport.",
    "Small but very loud. Sorry about the neighbours.",
    "Likes: sunsets, worms and long walks on power lines."
];

// The names of the birds you liked, it starts empty
let matches = [];

// Which bird we are looking at
let current = 0;

// The last thing you said about a bird, shown for a moment
let verdict = "";
let verdictTimer = 0;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws the pink background, then either the card of the bird you are
 * looking at or the end screen
 */
function draw() {
    background(255, 225, 240);
    noStroke();

    // After the last bird there is nobody left to look at
    if (current >= names.length) {
        drawEnd();
    }
    else {
        drawProfile();
    }
}

/**
 * Draws the card of the current bird. Everything about him is taken from
 * the arrays using his number, current.
 */
function drawProfile() {
    // The card
    fill(255);
    rect(50, 40, 300, 320, 20);

    // The bird, with everything about him taken from the arrays
    drawBird(200, 130, sizes[current], colours[current]);

    // His name and what he says about himself
    fill(0);
    textAlign(CENTER, TOP);
    textSize(26);
    text(names[current], 200, 205);
    textSize(15);
    text(bios[current], 70, 250, 260, 90);

    // What to do
    textSize(14);
    text("Left arrow: nope     Right arrow: like", 200, 15);

    // LIKE or NOPE shows for a moment after you swipe
    if (verdictTimer > 0) {
        verdictTimer = verdictTimer - 1;
        textSize(26);
        if (verdict === "LIKE") {
            fill(60, 170, 80);
        }
        else {
            fill(220, 60, 60);
        }
        text(verdict, 200, 44);
    }
}

/**
 * Draws the end screen with everyone you matched with
 */
function drawEnd() {
    fill(0);
    textAlign(CENTER, TOP);
    textSize(28);
    text("No more birds nearby", 200, 90);

    // Everyone you liked, all in one line
    textSize(18);
    if (matches.length === 0) {
        text("You matched with nobody. The birds will be fine.", 50, 170, 300, 100);
    }
    else {
        text("You matched with: " + matches.join(", ") + ".", 50, 170, 300, 100);
    }

    textSize(15);
    text("Press any key to look again", 200, 330);
}

/**
 * Draws a bird. x and y are the middle of his body, size is how big he
 * is and colour is the colour of his body. Every part is worked out from
 * the size, so a bigger bird is just a scaled up bird.
 */
function drawBird(x, y, size, colour) {
    // Tail
    fill(colour);
    triangle(
        x - 0.45 * size, y,
        x - 0.75 * size, y - 0.15 * size,
        x - 0.75 * size, y + 0.1 * size
    );

    // Body
    circle(x, y, size);

    // Wing (darker than the body)
    fill(0, 50);
    ellipse(x - 0.1 * size, y + 0.05 * size, 0.5 * size, 0.3 * size);

    // Beak
    fill(255, 170, 0);
    triangle(
        x + 0.45 * size, y - 0.05 * size,
        x + 0.45 * size, y + 0.1 * size,
        x + 0.7 * size, y + 0.02 * size
    );

    // Eye
    fill(0);
    circle(x + 0.2 * size, y - 0.15 * size, 0.1 * size);
}

/**
 * Says like or nope to the current bird and moves on to the next one
 */
function swipe(liked) {
    // A bird you like goes into the matches array
    if (liked) {
        matches.push(names[current]);
        verdict = "LIKE";
    }
    else {
        verdict = "NOPE";
    }
    verdictTimer = 40;

    // Then it is on to the next bird
    current = current + 1;
}

/**
 * The arrow keys swipe, and at the end any key starts it all again
 */
function keyPressed() {
    if (current >= names.length) {
        // Any key at the end starts it all again with no matches
        current = 0;
        matches = [];
        verdictTimer = 0;
    }
    else if (key === "ArrowRight") {
        swipe(true);
    }
    else if (key === "ArrowLeft") {
        swipe(false);
    }
}
