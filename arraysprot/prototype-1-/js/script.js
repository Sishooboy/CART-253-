let name = "Gerald";
let bio = "Loves long flights and stealing fries. Not sorry.";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255, 225, 240);
    noStroke();

    // The card
    fill(255);
    rect(50, 40, 300, 320, 20);

    // The bird
    drawBird(200, 130, 100, "gray");

    // His name and what he says about himself
    fill(0);
    textAlign(CENTER, TOP);
    textSize(26);
    text(name, 200, 205);
    textSize(15);
    text(bio, 70, 250, 260, 90);
}

function drawBird(x, y, size, colour) {
    // Tail
    fill(colour);
    triangle(
        x - 0.45 * size, y,
        x - 0.75 * size, y - 0.15 * size,
        x - 0.75 * size, y + 0.1 * size
    );

    // Body
    circle(x, y, size);

    // Wing (darker than the body)
    fill(0, 50);
    ellipse(x - 0.1 * size, y + 0.05 * size, 0.5 * size, 0.3 * size);

    // Beak
    fill(255, 170, 0);
    triangle(
        x + 0.45 * size, y - 0.05 * size,
        x + 0.45 * size, y + 0.1 * size,
        x + 0.7 * size, y + 0.02 * size
    );

    // Eye
    fill(0);
    circle(x + 0.2 * size, y - 0.15 * size, 0.1 * size);
}
