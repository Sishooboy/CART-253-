let sky = {
    r: 173,
    g: 216,
    b: 230
};
let bird = {
    x1: 0,
    y1: 0,
    x2: -20,
    y2: -20,
    x3: 0,
    y3: -10,
    x4: +20,
    y4: -20
};
let prey = {
    x: 200,
    y: 380,
    size: 20
};

function setup() {
    createCanvas(400, 400);
    background(sky.r, sky.g, sky.b);
    noCursor();
}
function draw() {
    background(sky.r, sky.g, sky.b);
    noStroke();
    fill(230, 200, 0);
    quad(mouseX + bird.x1, mouseY + bird.y1, mouseX + bird.x2, mouseY + bird.y2, mouseX + bird.x3, mouseY + bird.y3, mouseX + bird.x4, mouseY + bird.y4);
    fill(40);
    ellipse(prey.x, prey.y, prey.size);
}