//THE BIRD FAM SHOWS A MOTHER BIRD WITH HER BABY BIRD TRYING TO FOLLOW HER, BUT HE ISN'T THAT GOOD OF A FLYEE AS YOU CAN SEE.
//SKY SHOWING MORNING TIME
let sky = {
    r: 10,
    g: 20,
    b: 40
}
let bird = {
    xbody: 120,
    ybody: 150,
    radiusbody: 25,
    xhead: 170,
    yhead: 150,
    radiushead: 12,
    speed: 0.1,
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
    drawBranch();
    drawBird();
}
function drawBranch() {
    fill(101, 67, 33);   // brown color
    stroke(101, 67, 33);   // brown line
    strokeWeight(5);      // thickness of the line
    triangle(190, 290, 150, 290, 380, 320);
    triangle(-50, 300, 350, 270, -50, 320);
}
function drawBird() {
    noStroke();
    fill(bird.fill.r, bird.fill.g, bird.fill.b);
    circle(bird.xbody, bird.ybody, bird.radiusbody);
    circle(bird.xhead, bird.yhead, bird.radiushead);
}