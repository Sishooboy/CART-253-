
"use strict";
let lines = ["Hi user,",

    "I'm Stone.",

    "Not nice to meet you.",

    "At first glance you might think that I'm a villain.",

    "And I totally am.",

    "My mission is to kill 2 birds.",

    "I HATE them",

    "Donald and Jim. They somehow always seem to find their way back.",

    "And I always kill them again.",

    "But recently they seem to strategically locate themselves in places where I can't reach them both, ",

    "And they are getting better at it every time I kill them.",

    "And this INFURIATES ME.",

    "So I'm here to achieve 2 tasks in 1 action,",

    "I'm here to prove 2 points in 1 sentence,",

    "I'm here to kill 2 birds with 1 stone."]



let stone = {
    x: -100,
    y: 150,
    size: 200,
    speed: 5,
    targetX: 300,
    state: "walking",
    standTimer: 60,
    talkTimer: 100,
    walkImg: undefined,
    standImg: undefined,
    talkImg: undefined
};
let lineNumber = 0;
let gamestate = "menu";
let brightness = 255;

async function setup() {
    createCanvas(600, 400);
    noSmooth();
    stone.walkImg = await loadImage("assets/stonegif.gif");
    stone.standImg = await loadImage("assets/stoneimg.png");
    stone.talkImg = await loadImage("assets/talkingif.gif");
}

function draw() {
    background(20, 10, 120);

    if (gamestate === "menu") {
        drawMenu();
    }
    if (gamestate === "game") {
        drawGame();
    }

    if (random() < 0.05) { brightness = random(60, 150); }
    else { brightness = 255; }


}
function drawMenu() {
    drawButton(300, 200, 200, 50, "Start Game");
}
function drawGame() {
    background(20, 10, 120);
    imageMode(CENTER);

    updateStone();
    drawStone();
    WRITE();
}

function updateStone() {
    if (stone.state === "walking") {
        stone.x = stone.x + stone.speed;
        if (stone.x >= stone.targetX) {
            stone.x = stone.targetX;
            stone.state = "standing";
        }
    }
    /*else if (stone.state === "standing") {

        stone.standTimer = stone.standTimer - 1;
        if (stone.standTimer <= 0) {
            stone.state = "talking";
        }
    }*/

    /*else if (stone.state === "talking") {
        stone.talkTimer = stone.talkTimer - 1;
        if (stone.talkTimer <= 0) {
            stone.state = "done";
        }
    }*/
}
function WRITE() {

    if (stone.state === "talking") {
        drawButton(300, 300, 500, 100, lines[lineNumber], 20);
        stone.talkTimer = stone.talkTimer - 1;
        if (stone.talkTimer <= 0) {
            lineNumber++;
            stone.standTimer = 60;
            stone.state = "standing";
        }

    }
    if (stone.state === "standing") {
        drawButton(300, 300, 500, 100, "");
        stone.standTimer = stone.standTimer - 1;
        if (stone.standTimer <= 0) {
            if (lineNumber == 9) { stone.talkTimer = 200; }
            else { stone.talkTimer = 130; }
            stone.talkTimer = stone.talkTimer - 1;
            stone.state = "talking";
        }
    }
}
function drawStone() {
    let img = stone.standImg;
    if (stone.state === "walking") {
        img = stone.walkImg;
    }
    else if (stone.state === "talking") {
        img = stone.talkImg;
    }
    image(img, stone.x, stone.y, stone.size, stone.size);
}

function drawButton(x, y, w, h, label, s = 24) {
    rectMode(CENTER);
    noFill();
    stroke(0, 200, 255, brightness * 0.15);
    strokeWeight(16);
    rect(x, y, w, h, 5);
    stroke(0, 200, 255, brightness * 0.3);
    strokeWeight(9);
    rect(x, y, w, h, 5);
    stroke(0, 200, 255, brightness);
    strokeWeight(3);
    rect(x, y, w, h, 5);
    noStroke();
    fill(0, 200, 255, brightness);
    textAlign(CENTER, CENTER);
    textSize(s);
    text(label, x, y, w - 30, h - 10);;
}

function mousePressed() {
    if (mouseX > 200 && mouseX < 400 && mouseY > 175 && mouseY < 225) {
        gamestate = "game";
    }
}