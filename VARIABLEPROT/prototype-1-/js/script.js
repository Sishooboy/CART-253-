//MORNING BELL, I JUST SAW A SONG CALLED THIS WAY AND I THOUGHT IT WAS A GOOD NAME FOR THIS PROJECT. I HOPE YOU ENJOY IT!
let sky = {
    r: 10,
    g: 20,
    b: 40
}

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
}