function setup() {
    createCanvas(400, 400);
    noStroke();

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

function mousePressed() {
    // A white splat where the mouse is
    fill(255);
    ellipse(mouseX, mouseY, 22, 12);
    circle(mouseX - 14, mouseY + 4, 5);
    circle(mouseX + 13, mouseY - 3, 4);
    circle(mouseX + 3, mouseY + 9, 4);
}
