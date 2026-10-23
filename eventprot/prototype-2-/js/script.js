let sky = {
    r: 10,
    g: 20,
    b: 40
};

let bird = {
    x: 200,
    y: 250,
    size: 90
};

let zzz = {
    x: 270,
    y: 200
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(sky.r, sky.g, sky.b);
    drawBranch();
    drawBird();
    drawZzz();
}

function drawBranch() {
    noStroke();
    fill(100, 60, 20);
    rect(40, 290, 320, 16, 8);
}

function drawBird() {
    push();
    noStroke();

    // Body
    fill(255, 220, 0);
    circle(bird.x, bird.y, bird.size);

    // Beak
    fill(255, 140, 0);
    triangle(
        bird.x + bird.size / 2, bird.y - bird.size / 10,
        bird.x + bird.size / 2 + bird.size * 0.3, bird.y,
        bird.x + bird.size / 2, bird.y + bird.size / 10
    );

    // Closed eye
    stroke(0);
    strokeWeight(3);
    line(
        bird.x + bird.size / 6 - 8, bird.y - bird.size / 6,
        bird.x + bird.size / 6 + 8, bird.y - bird.size / 6
    );
    pop();
}

function drawZzz() {
    noStroke();
    fill(255);
    textSize(24);
    text("Z z z", zzz.x, zzz.y);

    // Floats up, then starts again from the bird
    zzz.y = zzz.y - 0.5;
    if (zzz.y < 120) {
        zzz.y = 200;
    }
}
