
// Moses and sea
function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {

    background(135, 206, 235);
    sea();
    ground();
    sea2();
    moses();
    staff();
}

function ground() {
    push();
    fill(139, 69, 19);
    noStroke();
    rect(-200, -50, 400, 250);
    pop();
}
function sea() {


    push();
    fill(0, 191, 255);
    noStroke();
    translate(-0.2 * frameCount, 0);
    triangle(-200, -50, 0, -50, -200, -200);
    pop();

    push();
    fill(0, 191, 255);
    noStroke();
    translate(0, 0.2 * frameCount);
    rectMode(CENTER);
    square(0, 50, 400);
    pop();
    push();
    fill(0, 191, 255);
    noStroke();
    translate(-0.2 * -frameCount, 0);
    triangle(200, -50, 0, -50, 200, -200);
    pop();

}
function sea2() {
    push()
    fill(0, 191, 255);
    noStroke();
    triangle(-100, -50, -200, -50, -200, 0);
    pop();

    push()
    fill(0, 191, 255);
    noStroke();
    triangle(100, -50, 200, -50, 200, 0);
    pop();
}
function moses() {
    function head() {
        push();
        fill(0);
        noStroke();
        circle(0, -55, 20);
        pop();
    }
    function torso() {
        push();
        fill(0);
        noStroke();
        triangle(-30, -43, 30, -43, 0, 0);
        pop();
    }
    function legs() {
        push();
        fill(0);
        noStroke();
        triangle(0, -30, 40, 50, -40, 50);
        pop();
        push();
        fill(139, 69, 19);
        noStroke();
        triangle(0, 10, 40, 70, -40, 70);
        pop();
    }
    function arms() {
        push();
        fill(0);
        noStroke();
        rectMode(CENTER);
        rect(0, -40, 70, 10);
        pop();
        push();
        fill(0)
        noStroke();
        rectMode(CENTER);
        rect(-35, -25, 10, 40);
        pop();
        push();
        fill(0)
        noStroke();
        rectMode(CENTER);
        rect(35, -55, 10, 40);
        pop();

    }


    head();
    torso();
    legs();
    arms();
}
function staff() {
    push();
    fill(139, 69, 19);
    noStroke();
    rectMode(CENTER);
    rect(35, -75, 150, 5);
    pop();

    push();
    fill(139, 69, 19);
    noStroke();
    circle(-35, -75, 20);
    pop();
}

