let sky = {
    r: 173,
    g: 216,
    b: 230
}
let poke1;
let poke2;
let poke3;
// Current evolution
let evolution = 1;

async function setup() {
    createCanvas(800, 600);
    imageMode(CENTER);
    // Load images
    poke1 = await loadImage("assets/images/poke1.png");
    poke2 = await loadImage("assets/images/poke2.png");
    poke3 = await loadImage("assets/images/poke3.png");
}

function draw() {
    background(sky.r, sky.g, sky.b);

    if (evolution == 1) {
        image(poke1, 400, 300, 200, 200);
    }
    if (evolution == 2) {
        image(poke2, 400, 300, 200, 200);
    }
    if (evolution == 3) {
        image(poke3, 400, 300, 200, 200);
    }
}

function mousePressed() {
    // Change evolution
    if (evolution < 4) {
        evolution = evolution + 1;
    }
    if (evolution == 4) {
        evolution = 1;
    }
}
