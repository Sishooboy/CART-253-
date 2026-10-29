function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(30, 40, 80);
    noStroke();
    drawOwl();
}

function drawOwl() {
    // Ears
    fill(140, 90, 50);
    triangle(158, 138, 154, 180, 190, 142);
    triangle(242, 138, 246, 180, 210, 142);

    // Body
    ellipse(200, 200, 100, 120);

    // Belly
    fill(240, 225, 190);
    ellipse(200, 220, 60, 70);

    // Eyes
    fill(255);
    circle(180, 180, 30);
    circle(220, 180, 30);
    fill(0);
    circle(180, 180, 12);
    circle(220, 180, 12);

    // Beak
    fill(255, 160, 0);
    triangle(194, 192, 206, 192, 200, 205);
}
