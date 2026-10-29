function setup() {
    createCanvas(400, 400);
    noStroke();
    drawScene();
}

function drawScene() {
    // Sky
    background(150, 205, 235);

    // Ground
    fill(100, 170, 80);
    rect(0, 350, 400, 50);

    // Pedestal
    fill(130);
    rect(135, 300, 130, 55);

    // Legs
    fill(160);
    rect(170, 235, 24, 65);
    rect(206, 235, 24, 65);

    // Body
    rect(165, 160, 70, 80);

    // Arms (one down, one pointing at the sky)
    rect(145, 165, 18, 70);
    rect(237, 95, 18, 80);

    // Head
    circle(200, 135, 44);

    // Face
    fill(60);
    circle(191, 133, 4);
    circle(209, 133, 4);
    rect(192, 148, 16, 3);
}

function drawSplat(x, y, size) {
    fill(255);
    ellipse(x, y, 22 * size, 12 * size);
    circle(x - 14 * size, y + 4 * size, 5 * size);
    circle(x + 13 * size, y - 3 * size, 4 * size);
    circle(x + 3 * size, y + 9 * size, 4 * size);
}

function mousePressed() {
    // A splat where the mouse is, and every one is a different size
    drawSplat(mouseX, mouseY, random(0.6, 1.4));
}

function keyPressed() {
    // Any key cleans the statue by drawing the whole scene again
    drawScene();
}
