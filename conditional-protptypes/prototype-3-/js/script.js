let sky = {
    r: 10,
    g: 10,
    b: 10
};

let bird = {
    x: 200,
    y: 220,
    size: 100
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(sky.r, sky.g, sky.b);

    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("Move the mouse toward the brave phoenix", 200, 30);

    drawBird();
}

function drawBird() {
    noStroke();

    fill(255, 100, 0);
    triangle(
        bird.x,
        bird.y - bird.size,
        bird.x - bird.size / 2,
        bird.y,
        bird.x + bird.size / 2,
        bird.y
    );

    fill(255, 220, 0);
    circle(bird.x, bird.y, bird.size);
}
