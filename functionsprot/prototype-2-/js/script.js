let penguin1;
let penguin2;
let penguin3;

function setup() {
    createCanvas(400, 400);
    makeColony();
}

function draw() {
    background(180, 220, 245);
    noStroke();

    // Snow
    fill(245);
    rect(0, 230, 400, 170);

    movePenguin(penguin1);
    movePenguin(penguin2);
    movePenguin(penguin3);

    drawPenguin(penguin1);
    drawPenguin(penguin2);
    drawPenguin(penguin3);
}

function makeColony() {
    penguin1 = createPenguin(250);
    penguin2 = createPenguin(295);
    penguin3 = createPenguin(340);
}

function createPenguin(y) {
    let penguin = {
        x: random(0, 400),
        y: y,
        size: random(40, 70),
        glide: random(0.008, 0.015),
        r: random(100, 255),
        g: random(0, 255),
        b: random(0, 255)
    };
    return penguin;
}

function movePenguin(penguin) {
    // He is fast at first and slows down as he goes. His target is past
    // the right edge, so he still slides off the screen
    penguin.x = penguin.x + (width + 200 - penguin.x) * penguin.glide;

    // Once he is off the screen he starts again from the left
    if (penguin.x > width + 100) {
        penguin.x = -100;
    }
}

function drawPenguin(penguin) {
    let x = penguin.x;
    let y = penguin.y;
    let s = penguin.size;

    // Body (he is lying on his stomach)
    fill(30);
    ellipse(x, y, 1.4 * s, 0.6 * s);

    // Belly (every penguin has his own colour)
    fill(penguin.r, penguin.g, penguin.b);
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

function mousePressed() {
    // Clicking makes a whole new colony
    makeColony();
}
