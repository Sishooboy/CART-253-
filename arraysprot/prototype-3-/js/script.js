/**
 * Bird Slots
 * Charbel Dagher
 *
 * A slot machine with birds. Click to spin, and the three windows stop one
 * after the other on a random bird from an array. Three the same is a
 * jackpot.
 */

"use strict";

// The birds and their names go together, the same number is the same bird
let birdColours = ["gold", "tomato", "deepskyblue", "limegreen", "hotpink"];
let birdNames = ["Chick", "Cardinal", "Bluebird", "Parrot", "Flamingo"];

let loseMessages = [
    "The birds are laughing at you",
    "Not today",
    "Even a pigeon could do better",
    "Wow. Nothing. Impressive.",
    "The birds always win",
    "Have you tried turning the bird off and on?"
];

let reel1 = "gold";
let reel2 = "tomato";
let reel3 = "deepskyblue";

let spinTimer = 0;

let message = "Click to spin";
let won = false;

let spins = 0;
let jackpots = 0;

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, TOP);
}

function draw() {
    background(255, 240, 200);
    noStroke();

    updateReels();

    fill(200, 50, 60);
    rect(50, 40, 300, 270, 25);

    fill(255);
    textSize(26);
    text("BIRD SLOTS", 200, 55);

    rect(75, 100, 80, 120, 10);
    rect(160, 100, 80, 120, 10);
    rect(245, 100, 80, 120, 10);

    drawBird(115, 160, 50, reel1);
    drawBird(200, 160, 50, reel2);
    drawBird(285, 160, 50, reel3);

    fill(60, 20, 30);
    rect(70, 235, 260, 55, 12);
    if (won) {
        fill(255, 220, 0);
    }
    else {
        fill(255);
    }
    textSize(16);
    text(message, 80, 250, 240, 40);

    fill(0);
    text("Spins: " + spins + "     Jackpots: " + jackpots, 200, 330);
    text("Click to spin", 200, 360);
}

// Keeps the windows changing until the spin is over
function updateReels() {
    if (spinTimer > 0) {
        if (frameCount % 4 === 0) {
            if (spinTimer > 40) {
                reel1 = random(birdColours);
            }
            if (spinTimer > 20) {
                reel2 = random(birdColours);
            }
            reel3 = random(birdColours);
        }
        spinTimer = spinTimer - 1;

        if (spinTimer === 0) {
            checkResult();
        }
    }
}

// Decides if you won, nearly won or lost
function checkResult() {
    spins = spins + 1;

    if (reel1 === reel2 && reel2 === reel3) {
        let name = birdNames[birdColours.indexOf(reel1)];
        message = "JACKPOT! Three " + name + "s!";
        won = true;
        jackpots = jackpots + 1;
    }
    else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
        message = "Two match. So close!";
    }
    else {
        message = random(loseMessages);
    }
}

// Draws a bird, everything is worked out from its size
function drawBird(x, y, size, colour) {
    fill(colour);
    triangle(
        x - 0.45 * size, y,
        x - 0.75 * size, y - 0.15 * size,
        x - 0.75 * size, y + 0.1 * size
    );

    circle(x, y, size);

    fill(0, 50);
    ellipse(x - 0.1 * size, y + 0.05 * size, 0.5 * size, 0.3 * size);

    fill(255, 170, 0);
    triangle(
        x + 0.45 * size, y - 0.05 * size,
        x + 0.45 * size, y + 0.1 * size,
        x + 0.7 * size, y + 0.02 * size
    );

    fill(0);
    circle(x + 0.2 * size, y - 0.15 * size, 0.1 * size);
}

// A click starts a spin, unless one is already going
function mousePressed() {
    if (spinTimer === 0) {
        spinTimer = 60;
        message = "Spinning...";
        won = false;
    }
}
