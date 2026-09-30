//THE BIRD FAM SHOWS A MOTHER BIRD WITH HER BABY BIRD TRYING TO FOLLOW HER, BUT HE ISN'T THAT GOOD OF A FLYEE AS YOU CAN SEE.


//SKY SHOWING MORNING TIME
let sky = {
    r: 10,
    g: 20,
    b: 40
}

let bird = {
    xbody: 130,
    ybody: 230,
    radiusbody: 130,
    xhead: 170,
    yhead: 170,
    radiushead: 70,
    speed: 0.1,
    mouth: {
        x1: 230,
        y1: 200,
        x2: 200,
        y2: 160,
        x3: 180,
        y3: 180,
        x4: 190,
        y4: 190,
    },
    fill: {
        r: 255,
        g: 200,
        b: 100
    }
};
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(sky.r, sky.g, sky.b);
    if (sky.b < 235) {
        sky.b += 0.7;
    }
    if (sky.g < 205) {
        sky.g += 0.5;
    }
    if (sky.r < 135) {
        sky.r += 0.5;
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
    function drawbody() {
        noStroke();
        fill(bird.fill.r, bird.fill.g, bird.fill.b);
        circle(bird.xbody, bird.ybody, bird.radiusbody);
        if (sky.b > 120) {
            if (bird.xhead > 75) {
                bird.xhead -= 2;
                bird.mouth.x1 -= 4.7
                bird.mouth.x2 -= 3.2
                bird.mouth.x3 -= 2.5
                bird.mouth.x4 -= 3
            }
        }

    }
    function drawhead() {
        noStroke();
        fill(bird.fill.r, bird.fill.g + 20, bird.fill.b - 20);
        circle(bird.xhead, bird.yhead, bird.radiushead);
        fill(bird.fill.r, bird.fill.g - 20, bird.fill.b + 20);
        quad(bird.mouth.x1, bird.mouth.y1, bird.mouth.x2, bird.mouth.y2, bird.mouth.x3, bird.mouth.y3, bird.mouth.x4, bird.mouth.y4);
    }
    drawbody()
    drawhead()
}