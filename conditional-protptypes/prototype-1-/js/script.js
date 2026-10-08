let sky = {
    r: 173,
    g: 216,
    b: 230
};
let bird = {
    x1: 200,
    y1: 200,
    x2: 180,
    y2: 180,
    x3: 200,
    y3: 190,
    x4: 220,
    y4: 180
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
    quad(bird.x1, bird.y1, bird.x2, bird.y2, bird.x3, bird.y3, bird.x4, bird.y4);
    fill(40);
    ellipse(prey.x, prey.y, prey.size);
}