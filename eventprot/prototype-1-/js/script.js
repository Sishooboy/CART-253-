let sky = {
    r: 173,
    g: 216,
    b: 230
};

let bird = {
    x: 200,
    y: 200,
    size: 60
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(sky.r, sky.g, sky.b);
    drawBird();
}

function drawBird() {
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

    // Eye
    fill(0);
    circle(bird.x + bird.size / 6, bird.y - bird.size / 6, bird.size / 10);
}
