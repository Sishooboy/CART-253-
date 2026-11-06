function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, TOP);
}

function draw() {
    background(255, 240, 200);
    noStroke();

    fill(200, 50, 60);
    rect(50, 40, 300, 270, 25);

    fill(255);
    textSize(26);
    text("BIRD SLOTS", 200, 55);

    rect(75, 100, 80, 120, 10);
    rect(160, 100, 80, 120, 10);
    rect(245, 100, 80, 120, 10);

    drawBird(115, 160, 50, "gold");
    drawBird(200, 160, 50, "tomato");
    drawBird(285, 160, 50, "deepskyblue");
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
