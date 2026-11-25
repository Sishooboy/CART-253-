
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

    "I'm here to kill 2 birds with 1 stone.",

    "Will you help me?"]




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
    talkImg: undefined,

};
let IGstone = {
    gravity: 0.09,
    ballImg: undefined,
    x: 100,
    y: 100,
    size: 60,
    velocity: {
        x: 1,
        y: -1.5
    },
    state: "neutral",
    tempx: 0,
    tempy: 0,
    angle: 0,
};

let birds = {
    bird1: {
        img: undefined,
        x: 330,
        y: 345,
        size: 70,
        hit: false
    },
    bird2: {
        img: undefined,
        x: 430,
        y: 345,
        size: 70,
        hit: false
    }
}
let platforms = [
    { x: 300, y: 390, w: 600, h: 20 },
    { x: -10, y: -200, w: 20, h: 1200 },
    { x: 610, y: -200, w: 20, h: 1200 }
];
let lineNumber = 0;
let gamestate = "play";
let brightness = 255;

async function setup() {
    createCanvas(600, 400);
    noSmooth();
    stone.walkImg = await loadImage("assets/stonegif.gif");
    stone.standImg = await loadImage("assets/stoneimg.png");
    stone.talkImg = await loadImage("assets/talkingif.gif");
    IGstone.ballImg = await loadImage("assets/stoneball.png");
    birds.bird1.img = await loadImage("assets/bird1.png");
    birds.bird2.img = await loadImage("assets/bird2.png");
}

function draw() {
    background(20, 10, 120);
    if (gamestate === "done") {
        drawWin();
    }
    if (gamestate === "play") {
        playGame();
    }
    if (gamestate === "menu") {
        drawMenu();
    }
    if (gamestate === "game") {
        drawGame();
    }

    if (random() < 0.05) { brightness = random(60, 150); }
    else { brightness = 255; }


}
function drawWin() {
    drawButton(300, 200, 200, 50, "YOU WIN");
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
function playGame() {
    imageMode(CENTER);
    for (let i = 0; i < platforms.length; i++) {
        drawPlatform(platforms[i]);
    }
    let img1 = IGstone.ballImg;
    push();
    translate(IGstone.x, IGstone.y);
    rotate(IGstone.angle);
    image(img1, 0, 0, IGstone.size, IGstone.size);
    pop();
    if (birds.bird1.hit === false) {
        image(birds.bird1.img, birds.bird1.x, birds.bird1.y, birds.bird1.size, birds.bird1.size);
    }
    if (birds.bird2.hit === false) {
        image(birds.bird2.img, birds.bird2.x, birds.bird2.y, birds.bird2.size, birds.bird2.size);
    }
    moveIGstone();
    wingame();

}
function checkCollision(bird, stone) {
    if (stone.state === "flying") {
        let d1 = dist(stone.x, stone.y, bird.x, bird.y);
        if (d1 < stone.size / 2 + bird.size / 4) {
            bird.hit = true;
        }
    }
}

function moveIGstone() {
    if (IGstone.state === "flying") {
        IGstone.velocity.y += IGstone.gravity;
        IGstone.angle += IGstone.velocity.x * 0.05;
        moveX();
        moveY();
    }
    checkCollision(birds.bird1, IGstone);
    checkCollision(birds.bird2, IGstone);
}

function moveX() {
    IGstone.x = IGstone.x + IGstone.velocity.x;
    if (touchingAny()) {
        IGstone.x = IGstone.x - IGstone.velocity.x;
        IGstone.velocity.x = IGstone.velocity.x * -0.7;
    }
}

function moveY() {
    IGstone.y = IGstone.y + IGstone.velocity.y;
    if (touchingAny()) {
        let landing = IGstone.velocity.y > 0;
        IGstone.y = IGstone.y - IGstone.velocity.y;
        IGstone.velocity.y = IGstone.velocity.y * -0.7;
        if (landing && abs(IGstone.velocity.y) < 1 && abs(IGstone.velocity.x) < 0.3) {
            reset();
        }
    }
}

function touchingAny() {
    for (let i = 0; i < platforms.length; i++) {
        if (touching(platforms[i])) {
            return true;
        }
    }
    return false;
}

function updateStone() {
    if (stone.state === "walking") {
        stone.x = stone.x + stone.speed;
        if (stone.x >= stone.targetX) {
            stone.x = stone.targetX;
            stone.state = "standing";
        }
    }

}
function WRITE() {

    if (stone.state === "talking") {
        drawButton(300, 300, 500, 100, lines[lineNumber], 20);
        stone.talkTimer = stone.talkTimer - 1;
        if (stone.talkTimer <= 0 && lineNumber == lines.length - 1) {
            gamestate = "play";
        }
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
            else if (lineNumber == lines.length - 1) { stone.talkTimer = 300; }
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
    text(label, x, y, w - 30, h - 10);
}

function drawPlatform(p) {
    rectMode(CENTER);
    noStroke();
    fill(0, 190, 250);
    rect(p.x, p.y, p.w, p.h);
}

function touching(p) {
    let left = p.x - p.w / 2;
    let right = p.x + p.w / 2;
    let top = p.y - p.h / 2;
    let bottom = p.y + p.h / 2;

    let closestX = constrain(IGstone.x, left, right);
    let closestY = constrain(IGstone.y, top, bottom);
    let d = dist(IGstone.x, IGstone.y, closestX, closestY);

    if (d < IGstone.size / 3) {
        return true;
    }
    return false;
}

function mousePressed() {
    if (gamestate === "menu") {
        if (mouseX > 200 && mouseX < 400 && mouseY > 175 && mouseY < 225) {
            gamestate = "game";
        }
    }
    else if (gamestate === "play") {
        if (IGstone.state === "neutral") {
            IGstone.tempx = mouseX;
            IGstone.tempy = mouseY;
            IGstone.state = "aiming";
        }
    }
}

function mouseReleased() {
    if (IGstone.state === "aiming") {
        IGstone.velocity.x = (IGstone.tempx - mouseX) * 0.1;
        IGstone.velocity.y = (IGstone.tempy - mouseY) * 0.1;
        let speed = dist(0, 0, IGstone.velocity.x, IGstone.velocity.y);
        if (speed > 10) {
            let ratio = 10 / speed;
            IGstone.velocity.x = IGstone.velocity.x * ratio;
            IGstone.velocity.y = IGstone.velocity.y * ratio;
        }
        IGstone.state = "flying";
    }
}
function reset() {
    IGstone.x = 100;
    IGstone.y = 100;
    IGstone.velocity.x = 0;
    IGstone.velocity.y = 0;
    IGstone.angle = 0;
    IGstone.state = "neutral";

    birds.bird1.hit = false
    birds.bird2.hit = false
}
function wingame() {
    if (birds.bird1.hit === true && birds.bird2.hit === true) {
        gamestate = "done";
    }
}
