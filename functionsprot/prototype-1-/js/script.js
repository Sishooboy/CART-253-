function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(30, 40, 80);
    noStroke();

    // Moon
    fill(240, 240, 200);
    circle(340, 60, 50);

    // The branch they all sit on
    fill(90, 60, 30);
    rect(0, 300, 400, 14);

    // The family (their y is picked so they sit on the branch)
    drawOwl(60, 258, 70, 140, 90, 50);
    drawOwl(155, 240, 100, 130, 130, 140);
    drawOwl(250, 264, 60, 190, 140, 80);
    drawOwl(335, 249, 85, 100, 80, 70);
}

function drawOwl(x, y, size, r, g, b) {
    // Ears
    fill(r, g, b);
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
