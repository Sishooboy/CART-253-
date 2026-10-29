function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(30, 40, 80);
    noStroke();
    drawOwl(80, 200, 70);
    drawOwl(200, 200, 100);
    drawOwl(320, 200, 85);
}

function drawOwl(x, y, size) {
    // Ears
    fill(140, 90, 50);
    triangle(
        x - 0.42 * size, y - 0.62 * size,
        x - 0.46 * size, y - 0.2 * size,
        x - 0.1 * size, y - 0.58 * size
    );
    triangle(
        x + 0.42 * size, y - 0.62 * size,
        x + 0.46 * size, y - 0.2 * size,
        x + 0.1 * size, y - 0.58 * size
    );

    // Body
    ellipse(x, y, size, 1.2 * size);

    // Belly
    fill(240, 225, 190);
    ellipse(x, y + 0.2 * size, 0.6 * size, 0.7 * size);

    // Eyes
    fill(255);
    circle(x - 0.2 * size, y - 0.2 * size, 0.3 * size);
    circle(x + 0.2 * size, y - 0.2 * size, 0.3 * size);
    fill(0);
    circle(x - 0.2 * size, y - 0.2 * size, 0.12 * size);
    circle(x + 0.2 * size, y - 0.2 * size, 0.12 * size);

    // Beak
    fill(255, 160, 0);
    triangle(
        x - 0.06 * size, y - 0.08 * size,
        x + 0.06 * size, y - 0.08 * size,
        x, y + 0.05 * size
    );
}
