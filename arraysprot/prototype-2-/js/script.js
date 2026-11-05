function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(170, 220, 200);
    noStroke();

    fill(110, 70, 30);
    rect(100, 305, 200, 14);

    drawBubble();
    drawParrot();
}

function drawBubble() {
    fill(255);
    rect(40, 30, 320, 70, 15);
    triangle(185, 99, 215, 99, 200, 122);
}

function drawParrot() {
    fill(200, 60, 60);
    triangle(180, 290, 215, 290, 185, 385);
    fill(60, 100, 200);
    triangle(195, 290, 230, 290, 220, 375);

    fill(60, 170, 80);
    ellipse(200, 235, 90, 130);

    fill(40, 130, 60);
    ellipse(160, 245, 28, 90);
    ellipse(240, 245, 28, 90);

    fill(60, 170, 80);
    circle(200, 150, 70);

    fill(255);
    circle(184, 145, 24);
    circle(216, 145, 24);
    fill(0);
    circle(186, 146, 10);
    circle(214, 146, 10);

    fill(255, 150, 0);
    triangle(186, 160, 214, 160, 200, 182);

    fill(255, 190, 0);
    rect(184, 296, 9, 14);
    rect(207, 296, 9, 14);
}
