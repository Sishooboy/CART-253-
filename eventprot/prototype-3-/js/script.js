let sky = {
    r: 173,
    g: 216,
    b: 230
};

let bird = {
    x: 200,
    y: 320,
    size: 80,
    flap: 0
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(sky.r, sky.g, sky.b);
    drawGround();
    drawBird();
}

function drawGround() {
    noStroke();
    fill(90, 160, 70);
    rect(0, 360, width, 40);
}

function drawBird() {
    noStroke();

    // Body
    fill(255, 220, 0);
    circle(bird.x, bird.y, bird.size);

    // Wing (the tip moves up and down with bird.flap)
    fill(230, 180, 0);
    triangle(
        bird.x - bird.size / 4, bird.y,
        bird.x - bird.size / 2 - 15, bird.y - 10 + bird.flap,
        bird.x - bird.size / 8, bird.y + bird.size / 4
    );

    // Beak
    fill(255, 140, 0);
    triangle(
        bird.x + bird.size / 2, bird.y - bird.size / 10,
        bird.x + bird.size / 2 + bird.size * 0.3, bird.y,
        bird.x + bird.size / 2, bird.y + bird.size / 10
    );

    // Eye
    fill(0);
    circle(bird.x + bird.size / 6, bird.y - bird.size / 6, bird.size / 10);
}
