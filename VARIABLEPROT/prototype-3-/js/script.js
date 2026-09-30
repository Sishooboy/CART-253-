//THE BIRD FAM SHOWS A MOTHER BIRD WITH HER BABY BIRD TRYING TO FOLLOW HER, BUT HE ISN'T THAT GOOD OF A FLYEE AS YOU CAN SEE.


//SKY SHOWING MORNING TIME
let sky = {
    r: 10,
    g: 10,
    b: 10
}

let bird = {
    body: {
        x1: 120,
        y1: 120,
        x2: 280,
        y2: 120,
        x3: 220,
        y3: 260,
        x4: 180,
        y4: 260,
    },
    fill: {
        r: 255,
        g: 255,
        b: 0
    },
    head: {
        x1: 200,
        y1: 50,
        x2: 240,
        y2: 100,
        x3: 160,
        y3: 100,
    },
    tail: {
        x1: 180,
        y1: 280,
        x2: 220,
        y2: 280,
        x3: 260,
        y3: 350,
        x4: 140,
        y4: 350,
    },
    wings: {
        x1: 20,
        y1: 120,
        x2: 380,
        y2: 120,
        x3: 200,
        y3: 250,
    },
    aura: {
        x: 200,
        y: 180,
        rad: 30,
        op: 255,
    }


};
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(sky.r, sky.g, sky.b);
    phoenix()
    aura()



}
function phoenix() {


    function birdbody() {
        noStroke()
        fill(bird.fill.r, bird.fill.g, bird.fill.b)
        quad(bird.body.x1, bird.body.y1, bird.body.x2, bird.body.y2, bird.body.x3, bird.body.y3, bird.body.x4, bird.body.y4,)

    }
    function head() {
        noStroke()
        fill(bird.fill.r, bird.fill.g, bird.fill.b)
        triangle(bird.head.x1, bird.head.y1, bird.head.x2, bird.head.y2, bird.head.x3, bird.head.y3)

    }
    function tail() {
        noStroke()
        fill(bird.fill.r, bird.fill.g, bird.fill.b)
        quad(bird.tail.x1, bird.tail.y1, bird.tail.x2, bird.tail.y2, bird.tail.x3, bird.tail.y3, bird.tail.x4, bird.tail.y4,)
    }
    function wings() {
        noStroke()
        fill(bird.fill.r, bird.fill.g, bird.fill.b)
        triangle(bird.wings.x1, bird.wings.y1, bird.wings.x2, bird.wings.y2, bird.wings.x3, bird.wings.y3)


    }

    tail()
    birdbody()
    head()
    wings()
}
/*function aura() {
    noStroke()
    fill(255, 0, 0, bird.aura.op)
    circle(bird.aura.x, bird.aura.y, bird.aura.rad)
    if (bird.aura)

}*/
