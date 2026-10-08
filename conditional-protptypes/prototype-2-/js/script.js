let sky = {
    r: 173,
    g: 216,
    b: 230
}
let poke1;
let poke2;
let poke3;
let bird = {
    x1: 200,
    y1: 200,

}
function preload() {

}
async function setup() {
    createCanvas(800, 600);
    imageMode(CENTER);
    poke1 = await loadImage("assets/images/poke1.png");
    poke2 = await loadImage("assets/images/poke2.png");
    poke3 = await loadImage("assets/images/poke3.png");
}

function draw() {
    background(sky.r, sky.g, sky.b);
    image(poke1, 400, 300, 200, 200);
}