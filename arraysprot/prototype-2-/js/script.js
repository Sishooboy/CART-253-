/**
 * Parrot Talk
 * Charbel Dagher
 *
 * A parrot who tells a story. Every click makes him say the next phrase
 * from an array, and after the last one he starts again. Press any key
 * to restart the story.
 */

"use strict";

let phrases = [
    "I was flying in montreal",
    "I was very hungry",
    "I saw the letter 'c' next to a building",
    "I thought they had some cereal so I started spyin the window",
    "Saw a person and screen",
    "Apparently he is called pippin",
    "there was a horse race on the screen",
    "I enjoyed the race",
    "forgot i was hungry",
    "just stayed there"
];

let message = "Click to make me talk";

let nextPhrase = 0;

let lineNumber = 0;

let talkTimer = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(170, 220, 200);
    noStroke();

    fill(110, 70, 30);
    rect(100, 305, 200, 14);

    let mouth = 0;
    if (talkTimer > 0) {
        talkTimer = talkTimer - 1;
        if (talkTimer % 10 < 5) {
            mouth = 8;
        }
    }

    drawBubble(message);
    drawParrot(mouth);

    fill(0);
    textSize(16);
    if (lineNumber > 0) {
        text("Line " + lineNumber + " of " + phrases.length, 15, 392);
    }
}

// Shows the words in the bubble and makes his beak move
function speak(words) {
    message = words;
    talkTimer = 50;
}

// Draws the speech bubble with the words inside
function drawBubble(words) {
    push();
    fill(255);
    rect(40, 30, 320, 70, 15);
    triangle(185, 99, 215, 99, 200, 122);

    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(words, 40, 30, 320, 70);
    pop();
}

// Draws the parrot, mouth is how far his bottom beak drops
function drawParrot(mouth) {
    fill(200, 60, 60);
    triangle(180, 290, 215, 290, 185, 385);
    fill(60, 100, 200);
    triangle(195, 290, 230, 290, 220, 375);

    fill(60, 170, 80);
    ellipse(200, 235, 90, 130);

    fill(40, 130, 60);
    ellipse(160, 245, 28, 90);
    ellipse(240, 245, 28, 90);

    fill(60, 170, 80);
    circle(200, 150, 70);

    fill(255);
    circle(184, 145, 24);
    circle(216, 145, 24);
    fill(0);
    circle(186, 146, 10);
    circle(214, 146, 10);

    fill(220, 110, 0);
    triangle(190, 168 + mouth, 210, 168 + mouth, 200, 184 + mouth);
    fill(255, 150, 0);
    triangle(186, 160, 214, 160, 200, 182);

    fill(255, 190, 0);
    rect(184, 296, 9, 14);
    rect(207, 296, 9, 14);
}

// A click says the next phrase
function mousePressed() {
    speak(phrases[nextPhrase]);
    lineNumber = nextPhrase + 1;

    nextPhrase = nextPhrase + 1;
    if (nextPhrase >= phrases.length) {
        nextPhrase = 0;
    }
}

// Any key restarts the story
function keyPressed() {
    nextPhrase = 0;
    lineNumber = 0;
    message = "Click to make me talk";
}
