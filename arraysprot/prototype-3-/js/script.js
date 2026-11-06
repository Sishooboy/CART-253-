let birdColours = ["gold", "tomato", "deepskyblue", "limegreen", "hotpink"];

let reel1 = "gold";
let reel2 = "tomato";
let reel3 = "deepskyblue";

let spinTimer = 0;

let message = "Click to spin";

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
    fill(255);
    textSize(16);
    text(message, 80, 250, 240, 40);

    fill(0);
    text("Click to spin", 200, 340);
}

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

function checkResult() {
    if (reel1 === reel2 && reel2 === reel3) {
        message = "JACKPOT!";
    }
    else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
        message = "Two match. So close!";
    }
    else {
        message = "Nothing matches";
    }
}

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

function mousePressed() {
    if (spinTimer === 0) {
        spinTimer = 60;
        message = "Spinning...";
    }
}
