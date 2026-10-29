let penguin = {
    x: 200,
    y: 290,
    size: 100
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(180, 220, 245);
    noStroke();

    // Snow
    fill(245);
    rect(0, 230, 400, 170);

    drawPenguin(penguin);
}

function drawPenguin(penguin) {
    let x = penguin.x;
    let y = penguin.y;
    let s = penguin.size;

    // Body (he is lying on his stomach)
    fill(30);
    ellipse(x, y, 1.4 * s, 0.6 * s);

    // Belly
    fill(255);
    ellipse(x, y + 0.12 * s, 1.2 * s, 0.3 * s);

    // Head
    fill(30);
    circle(x + 0.65 * s, y - 0.05 * s, 0.4 * s);

    // Beak
    fill(255, 160, 0);
    triangle(
        x + 0.82 * s, y - 0.1 * s,
        x + 0.82 * s, y + 0.02 * s,
        x + s, y - 0.04 * s
    );
}
