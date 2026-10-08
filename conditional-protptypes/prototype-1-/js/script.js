//THE BIRD FAM SHOWS A MOTHER BIRD WITH HER BABY BIRD TRYING TO FOLLOW HER, BUT HE ISN'T THAT GOOD OF A FLYEE AS YOU CAN SEE.
//SKY SHOWING MORNING TIME
let sky = {
    r: 10,
    g: 20,
    b: 40
}
//CHILD BIRD
let cbird = {
    //THESE COORDINATES WILL BE USED FOR THE POSITION OF OUR BIRD
    x1: -110,
    y1: 150,
    x2: -90,
    y2: 150,
    x3: -100,
    y3: 195,
    x4: -100,
    y4: 190,
    speed: 0.1,

    //THESE COORDINATES WILL BE USED FOR THE FLAPPING OF THE WINGS
    wing1: {
        x: -110,
        y: 150
    },
    wing2: {
        x: -90,
        y: 150
    },

    // Colour  
    fill: {
        r: 255,
        g: 200,
        b: 0
    }
};
//MOTHER BIRD I COPIED FROM MY VARIABLE CHALLENGE
let bird = {
    x1: -100,
    y1: 100,
    x2: 0,
    y2: 100,
    x3: -50,
    y3: 150,
    x4: -50,
    y4: 130,
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
    drawBirds();
}

function drawBird() {

    noStroke();
    fill(bird.fill.r, bird.fill.g, bird.fill.b);

    quad(bird.x1, bird.y1, bird.x4, bird.y4, bird.x2, bird.y2, bird.x3, bird.y3);


    if (bird.x1 < 500) {//POSITION OF THE BIRD MOVING ACROSS THE SCREEN
        bird.x1 += bird.speed;
        bird.x2 += bird.speed;
        bird.x3 += bird.speed;
        bird.x4 += bird.speed;
        bird.speed += 0.01;
        let x = bird.x1;//FLAPPING WINGS
        bird.y1 = 30 * sin(x * 0.1) + 100;
        bird.y2 = 30 * sin(x * 0.1) + 100;
    }

}
function drawCBird() {

    noStroke();
    fill(cbird.fill.r, cbird.fill.g, cbird.fill.b);

    quad(cbird.x1, cbird.y1, cbird.x4, cbird.y4, cbird.x2, cbird.y2, cbird.x3, cbird.y3);
    if (cbird.x1 < 500) {
        cbird.x1 += cbird.speed;
        cbird.x2 += cbird.speed;
        cbird.x3 += cbird.speed;
        cbird.x4 += cbird.speed;
        cbird.speed += 0.01;
        let y = cbird.x1; // HIS WINGS FLAPPING 
        cbird.wing1.y = 10 * sin(y * 0.1) + 0;
        cbird.wing2.y = 10 * sin(y * 0.1) + 0;

        let x = cbird.x1;//POSITION OF THE child BIRD MOVING ACROSS THE SCREEN
        cbird.y1 = 100 * sin(x * 0.03) + 120 + cbird.wing1.y;
        cbird.y2 = 100 * sin(x * 0.03) + 120 + cbird.wing2.y;
        cbird.y3 = 100 * sin(x * 0.03) + 135;
        cbird.y4 = 100 * sin(x * 0.03) + 130;
    }


}
function drawBirds() {
    drawBird();
    drawCBird();
}