//MORNING BELL, I JUST SAW A SONG CALLED THIS WAY AND I THOUGHT IT WAS A GOOD NAME FOR THIS PROJECT. I HOPE YOU ENJOY IT!
let sky = {
    r: 10,
    g: 20,
    b: 40
}

let bird = {
    x1: -100,
    y1: 150,
    x2: 0,
    y2: 150,
    x3: -50,
    y3: 200,
    x4: -50,
    y4: 180,
    speed: 0.1,

    // Colour
    fill: {
        r: 255,
        g: 255,
        b: 0
    }
};

function setup() {
    createCanvas(400, 400);

}



function draw() {
    background(sky.r, sky.g, sky.b);
    if (sky.b < 235) {
        sky.b += 0.5;
        if (sky.g < 205) {
            sky.g += 0.5;
        }
        if (sky.r < 135) {
            sky.r += 0.5;
        }
    }
    drawBird();
}
function drawBird() {

    noStroke();
    fill(bird.fill.r, bird.fill.g, bird.fill.b);

    quad(bird.x1, bird.y1, bird.x4, bird.y4, bird.x2, bird.y2, bird.x3, bird.y3);


    if (bird.x1 < 500) {
        bird.x1 += bird.speed;
        bird.x2 += bird.speed;
        bird.x3 += bird.speed;
        bird.x4 += bird.speed;
        bird.speed += 0.03;
        let x = bird.x1;
        bird.y1 = 30 * sin(x * 0.1) + 150;
        bird.y2 = 30 * sin(x * 0.1) + 150;
    }

}
