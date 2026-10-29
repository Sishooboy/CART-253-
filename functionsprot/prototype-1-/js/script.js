function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(30, 40, 80);
    noStroke();
    drawOwl(80, 200);
    drawOwl(200, 200);
    drawOwl(320, 200);
}

function drawOwl(x, y) {
    // Ears
    fill(140, 90, 50);
    triangle(x - 42, y - 62, x - 46, y - 20, x - 10, y - 58);
    triangle(x + 42, y - 62, x + 46, y - 20, x + 10, y - 58);

    // Body
    ellipse(x, y, 100, 120);

    // Belly
    fill(240, 225, 190);
    ellipse(x, y + 20, 60, 70);

    // Eyes
    fill(255);
    circle(x - 20, y - 20, 30);
    circle(x + 20, y - 20, 30);
    fill(0);
    circle(x - 20, y - 20, 12);
    circle(x + 20, y - 20, 12);

    // Beak
    fill(255, 160, 0);
    triangle(x - 6, y - 8, x + 6, y - 8, x, y + 5);
}
