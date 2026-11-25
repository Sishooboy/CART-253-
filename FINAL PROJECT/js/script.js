
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
};

let birds = {
    bird1: {
        img: undefined,
        x: 330,
        y: 360,
        size: 70,
        hit: false
    },
    bird2: {
        img: undefined,
        x: 430,
        y: 360,
        size: 70,
        hit: false
    }
}
let platforms = [
    { x: 300, y: 390, w: 600, h: 20 }
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
    image(img1, IGstone.x, IGstone.y, IGstone.size, IGstone.size);
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
    reset()
    if (IGstone.state === "flying") {
        IGstone.velocity.y += IGstone.gravity;
        IGstone.x = IGstone.x + IGstone.velocity.x;
        IGstone.y = IGstone.y + IGstone.velocity.y;
    }
    checkCollision(birds.bird1, IGstone);
    checkCollision(birds.bird2, IGstone);
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
            gamestate = "done";
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
        if (IGstone.velocity.x > 10) {
            IGstone.velocity.x = 10;
        }
        if (IGstone.velocity.x < -10) {
            IGstone.velocity.x = -10;
        }
        IGstone.velocity.y = (IGstone.tempy - mouseY) * 0.1;
        if (IGstone.velocity.y > 10) {
            IGstone.velocity.y = 10;
        }
        if (IGstone.velocity.y < -10) {
            IGstone.velocity.y = -10;
        }
        IGstone.state = "flying";
    }
}
function reset() {
    if (IGstone.x > width || IGstone.y > height || IGstone.x < 0) {
        IGstone.x = 100;
        IGstone.y = 100;
        IGstone.velocity.x = 0;
        IGstone.velocity.y = 0;
        IGstone.state = "neutral";

        birds.bird1.hit = false
        birds.bird2.hit = false
    }

}
function wingame() {
    if (birds.bird1.hit === true && birds.bird2.hit === true) {
        gamestate = "done";
    }
    if (gamestate === "done") {
        drawButton(300, 200, 500, 100, "You killed both birds with one stone! You win!", 20);
    }

}
